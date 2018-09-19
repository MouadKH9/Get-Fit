import { SHOW_SETTINGS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SHOW_SETTINGS:
      return action.payload || false;
    default:
      return state;
  }
}
