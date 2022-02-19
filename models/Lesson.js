const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonDataSchema = {
  type: {
    type: String,
    default: "doc",
  },
  content: {
    type: String,
    default: "",
  },
};

// Create Schema
const LessonSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  data: lessonDataSchema,
  lastModification: {
    type: Date,
    required: false,
  },
  creationDate: {
    type: Date,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  //name of school in specific city
  institution: {
    type: String,
    required: true,
  },
  //city of the institution
  city: {
    type: String,
    required: true,
  },
  //country of the institution
  country: {
    type: String,
    required: true,
    default: "France",
  },
  //lvl of the lesson
  degree: {
    type: String,
    required: true,
  },
  //filière
  studyField: {
    type: String,
    required: true,
  },
  private: {
    type: Boolean,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
});

LessonSchema.index({
  name: "text",
});

module.exports = Lesson = mongoose.model("lessons", LessonSchema);
