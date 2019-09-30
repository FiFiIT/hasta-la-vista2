import * as types from "../actions/actionTypes";

export default function badmintonReducer(state = {}, action) {
  switch (action.type) {
    case types.SEARCH_BADMINTON_SUCCESS:
      return action.freeCourts;
    default:
      return state;
  }
}
