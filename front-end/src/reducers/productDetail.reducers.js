import { productDetailsConstants } from "../actions/constants.js";

const initialState = {
  product: [],
  loading: false,
  error: null,
  success: false,
  createReview: {
    loadingCreateReview: false,
    successCreateReview: false,
    errorCreactReview: null,
  },
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
    // create product
    case productDetailsConstants.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case productDetailsConstants.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: true,
        success: true,
      };
    case productDetailsConstants.CREATE_PRODUCT_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
    case productDetailsConstants.CREATE_PRODUCT_RESET:
      return {
        ...initialState,
      };
    // create product review
    case productDetailsConstants.PRODUCT_CREATE_REVIEW_REQUEST:
      return {
        ...state,
        createReview: {
          loadingCreateReview: true,
        },
      };
    case productDetailsConstants.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        createReview: {
          loadingCreateReview: false,
          successCreateReview: true,
        },
      };
    case productDetailsConstants.PRODUCT_CREATE_REVIEW_FAILURE:
      return {
        ...state,
        createReview: {
          loadingCreateReview: false,
          errorCreactReview: action.payload.error,
        },
      };
    case productDetailsConstants.PRODUCT_CREATE_REVIEW_RESET:
      return {
        ...state,
        createReview: {
          loadingCreateReview: false,
          successCreateReview: false,
          errorCreactReview: null,
        },
      };
    default:
      return state;
  }
};

export default productDetailReducer;
