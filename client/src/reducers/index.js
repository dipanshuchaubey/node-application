import { combineReducers } from "redux";
import errorReducers from "./errorReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducers,
  profile: profileReducer
});
