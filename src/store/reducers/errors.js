import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_ERROR_DISMISS
} from "../actions/actionTypes";

const initialState = {
  login: false
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, login: true };
    case LOGIN_ERROR_DISMISS:
    case LOGIN_SUCCESS:
    case LOGIN_REQUEST:
      return { ...state, login: false };
    default:
      return state;
  }
};

export default errorsReducer;
