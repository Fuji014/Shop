import { userConstants } from "../../actions/constants";

const initialState = {
  message: null,
  loading: false,
  sucess: false,
  error: null,
};

const userDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_DELETE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
        success: true,
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

export default userDeleteReducer;
