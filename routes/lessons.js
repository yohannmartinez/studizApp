const express = require("express");
const router = express.Router();
const metafetch = require("metafetch");

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

// @route POST api/lessons/create
// @desc create new lesson
// @access Public
router.post("/create", (req, res) => {
  const newLesson = new Lesson({
    user_id: req.body.user_id,
    content: { time: Date.now(), blocks: [], version: "1" },
    last_modification: new Date(),
    creation_date: new Date(),
    name: req.body.name,
    description: req.body.description,
    year: req.body.year,
    institution: req.body.institution,
    city: req.body.city,
    degree: req.body.degree,
    faculty: req.body.faculty,
    private: req.body.private,
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

// @route GET api/lessons/getById
// @desc search specific lessons by id
// @access Public
// @params lesson_id
router.get("/getById", (req, res) => {
  Lesson.findOne({ _id: req.query.lesson_id })
    .then((lesson) => {
      const all_data_lesson = async (lesson) => {
        let user = await User.findOne({ _id: lesson.user_id }, (err, user) => {
          return user;
        });
        let likes = await LessonLike.find(
          { lesson_id: lesson._id },
          (err, likes) => {
            if (err) {
              return [];
            }
            return likes;
          }
        );
        res.status(200).json({
          success: true,
          lesson: { ...lesson._doc, user, likes },
          message: "",
        });
      };
      all_data_lesson(lesson);
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        success: false,
        lesson: null,
        message: "Un problème est survenu lors de la récupération du cours",
      });
    });
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
