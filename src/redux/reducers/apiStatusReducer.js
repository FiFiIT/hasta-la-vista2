import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallStatusReducer(
  state = initialState.squashApiCallInPogress,
  action
) {
  switch (action.type) {
    case types.BEGIN_API_CALL:
      return true;
    case types.STOP_API_CALL:
      return false;
    default:
      return state;
  }
}
