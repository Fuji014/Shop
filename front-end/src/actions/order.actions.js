import initialAxios from "../helpers/axios";
import { orderConstants } from "./constants";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.ORDER_CREATE_REQUEST,
    });

    const res = await initialAxios.post("/orders", order);

    console.log("GET ORDER >>>>", res.data);

    dispatch({
      type: orderConstants.ORDER_CREATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.ORDER_CREATE_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.ORDER_DETAILS_REQUEST,
    });

    const res = await initialAxios.get(`/orders/${id}`);

    console.log("GET ORDER DETAILS >>>>", res.data);

    dispatch({
      type: orderConstants.ORDER_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.ORDER_DETAILS_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const payOrder = (orderId, paymentResult) => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.ORDER_PAY_REQUEST,
    });

    const res = await initialAxios.put(`/orders/${orderId}/pay`, paymentResult);

    dispatch({
      type: orderConstants.ORDER_PAY_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.ORDER_PAY_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const listOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.ORDER_LIST_REQUEST,
    });

    const res = await initialAxios.get("/orders/myorders");

    dispatch({
      type: orderConstants.ORDER_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.ORDER_LIST_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
