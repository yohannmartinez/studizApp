const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LessonLikeSchema = new Schema({
  lessonId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  likedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = LessonLike = mongoose.model("lessonLikes", LessonLikeSchema);
