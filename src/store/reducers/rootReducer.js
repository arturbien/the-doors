import { combineReducers } from "redux";

import userReducer from "./user";
import errorsReducer from "./errors";
import loadingReducer from "./loading";
import configuratorReducer from "./configurator";

const rootReducer = combineReducers({
  user: userReducer,
  errors: errorsReducer,
  loading: loadingReducer,
  configurator: configuratorReducer
});

export default rootReducer;
