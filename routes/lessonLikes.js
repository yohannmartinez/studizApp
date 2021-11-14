const express = require("express");
const router = express.Router();
const LessonLike = require("../models/LessonLike");

router.post("/like", (req, res) => {
  LessonLike.find(
    { user_id: req.body.user_id, lesson_id: req.body.lesson_id },
    (err, like) => {
      if (err) {
        res.status(400).json({ message: "[like] une erreur est survenue" });
      }
      if (like.length === 0) {
        console.log("creating like");
        const like = new LessonLike({
          user_id: req.body.user_id,
          lesson_id: req.body.lesson_id,
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
        console.log("deleting like");

        LessonLike.deleteOne({
          user_id: req.body.user_id,
          lesson_id: req.body.lesson_id,
        }).catch((err)=>{console.log(err)});
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
