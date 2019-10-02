import { combineReducers } from "redux";
import freeCourts from "./squashReducer";
import squashApiCallInProgress from "./apiStatusReducer";
import foundCourts from "./badmintonReducer";

const rootReducers = combineReducers({
  freeCourts,
  squashApiCallInProgress,
  foundCourts
});

export default rootReducers;
