import * as types from "./actionTypes";
import * as squashApi from "../../api/hastaApi";
import { beginApiCall, stopApiCall } from "./apiStatusActions";

export function searchSquashSuccess(freeCourts) {
  return { type: types.SEARCH_SQUASH_SUCCESS, freeCourts };
}

export function searchSquash(squashRequest) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return squashApi
      .searchForFreeCourts(squashRequest)
      .then(freeCourts => {
        dispatch(searchSquashSuccess(freeCourts));
        if (freeCourts.length > 0) {
          dispatch(stopApiCall());
        }
      })
      .catch(error => {
        console.log("Error when searchForFreeCourts: " + error);
        dispatch(stopApiCall());
        throw error;
      });
  };
}
