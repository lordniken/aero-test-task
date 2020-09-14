import { appReducer as app } from "./appReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  app,
});
