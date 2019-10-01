import { combineReducers } from "redux";
import freeCourts from "./squashReducer";
import squashApiCallInProgress from "./apiStatusReducer";
import badmintonReducer from "./badmintonReducer";

const rootReducers = combineReducers({
  freeCourts,
  squashApiCallInProgress,
  badmintonReducer
});

export default rootReducers;
