import { UPDATE_LIST, ADD_LOG } from "../actions/types";
export default function(state = "loading", action) {
  switch (action.type) {
    case UPDATE_LIST:
      return action.payload || false;
    case ADD_LOG:
      return action.payload || false;
    default:
      return state;
  }
}
