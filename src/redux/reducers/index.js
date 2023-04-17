import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FlagsReducer from "./FlagsReducer";
export default combineReducers({
  auth: AuthReducer,
  flags: FlagsReducer,
});
