import { combineReducers } from "redux";
import assetReducer from "./assets";

export default combineReducers({
  assets: assetReducer,
});
