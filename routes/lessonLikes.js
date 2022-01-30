const express = require("express");
const router = express.Router();
const LessonLike = require("../models/LessonLike");

router.post("/like", (req, res) => {
  LessonLike.find(
    { userId: req.body.userId, lessonId: req.body.lessonId },
    (err, like) => {
      if (err) {
        res
          .status(200)
          .json({ success: true, message: "LIKE_LESSON_PROCESS_ERROR" });
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
              message: "LIKED_LESSON",
            });
          })
          .catch((err) => {
            res
              .status(200)
              .json({ success: false, message: "LIKE_LESSON_PROCESS_ERROR" });
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
          message: "REMOVED_LIKE_LESSON",
        });
      }
    }
  );
});

module.exports = router;
