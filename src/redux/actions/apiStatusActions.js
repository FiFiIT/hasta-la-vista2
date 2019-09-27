import * as types from "./actionTypes";

export function beginSquashApiCall() {
  return { type: types.BEGIN_SQUASH_API_CALL };
}

export function stopSquashApiCall() {
  return { type: types.STOP_SQUASH_API_CALL };
}
