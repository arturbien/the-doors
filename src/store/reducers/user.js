import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/actionTypes";

import { saveState, loadState } from "../localStorage";

const LOCAL_STORAGE_KEY = "user";

const initialState = loadState(LOCAL_STORAGE_KEY) || null;

// TODO save login token to state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { email, remember } = action.payload;
      remember && saveState(LOCAL_STORAGE_KEY, email);
      return email;
    default:
      return state;
  }
};

export default userReducer;
