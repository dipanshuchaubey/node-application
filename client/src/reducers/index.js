import { combineReducers } from "redux";
import errorReducers from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducers
});
