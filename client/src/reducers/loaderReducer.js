import { SET_LOADER } from "../actions/types";

const initialState = {
  showLoader: false,
};

export default function setReducerFunctions(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        showLoader: action.payload,
      };
    default:
      return state;
  }
}
