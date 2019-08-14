import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_LANGUAGE,
  FETCH_ORGANIZATION_REQUEST,
  FETCH_ORGANIZATION_SUCCESS,
  FETCH_ORGANIZATION_ERROR
} from "./actionTypes";

import API from "../../API";

export function login({ email, password, remember }) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      // TODO catch errors
      const response = await API.login({ email, password });
      const { token } = response.data;
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: { email, token, remember }
      });
    } catch (err) {
      console.log(
        "💖💖💖  yeah I know I should display different error message on 500",
        err
      );
      const statusCode = err.response.status;
      let message;
      switch (statusCode) {
        case 500:
          message = "Something went wrong with our server. 😥 Try again.";
          break;
        default:
          message = "Incorrect login or password.";
          break;
      }
      dispatch({ type: LOGIN_ERROR, payload: message });
    }
  };
}

export function fetchOrganization() {
  return async (dispatch, getState) => {
    // TODO
    const token = getState().user.token;

    dispatch({ type: FETCH_ORGANIZATION_REQUEST });
    try {
      // TODO catch errors
      const response = await API.fetchOrganization({ token });
      const data = response.data;
      return dispatch({
        type: FETCH_ORGANIZATION_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({ type: FETCH_ORGANIZATION_ERROR });
    }
  };
}

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    payload: language
  };
}
