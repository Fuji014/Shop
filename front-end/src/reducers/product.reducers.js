import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        products: [],
      };
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case productConstants.GET_ALL_PRODUCT_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    // delete product
    case productConstants.REMOVE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
        loading: false,
      };
    case productConstants.REMOVE_PRODUCT_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productReducer;
