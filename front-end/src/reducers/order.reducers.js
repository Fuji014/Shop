import { orderConstants } from "../actions/constants";

const initialState = {
  orderDetails: {},
  loading: false,
  success: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    // order create
    case orderConstants.ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderConstants.ORDER_CREATE_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload,
        loading: false,
        success: true,
      };

    case orderConstants.ORDER_CREATE_FAILURE:
      return {
        ...initialState,
        loading: false,
        success: false,
        error: action.payload.error,
      };

    // order details
    case orderConstants.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderConstants.ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload,
        loading: false,
      };

    case orderConstants.ORDER_DETAILS_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default orderReducer;
