import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST
  // LOGOUT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  login: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return { ...state, login: true };
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return { ...state, login: false };
    default:
      return state;
  }
};

export default loadingReducer;
