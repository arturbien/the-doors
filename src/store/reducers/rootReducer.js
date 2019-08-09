import { combineReducers } from "redux";

import userReducer from "./user";
import loadingReducer from "./loading";
import errorsReducer from "./errors";

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  errors: errorsReducer
});

export default rootReducer;
