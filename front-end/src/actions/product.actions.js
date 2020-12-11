import initialAxios from "./../helpers/axios";
import { productConstants, productDetailsConstants } from "./constants";

export const getAllProducts = (keyword = "", pageNumber = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });

    const res = await initialAxios.get(
      `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
    );

    dispatch({
      type: productConstants.GET_ALL_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.GET_ALL_PRODUCT_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: productDetailsConstants.GET_SINGLE_PRODUCT_REQUEST,
    });

    const res = await initialAxios.get(`/api/products/${id}`);

    dispatch({
      type: productDetailsConstants.GET_SINGLE_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: productDetailsConstants.GET_SINGLE_PRODUCT_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

// get top rated products
export const getTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productConstants.PRODUCT_TOP_RATED_REQUEST });

    const res = await initialAxios.get("/api/products/top");

    dispatch({
      type: productConstants.PRODUCT_TOP_RATED_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.PRODUCT_TOP_RATED_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

// Private/Admin

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: productConstants.REMOVE_PRODUCT_REQUEST,
    });

    const res = await initialAxios.delete(`/api/products/${productId}`);
    dispatch({
      type: productConstants.REMOVE_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.REMOVE_PRODUCT_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const createProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: productDetailsConstants.CREATE_PRODUCT_REQUEST,
    });

    const res = await initialAxios.post("/api/products", {});

    dispatch({
      type: productDetailsConstants.CREATE_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: productDetailsConstants.CREATE_PRODUCT_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const updateProduct = (data) => async (dispatch) => {
  try {
    dispatch({
      type: productConstants.UPDATE_PRODUCT_REQUEST,
    });

    const res = await initialAxios.put(`/api/products/${data._id}`, data);
    dispatch({
      type: productConstants.UPDATE_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.UPDATE_PRODUCT_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const createProductReview = (productId, data) => async (dispatch) => {
  try {
    dispatch({
      type: productDetailsConstants.PRODUCT_CREATE_REVIEW_REQUEST,
    });

    const res = await initialAxios.post(
      `/api/products/${productId}/reviews`,
      data
    );
    dispatch({
      type: productDetailsConstants.PRODUCT_CREATE_REVIEW_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: productDetailsConstants.PRODUCT_CREATE_REVIEW_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
