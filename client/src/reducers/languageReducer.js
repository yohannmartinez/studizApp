import { SET_LANGUAGE } from "../actions/types";

const initialState = {
  current_language: localStorage.getItem("language") || "fr",
};

export default function setReducerFunctions(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        current_language: action.payload,
      };
    default:
      return state;
  }
}
