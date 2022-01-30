import { SET_BLOCKS } from "./types";

// set lesson blocks
export const setBlocks = (payload) => {
  return {
    type: SET_BLOCKS,
    payload,
  };
};
