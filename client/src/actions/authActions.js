import axios from "axios";
import setAuthToken from "../services/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  SET_CURRENT_USER,
  USER_LOADING,
  SET_SNACK,
  SET_LOADER,
  RESET_SNACK,
} from "./types";
import { setLanguage } from "./languageActions";

// Register User
export const registerUser = (userData, history, t) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => {
      dispatch({
        type: SET_LOADER,
        payload: false,
      });
      history.push("/login");
    })
    .catch((err) =>
      dispatch({
        type: SET_SNACK,
        payload: {
          show: true,
          text: t(err.response.data.message),
          duration: 4000,
          type: "error",
          action: () => {
            dispatch({
              type: RESET_SNACK,
            });
          },
        },
      })
    );
};

// Login - get user token
export const loginUser = (userData, history, redirectLink, t) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      const { token, firstname } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);

      dispatch(setLanguage(decoded.userLanguage));
      dispatch(setCurrentUser(decoded));
      dispatch({
        type: SET_SNACK,
        payload: {
          show: true,
          text: t("LOGIN_SUCCESSFUL", [
            { argument: "{firstname}", value: firstname },
          ]),
          duration: 4000,
          type: "success",
          action: () => {
            dispatch({
              type: RESET_SNACK,
            });
          },
        },
      });
      redirectLink ? history.push(redirectLink) : history.goBack();
    })
    .catch((err) =>
      dispatch({
        type: SET_SNACK,
        payload: {
          show: true,
          text: t(err.response.data.message),
          duration: 4000,
          type: "error",
          action: () => {
            dispatch({
              type: RESET_SNACK,
            });
          },
        },
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "/login";
};
