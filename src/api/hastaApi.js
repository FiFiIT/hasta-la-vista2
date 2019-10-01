import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_SQUASH_BASE_URL;

// export function searchForFreeCourts(reservationRequest) {
//   const request = baseUrl + "/freeCourtsExclude";
//   return fetch(request)
//     .then(handleResponse)
//     .catch(handleError);
// }

export function searchForFreeCourts(reservationRequest) {
  const request = baseUrl + "/api/squash/freeCourtsExclude";
  return fetch(request, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(reservationRequest)
  })
    .then(handleResponse)
    .catch(handleError);
}
