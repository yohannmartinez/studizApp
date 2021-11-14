import axios from "axios";

export const getUserById = async (user_id) => {
  const resp = await axios.get("/api/users/getById", {
    params: { _id: user_id },
  });
  return resp;
};

export const updateUser = async (user, user_id) => {
  const resp = await axios.post("/api/users/updateUser", {
    user: user,
    user_id: user_id,
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

export const changeEmail = async (email, confirmEmail, oldEmail, user_id) => {
  const resp = await axios.post("/api/users/changeEmail", {
    email: email,
    confirmEmail: confirmEmail,
    oldEmail: oldEmail,
    user_id: user_id,
  });
  return resp;
};

export const changePassword = async (
  oldPassword,
  newPassword,
  confirmPassword,
  user_id,
  email
) => {
  const resp = await axios.post("/api/users/changePassword", {
    oldPassword: oldPassword,
    newPassword: newPassword,
    confirmPassword: confirmPassword,
    user_id: user_id,
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

export const setNewPassword = async (user_id, new_password, user_email) => {
  const resp = await axios.post("/api/users/setNewPassword", {
    user_id: user_id,
    new_password: new_password,
    email: user_email,
  });
  return resp;
};
