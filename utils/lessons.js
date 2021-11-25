const LessonLike = require("../models/LessonLike");
const User = require("../models/User");

const getLessonsCreators = async (lessons) => {
  if (lessons.length === 0) {
    return lessons;
  }
  const lessonsWithCreator = await Promise.all(
    lessons.map(async (lesson) => {
      const { userId } = lesson;
      const lessonCreator = await User.findById(
        userId,
        "_id firstname lastname lastActivity profileImage"
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
      const lessonLikes = await LessonLike.find({ lessonId: _id }).lean();
      return { ...lesson, likes: lessonLikes.length };
    })
  );

  return lessonsWithLikes;
};

const removePrivateLessons = (lessons, userId) => {
  return lessons.filter(
    (lesson) =>
      lesson.private === false ||
      (lesson.private === true && lesson.userId.toString() === userId)
  );
};

module.exports = { getLessonsCreators, getLessonsLikes, removePrivateLessons };
