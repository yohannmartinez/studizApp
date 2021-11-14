const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LessonLikeSchema = new Schema({
  lesson_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  liked_at: {
    type: Date,
    default: new Date(),
  },
});

module.exports = LessonLike = mongoose.model("lessonLikes", LessonLikeSchema);
