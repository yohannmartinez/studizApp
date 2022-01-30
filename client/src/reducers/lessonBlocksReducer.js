import { SET_BLOCKS } from "../actions/types";

const initialState = {
  blocks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOCKS:
      return {
        ...state,
        blocks: action.payload,
      };
    default:
      return state;
  }
};
