import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/actionTypes";

import { saveState, loadState } from "../localStorage";

const LOCAL_STORAGE_KEY = "user";

const persistedState = loadState(LOCAL_STORAGE_KEY) || {};

const initialState = {
  name: "Artur"
};

const userReducer = (state = initialState, action) => {
  const newState = (function() {
    switch (action.type) {
      default:
        return state;
    }
  })();
  saveState(LOCAL_STORAGE_KEY, newState);
  return newState;
};

export default userReducer;
