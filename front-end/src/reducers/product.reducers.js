import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  console.log("Product Reducer >>>", action);

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
    default:
      return state;
  }
};

export default productReducer;
