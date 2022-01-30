import { combineReducers } from "redux";
import authReducer from "./authReducer";
import snackReducer from "./snackReducer";
import loaderReducer from "./loaderReducer";
import languageReducer from "./languageReducer";
import lessonBlocksReducer from "./lessonBlocksReducer";

export default combineReducers({
  auth: authReducer,
  snack: snackReducer,
  loader: loaderReducer,
  language: languageReducer,
  lessonBlocks: lessonBlocksReducer,
});
