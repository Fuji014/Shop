import { productConstants } from "../../actions/constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productTopRatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.PRODUCT_TOP_RATED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.PRODUCT_TOP_RATED_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case productConstants.PRODUCT_TOP_RATED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productTopRatedReducer;
