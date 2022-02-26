import axios from "axios";

export const createLesson = async (userId, lesson) => {
  const resp = await axios
    .post("/api/lessons/create", {
      userId: userId,
      name: lesson.name,
      description: lesson.description,
      year: lesson.year,
      institution: lesson.institution,
      city: lesson.city,
      degree: lesson.degree,
      studyField: lesson.studyField,
      private: lesson.private,
    })
    .catch((err) => {
      return err;
    });
  return resp;
};

export const getLessons = async (filters, numberOfLessons, userId) => {
  const resp = await axios.get("/api/lessons/search", {
    params: {
      filters: JSON.stringify(filters),
      numberOfLessons,
      userId,
    },
  });
  return resp;
};

export const getLessonById = async (lessonId) => {
  const resp = await axios.get("/api/lessons/getById", {
    params: { lessonId: lessonId },
  });
  return resp;
};

export const getUserLessons = async (userId) => {
  const resp = await axios.get("/api/lessons/getUserLessons", {
    params: { userId },
  });
  return resp;
};

export const getUserLikedLessons = async (userId) => {
  const resp = await axios.get("/api/lessons/getUserLikedLessons", {
    params: { userId },
  });
  return resp;
};

export const addLessonView = async (lessonId) => {
  const resp = await axios.post("/api/lessons/addView", { lessonId });
  return resp;
};

export const saveLessonChanges = async (lessonId, lessonContent) => {
  const resp = await axios.post("/api/lessons/saveLessonChanges", {
    lessonId,
    lessonContent,
  });
  return resp;
};
