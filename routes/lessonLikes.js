const express = require("express");
const router = express.Router();
const LessonLike = require("../models/LessonLike");

router.post("/like", (req, res) => {
  LessonLike.find(
    { userId: req.body.userId, lessonId: req.body.lessonId },
    (err, like) => {
      if (err) {
        res.status(400).json({ message: "[like] une erreur est survenue" });
      }
      if (like.length === 0) {
        const like = new LessonLike({
          userId: req.body.userId,
          lessonId: req.body.lessonId,
        });
        like
          .save()
          .then((like) => {
            res.status(200).json({
              success: true,
              like: like,
              message: "Successfuly liked the lesson",
            });
          })
          .catch((err) => {
            res.status(400).json({ message: "[like] une erreur est survenue" });
          });
      } else {
        LessonLike.deleteOne({
          userId: req.body.userId,
          lessonId: req.body.lessonId,
        }).catch((err) => {
          console.log(err);
        });
        res.status(200).json({
          success: true,
          like: null,
          message: "Successfuly liked the lesson",
        });
      }
    }
  );
});

module.exports = router;
