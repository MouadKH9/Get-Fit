import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listReducer from "./listReducer";
import statsReducer from "./statsReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
  auth: authReducer,
  list: listReducer,
  stats: statsReducer,
  settings: settingsReducer
});
