import { userConstants } from "../actions/constants";
const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN REDUCER
    case userConstants.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    case userConstants.USER_LOGIN_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    // LOGOUT REDUCER
    case userConstants.USER_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        userInfo: null,
        loading: false,
        error: null,
      };
    case userConstants.USER_LOGOUT_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    // REGISTER REDUCER
    case userConstants.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    case userConstants.USER_REGISTER_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
