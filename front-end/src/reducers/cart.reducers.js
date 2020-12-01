import { cartConstants } from "../actions/constants";

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cartConstants.ADD_CART_ITEM_SUCCESS:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case cartConstants.ADD_CART_ITEM_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };

    case cartConstants.REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cartConstants.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case cartConstants.REMOVE_CART_ITEM_FAILURE:
      return {
        ...initialState,
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
