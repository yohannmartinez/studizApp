
import { SET_LOADER } from "./types";

// set menu status to false or true
export const setLoader = decoded => {
  return {
    type: SET_LOADER,
    payload: decoded
  };
};
