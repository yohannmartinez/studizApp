const express = require("express");
const router = express.Router();
const metafetch = require("metafetch");
const { isValidObjectId } = require("mongoose");

// Load models
const Lesson = require("../models/Lesson");
const LessonLike = require("../models/LessonLike");
const User = require("../models/User");

//functions
const { getSearchFilters } = require("../utils/searchLessonFilters");
const {
  getLessonsCreators,
  getLessonsLikes,
  removePrivateLessons,
} = require("../utils/lessons");

/**
 * @route POST api/lessons/create
 * @description create lesson with given parameters
 */
router.post("/create", (req, res) => {
  const {
    userId,
    name,
    description,
    institution,
    city,
    degree,
    studyField,
    private,
    year,
  } = req.body;
  const newLesson = new Lesson({
    userId: userId,
    data: {
      type: "doc",
      content: "",
    },
    lastModification: new Date(),
    creationDate: new Date(),
    name: name,
    description: description,
    year: year,
    institution: institution,
    city: city,
    degree: degree,
    studyField: studyField,
    private: private,
  });

  newLesson
    .save()
    .then((lesson) => {
      res.status(200).json({ success: true, lesson, message: "" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Un problème est survenu lors de la création du cours",
      });
    });
});

/**
 * @route GET api/lessons/getById
 * @description retrieve lesson with given lesson Id
 * @param {ObjectId} lessonId id of the lesson you want to retrieve
 */
router.get("/getById", async (req, res) => {
  const { lessonId } = req.query;

  if (!isValidObjectId(lessonId)) {
    res.status(200).json({
      success: false,
      lesson: null,
      message: "L'id de la leçon est invalide",
    });
  } else {
    const lesson = await Lesson.findOne({ _id: req.query.lessonId }).lean();
    if (!lesson) {
      res.status(200).json({
        success: false,
        lesson: null,
        message: "Aucune leçon avec cet id",
      });
    } else {
      const formattedLesson = async (lesson) => {
        lessonWithCreators = await getLessonsCreators([lesson]);
        lessonWithLikes = await getLessonsLikes(lessonWithCreators);
        res.status(200).json({
          success: true,
          lesson: { ...lessonWithLikes[0] },
          message: "",
        });
      };
      formattedLesson(lesson);
    }
  }
});

/**
 * @route GET api/lessons/search
 * @description search lessons with given filters
 * @param {Array} filters [{attribute: "name", value: "Théorème de pythagore"}, {attribute: "year", value: ["2019", "2020"]}]
 * @param {Number} numberOfLessons total number of lessons shown in page
 * @param {String} userId user making the request
 */
router.get("/search", (req, res) => {
  const { filters, numberOfLessons, userId } = req.query;
  const isFilters = JSON.parse(filters.toString()).length > 0;
  const { searchFilters, isTextFilters } = getSearchFilters(filters);

  const returnFormatLessons = async (lessons) => {
    lessonWithCreators = await getLessonsCreators(lessons);
    lessonWithLikes = await getLessonsLikes(lessonWithCreators);
    nonPrivateLessons = lessonWithLikes.sort((firstItem, secondItem) => {
      if (isTextFilters) {
        return (
          secondItem.score - firstItem.score ||
          secondItem.views - firstItem.views ||
          secondItem.likes - firstItem.likes ||
          secondItem.name.localeCompare(secondItem.name)
        );
      } else {
        return (
          secondItem.views - firstItem.views ||
          secondItem.likes - firstItem.likes ||
          secondItem.name.localeCompare(secondItem.name)
        );
      }
    });

    res.status(200).json({
      success: true,
      lessons: nonPrivateLessons.splice(numberOfLessons, 5),
      message: "",
    });
  };

  Lesson.find(
    isFilters
      ? {
          $and: searchFilters,
        }
      : {},
    isTextFilters && { score: { $meta: "textScore" } }
  )
    .lean()
    .then((lessons, err) => {
      returnFormatLessons(lessons);
    });
});

/**
 * @route GET api/lessons/getUserLessons
 * @description retrieve lessons for a specific user
 * @param {ObjectId} userId id of the user
 */
router.get("/getUserLessons", async (req, res) => {
  const { userId } = req.query;
  if (!isValidObjectId(userId)) {
    res.status(200).json({
      success: false,
      lessons: null,
      message: "L'id de la leçon est invalide",
    });
  } else {
    const lessons = await Lesson.find({ userId: req.query.userId }).lean();
    const lessonWithCreators = await getLessonsCreators(lessons);
    if (!lessonWithCreators) {
      res.status(200).json({
        success: false,
        lessons: null,
        message: "Aucune leçon avec cet id",
      });
    } else {
      res.status(200).json({
        success: true,
        lessons: lessonWithCreators,
        message: "",
      });
    }
  }
});

/**
 * @route GET api/lessons/getUserLikedLessons
 * @description retrieve lessons liked by user
 * @param {ObjectId} userId id of the user
 */
router.get("/getUserLikedLessons", async (req, res) => {
  const { userId } = req.query;
  if (!isValidObjectId(userId)) {
    res.status(200).json({
      success: false,
      lessons: null,
      message: "L'id de la leçon est invalide",
    });
  } else {
    const likes = await LessonLike.find({ userId }).lean();
    const likedLessons = await Promise.all(
      likes.map(async (like) => {
        const { lessonId } = like;
        return await Lesson.findOne({ _id: lessonId }).lean();
      })
    );
    const lessonWithCreators = await getLessonsCreators(likedLessons);

    if (!lessonWithCreators) {
      res.status(200).json({
        success: false,
        lessons: [],
        message: "LIKED_LESSONS_RETRIEVE_ERROR",
      });
    } else {
      res.status(200).json({
        success: true,
        lessons: lessonWithCreators,
        message: "",
      });
    }
  }
});

router.post("/addView", async (req, res) => {
  const { lessonId } = req.body;

  Lesson.findOneAndUpdate({ _id: lessonId }, { $inc: { views: 1 } }, () => {
    res.status(200).json({
      success: true,
      message: null,
    });
  });
});

router.post("/saveLessonChanges", async (req, res) => {
  const { lessonId, lessonContent } = req.body;

  Lesson.findOneAndUpdate(
    { _id: lessonId },
    { "data.content": lessonContent, lastModification: new Date() },
    (error, lesson) => {
      res.status(200).json({
        success: true,
        message: null,
      });
    }
  );
});

router.delete("/deleteLesson", async (req, res) => {
  const { lessonId } = req.query;

  Lesson.findOneAndDelete({ _id: lessonId }, {}, (error, lesson) => {
    LessonLike.deleteMany({ lessonId }, {}, () => {
      res.status(200).json({
        success: true,
        message: null,
      });
    });
  });
});

module.exports = router;
