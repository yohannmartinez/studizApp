import axios from "axios";

export const getUserById = async (userId) => {
  const resp = await axios.get("/api/users/getById", {
    params: { _id: userId },
  });
  return resp;
};

export const getUserLanguage = async (userId) => {
  const resp = await axios.get("/api/users/getUserLanguage", {
    params: { userId },
  });
  return resp;
};

export const registerUser = async (user) => {
  const resp = await axios.post("/api/users/register", {
    user,
  });
  return resp;
};

export const updatePassword = async (userId, oldPassword, newPassword) => {
  const resp = await axios.post("/api/users/updatePassword", {
    userId,
    oldPassword,
    newPassword,
  });
  return resp;
};

export const getUserByEmail = async (email) => {
  const resp = await axios.get("/api/users/getUserByEmail", {
    params: { email: email },
  });
  return resp;
};
