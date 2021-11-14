import { SET_LANGUAGE } from "./types";

// set language of the website
export const setLanguage = (decoded) => {
  return {
    type: SET_LANGUAGE,
    payload: decoded,
  };
};
