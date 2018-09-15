import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listReducer from "./listReducer";
import statsReducer from "./statsReducer";

export default combineReducers({
  auth: authReducer,
  list: listReducer,
  stats: statsReducer
});
