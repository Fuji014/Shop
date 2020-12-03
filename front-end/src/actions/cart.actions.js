import initialAxios from "../helpers/axios";
import { cartConstants } from "./constants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const res = await initialAxios.get(`products/${id}`);

  dispatch({
    type: cartConstants.ADD_CART_ITEM_SUCCESS,
    payload: {
      product: res.data._id,
      name: res.data.name,
      image: res.data.image,
      price: res.data.price,
      countInStock: res.data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: cartConstants.REMOVE_CART_ITEM_SUCCESS,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShipppingAddress = (data) => async (dispatch) => {
  dispatch({
    type: cartConstants.CART_SAVE_SHIPPING_ADDRESS_SUCCESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
