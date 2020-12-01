import { userConstants } from "../actions/constants";
const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
      };
    case userConstants.USER_LOGIN_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };

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
      };
    case userConstants.USER_LOGOUT_FAILURE:
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
