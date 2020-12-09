import { orderConstants } from "../../actions/constants";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    // order list
    case orderConstants.ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderConstants.ORDER_LIST_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case orderConstants.ORDER_LIST_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    case orderConstants.ORDER_LIST_RESET:
      return {
        ...state,
        orders: [],
        loading: false,
        error: null,
      };
    // Private/Admin
    // get all orders
    case orderConstants.ORDER_GET_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderConstants.ORDER_GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case orderConstants.ORDER_GET_ALL_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default orderListReducer;
