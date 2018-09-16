import { SHOW_MODAL } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload || false;
    default:
      return state;
  }
}
