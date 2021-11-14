import { SET_SNACK, RESET_SNACK } from "../actions/types";

const initialState = {
  show: false,
  text: "Aucun texte",
  duration: false,
  type: "error",
  action: () => {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SNACK:
      return {
        ...state,
        show: action.payload.show,
        text: action.payload.text,
        duration: action.payload.duration,
        type: action.payload.type,
        action: action.payload.action,
      };
    case RESET_SNACK:
      return {
        ...state,
        show: false,
        text: "Aucun texte",
        duration: false,
        type: "error",
        action: () => {},
      };
    default:
      return state;
  }
}
