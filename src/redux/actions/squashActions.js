import * as types from "./actionTypes";
import * as squashApi from "../../api/squashApi";
import { beginSquashApiCall, stopSquashApiCall } from "./apiStatusActions";

export function search(squashRequest) {
  return { type: types.SERACH_SQUASH, squashRequest };
}

export function searchSquashSuccess(freeCourts) {
  return { type: types.SEARCH_SQUASH_SUCCESS, freeCourts };
}

export function searchSquash(squashRequest) {
  return function(dispatch) {
    dispatch(beginSquashApiCall());
    return squashApi
      .searchForFreeCourts(squashRequest)
      .then(freeCourts => {
        dispatch(searchSquashSuccess(freeCourts));
        if (freeCourts.Length > 0) {
          dispatch(stopSquashApiCall());
        }
      })
      .catch(error => {
        console.log("Error when searchForFreeCourts: " + error);
        dispatch(stopSquashApiCall());
        throw error;
      });
  };
}
