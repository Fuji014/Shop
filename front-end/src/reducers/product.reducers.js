import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
  success: false,
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
    // update product
    case productConstants.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
        success: true,
      };
    case productConstants.UPDATE_PRODUCT_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      };
    case productConstants.UPDATE_PRODUCT_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default productReducer;
