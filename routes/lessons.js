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
    content: { time: Date.now(), blocks: [], version: "1" },
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
    nonPrivateLessons = removePrivateLessons(lessonWithLikes, userId).sort(
      (firstItem, secondItem) => {
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
      }
    );

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

router.get("/getUrlEditor", (req, res) => {
  metafetch.fetch(req.query.url, (err, meta) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).json({
        success: 1,
        meta: {
          title: meta.title,
          site_name: meta.siteName,
          description: meta.description,
          image: {
            url: meta.image,
          },
        },
      });
    }
  });
});

router.post("/addImageEditor", (req, res) => {});

module.exports = router;
