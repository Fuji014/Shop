import { productDetailsConstants } from "../actions/constants.js";

const initialState = {
  product: [],
  loading: false,
  error: null,
  success: false,
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case productDetailsConstants.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productDetailsConstants.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case productDetailsConstants.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default productDetailReducer;
