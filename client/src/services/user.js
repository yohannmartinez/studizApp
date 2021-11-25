import axios from "axios";

export const getUserById = async (userId) => {
  const resp = await axios.get("/api/users/getById", {
    params: { _id: userId },
  });
  return resp;
};

export const updateUser = async (user, userId) => {
  const resp = await axios.post("/api/users/updateUser", {
    user: user,
    userId: userId,
  });
  return resp;
};

export const updatePassword = async (userId, password) => {
  const resp = await axios.post("/api/users/updatePassword", {
    userId,
    password,
  });
  return resp;
};

export const changeEmail = async (email, confirmEmail, oldEmail, userId) => {
  const resp = await axios.post("/api/users/changeEmail", {
    email: email,
    confirmEmail: confirmEmail,
    oldEmail: oldEmail,
    userId: userId,
  });
  return resp;
};

export const changePassword = async (
  oldPassword,
  newPassword,
  confirmPassword,
  userId,
  email
) => {
  const resp = await axios.post("/api/users/changePassword", {
    oldPassword: oldPassword,
    newPassword: newPassword,
    confirmPassword: confirmPassword,
    userId: userId,
    email: email,
  });
  return resp;
};

export const getUserByEmail = async (email) => {
  const resp = await axios.get("/api/users/getUserByEmail", {
    params: { email: email },
  });
  return resp;
};

export const setNewPassword = async (userId, new_password, userEmail) => {
  const resp = await axios.post("/api/users/setNewPassword", {
    userId: userId,
    new_password: new_password,
    email: userEmail,
  });
  return resp;
};
