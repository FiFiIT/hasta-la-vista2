import * as types from "./actionTypes";
import * as hastaApi from "../../api/hastaApi";
import { beginApiCall, stopApiCall } from "./apiStatusActions";

export function searchBadmintonSuccess(freeCourts) {
  return { type: types.SEARCH_BADMINTON_SUCCESS, freeCourts };
}

export function searchBadminton(badmintonRequest) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return hastaApi
      .searchForFreeCourts(badmintonRequest)
      .then(freeCourts => {
        dispatch(searchBadmintonSuccess(freeCourts));
      })
      .catch(error => {
        console.log("Error when searchForFreeCourts: " + error);
        dispatch(stopApiCall());
        throw error;
      });
  };
}
