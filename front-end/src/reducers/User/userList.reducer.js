import { userConstants } from "../../actions/constants.js";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    // USER LIST
    case userConstants.USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case userConstants.USER_LIST_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    case userConstants.USER_LIST_RESET:
      return {
        ...state,
        users: [],
        loading: false,
        error: null,
      };
    // delete user
    case userConstants.USER_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_DELETE_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id),
        loading: false,
      };
    case userConstants.USER_DELETE_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    case userConstants.USER_DELETE_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userListReducer;
