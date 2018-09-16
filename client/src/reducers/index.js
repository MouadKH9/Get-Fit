import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listReducer from "./listReducer";
import statsReducer from "./statsReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  auth: authReducer,
  list: listReducer,
  stats: statsReducer,
  modal: modalReducer
});
