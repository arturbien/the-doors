import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from "./actionTypes";

import API from "../../API";

export function login({ email, password, remember }) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      // TODO catch errors
      await API.login({ email, password });
      return dispatch({ type: LOGIN_SUCCESS, payload: { email, remember } });
    } catch (err) {
      dispatch({ type: LOGIN_ERROR });
    }
  };
}

export function logout() {
  return async dispatch => {
    dispatch({ typeL: LOGOUT_REQUEST });
    try {
      await API.logout();
    } catch (err) {
      console.log("logout error in middleware 🤖");
    }
    return dispatch({ type: LOGOUT_SUCCESS });
  };
}
