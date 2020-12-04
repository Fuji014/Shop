import initialAxios from "../helpers/axios";
import { orderConstants } from "./constants";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.ORDER_CREATE_REQUEST,
    });

    const res = await initialAxios.post("/orders", order);

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
