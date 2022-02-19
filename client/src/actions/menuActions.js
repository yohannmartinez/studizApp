import { SET_MENU } from "./types";

// set menu isOpen to false or true
export const setMenu = (isOpen) => {
  return {
    type: SET_MENU,
    payload: isOpen,
  };
};
