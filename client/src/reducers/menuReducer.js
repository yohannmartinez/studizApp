import { SET_MENU } from "../actions/types";

const initialState = {
  isOpen: false,
};

export default function setReducerFunctions(state = initialState, action) {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
}
