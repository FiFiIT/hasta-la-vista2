import * as types from "../actions/actionTypes";

export default function squashReducer(state = {}, action) {
  switch (action.type) {
    case types.SEARCH_SQUASH_SUCCESS || types.SEARCH_BADMINTON_SUCCESS:
      return action.freeCourts;
    default:
      return state;
  }
}
