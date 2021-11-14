const LessonLike = require("../models/LessonLike");
const User = require("../models/User");

const getLessonsCreators = async (lessons) => {
  if (lessons.length === 0) {
    return lessons;
  }
  const lessonsWithCreator = await Promise.all(
    lessons.map(async (lesson) => {
      const { user_id } = lesson;
      const lessonCreator = await User.findById(
        user_id,
        "_id firstname lastname last_activity"
      ).lean();
      return { ...lesson, creator: lessonCreator };
    })
  );

  return lessonsWithCreator;
};

const getLessonsLikes = async (lessons) => {
  if (lessons.length === 0) {
    return lessons;
  }
  const lessonsWithLikes = await Promise.all(
    lessons.map(async (lesson) => {
      const { _id } = lesson;
      const lessonLikes = await LessonLike.find({ lesson_id: _id }).lean();
      return { ...lesson, likes: lessonLikes.length };
    })
  );

  return lessonsWithLikes;
};

const removePrivateLessons = (lessons, userId) => {
  return lessons.filter(
    (lesson) =>
      lesson.private === false ||
      (lesson.private === true && lesson.user_id.toString() === userId)
  );
};

module.exports = { getLessonsCreators, getLessonsLikes, removePrivateLessons };
