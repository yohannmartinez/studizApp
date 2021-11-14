
import { SET_SNACK, RESET_SNACK } from "./types";

//set snack
export const setSnack = decoded => {
  return {
    type: SET_SNACK,
    payload: decoded
  };
};

//reset snack
export const resetSnack = decoded => {
  return {
    type: RESET_SNACK,
    payload: decoded
  };
};