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

    default:
      return state;
  }
};

export default orderListReducer;
