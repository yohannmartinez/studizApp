import axios from "axios";

export const createLesson = async (user_id, lesson) => {
  const resp = await axios
    .post("/api/lessons/create", {
      user_id: user_id,
      name: lesson.name,
      description: lesson.description,
      year: lesson.year,
      institution: lesson.institution,
      city: lesson.city,
      degree: lesson.degree,
      faculty: lesson.faculty,
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

export const getLessonById = async (lesson_id) => {
  const resp = await axios.get("/api/lessons/getById", {
    params: { lesson_id: lesson_id },
  });
  return resp;
};
