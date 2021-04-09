import { combineReducers } from "redux";
import assetsReducer from "./assets";

export default combineReducers({
  assets: assetsReducer,
});
