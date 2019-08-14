import {
  LOGIN_SUCCESS,
  FETCH_ORGANIZATION_SUCCESS,
  SET_LANGUAGE
  // FETCH_ORGANIZATION_REQUEST,
  // FETCH_ORGANIZATION_ERROR,
  // LOGOUT_SUCCESS
} from "../actions/actionTypes";

import { saveState, loadState } from "../localStorage";

import i18n from "../../shared/translations/i18n";

const EMAIL_KEY = "email";
const TOKEN_KEY = "token";
const LANGUAGE_KEY = "language";

const browserLanguage = (
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage
)
  .split("-")[0]
  .toLowerCase();
const savedLanguage = loadState(LANGUAGE_KEY) || "en";
const preferredLanguage = savedLanguage || browserLanguage || "en";
i18n.changeLanguage(preferredLanguage);

const initialState = {
  email: loadState(EMAIL_KEY) || null,
  token: loadState(TOKEN_KEY) || null,
  organization: null,
  language: preferredLanguage
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
    case SET_LANGUAGE:
      const newLanguage = action.payload;
      i18n.changeLanguage(newLanguage);
      saveState(LANGUAGE_KEY, newLanguage);

      return { ...state, language: newLanguage };
    default:
      return state;
  }
};

export default userReducer;
