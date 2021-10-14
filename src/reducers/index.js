import signupReducer from "./signupReducer";
import loginReducer from "./loginReducer";
import usersignupReducer from "./usersignupReducer";
import dltReducer from "./dltReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  signupReducer,
  loginReducer,
  usersignupReducer,
  dltReducer
});

export default rootReducer;
