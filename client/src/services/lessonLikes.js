import axios from "axios";

export const like_lesson = async (lessonId, userId) => {
  const resp = await axios.post("/api/lessonLikes/like", {
    lessonId,
    userId,
  });
  return resp;
};
