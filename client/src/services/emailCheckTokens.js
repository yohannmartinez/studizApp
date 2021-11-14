import axios from "axios";

export const checkEmailToken = async (token) => {
  const resp = await axios.post("/api/emailCheckTokens/checkToken", {
    token: token,
  });
  return resp;
};
