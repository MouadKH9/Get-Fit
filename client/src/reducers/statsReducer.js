import { FETCH_STATS } from "../actions/types";
export default function(state = "loading", action) {
  switch (action.type) {
    case FETCH_STATS:
      return action.payload || false;
    default:
      return state;
  }
}
