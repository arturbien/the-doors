import {
  LOGIN_SUCCESS,
  FETCH_ORGANIZATION_SUCCESS
  // FETCH_ORGANIZATION_REQUEST,
  // FETCH_ORGANIZATION_ERROR,
  // LOGOUT_SUCCESS
} from "../actions/actionTypes";

import { saveState, loadState } from "../localStorage";

const EMAIL_KEY = "email";
const TOKEN_KEY = "token";

const initialState = {
  email: loadState(EMAIL_KEY) || null,
  token: loadState(TOKEN_KEY) || null,
  organization: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { email, token, remember } = action.payload;
      if (remember) {
        saveState(EMAIL_KEY, email);
        saveState(TOKEN_KEY, token);
      }
      return { ...state, email, token };
    case FETCH_ORGANIZATION_SUCCESS:
      return { ...state, organization: action.payload };
    default:
      return state;
  }
};

export default userReducer;
