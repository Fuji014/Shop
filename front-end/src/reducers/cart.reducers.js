import { cartConstants } from "../actions/constants";

const initialState = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod: null,
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

    // SHIPPING ADDRESS ADD
    case cartConstants.CART_SAVE_SHIPPING_ADDRESS_SUCCESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    // PAYMENT METHOD
    case cartConstants.CART_SAVE_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    // CART RESET
    case cartConstants.CART_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default cartReducer;
