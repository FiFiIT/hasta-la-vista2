import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallStatusReducer(
  state = initialState.squashApiCallInPogress,
  action
) {
  switch (action.type) {
    case types.BEGIN_SQUASH_API_CALL:
      return 1;
    case types.STOP_SQUASH_API_CALL:
      return 0;
    default:
      return state;
  }
}
