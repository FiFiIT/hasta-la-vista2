import { combineReducers } from "redux";
import freeCourts from "./squashReducer";
import squashApiCallInProgress from "./apiStatusReducer";

const rootReducers = combineReducers({
  freeCourts,
  squashApiCallInProgress
});

export default rootReducers;
