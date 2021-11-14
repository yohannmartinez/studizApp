const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new mongoose.Schema({
  blocks: Array,
  time: Number,
  version: String,
});

// Create Schema
const LessonSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  content: {
    type: contentSchema,
    required: true,
  },
  last_modification: {
    type: Date,
    required: false,
  },
  creation_date: {
    type: Date,
    required: false,
  },
  name: {
    type: String,
    required: true,
    autoIndex: false,
  },
  description: {
    type: String,
    required: true,
    autoIndex: false,
  },
  year: {
    type: String,
    required: true,
    autoIndex: false,
  },
  //name of school in specific city
  institution: {
    type: String,
    required: true,
    autoIndex: false,
  },
  //city of the institution
  city: {
    type: String,
    required: true,
    autoIndex: false,
  },
  //country of the institution
  country: {
    type: String,
    required: true,
    default: "France",
    autoIndex: false,
  },
  //lvl of the lesson
  degree: {
    type: String,
    required: true,
    autoIndex: false,
  },
  //filière
  faculty: {
    type: String,
    required: true,
    autoIndex: false,
  },
  private: {
    type: Boolean,
    required: true,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
});

LessonSchema.index({
  name: "text",
  institution: "text",
});

module.exports = Lesson = mongoose.model("lessons", LessonSchema);
