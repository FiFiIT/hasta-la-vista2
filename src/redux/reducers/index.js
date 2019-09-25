import { combineReducers } from "redux";
import hastaSquashResponse from "./squashReducer";

const rootReducers = combineReducers({
  hastaSquashResponse: hastaSquashResponse
});

export default rootReducers;
