import axios from "axios";

export const like_lesson = async (lesson_id, user_id) => {
  const resp = await axios.post("/api/lessonLikes/like", {
    lesson_id,
    user_id,
  });
  return resp;
};
