import { userConstants } from "../../actions/constants";

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case userConstants.USER_DETAILS_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
        loading: false,
      };
    case userConstants.USER_DETAILS_RESET:
      return {
        ...initialState,
      };

    // update user details
    case userConstants.USER_DETAILS_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_DETAILS_UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        success: true,
        loading: false,
      };
    case userConstants.USER_DETAILS_UPDATE_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
