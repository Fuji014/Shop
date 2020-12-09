import initialAxios from "./../helpers/axios";
import { productConstants, productDetailsConstants } from "./constants";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });

    const res = await initialAxios.get("products");

    dispatch({
      type: productConstants.GET_ALL_PRODUCT_SUCCESS,
      payload: { products: res.data },
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

    const res = await initialAxios.get(`products/${id}`);

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

// Private/Admin

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: productConstants.REMOVE_PRODUCT_REQUEST,
    });

    const res = await initialAxios.delete(`/products/${productId}`);
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

    const res = await initialAxios.post("/products", {});

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

    const res = await initialAxios.put(`/products/${data._id}`, data);
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
