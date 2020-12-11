import initialAxios from "../helpers/axios";
import { userConstants, orderConstants, cartConstants } from "./constants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_LOGIN_REQUEST,
    });

    const res = await initialAxios.post("/users/login", {
      email,
      password,
    });

    const { token } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(res.data));

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_LOGIN_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
  localStorage.removeItem("cartItems");
  dispatch({
    type: userConstants.USER_LOGOUT_SUCCESS,
  });
  dispatch({
    type: userConstants.USER_PROFILE_RESET,
  });
  dispatch({
    type: orderConstants.ORDER_LIST_RESET,
  });
  dispatch({
    type: userConstants.USER_LIST_RESET,
  });
  dispatch({
    type: cartConstants.CART_RESET,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_REGISTER_REQUEST,
    });

    const res = await initialAxios.post("/users", {
      name,
      email,
      password,
    });

    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: res.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: userConstants.USER_REGISTER_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_PROFILE_REQUEST,
    });

    const res = await initialAxios.get(`/users/profile`);

    dispatch({
      type: userConstants.USER_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_PROFILE_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const updateUserProfile = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_UPDATE_REQUEST,
    });

    const res = await initialAxios.put("/users/profile", user);

    dispatch({
      type: userConstants.USER_UPDATE_SUCCESS,
      payload: res.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: userConstants.USER_UPDATE_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const listUser = () => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_LIST_REQUEST,
    });

    const res = await initialAxios.get("/users");

    dispatch({
      type: userConstants.USER_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_LIST_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_DELETE_REQUEST,
    });

    const res = await initialAxios.delete(`/users/${userId}`);
    dispatch({
      type: userConstants.USER_DELETE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_DELETE_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const getUserDetails = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_DETAILS_REQUEST,
    });

    const res = await initialAxios.get(`/users/${userId}`);

    dispatch({
      type: userConstants.USER_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_DETAILS_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const updateUserDetails = (userId, data) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_DETAILS_UPDATE_REQUEST,
    });

    const res = await initialAxios.put(`/users/${userId}`, data);

    dispatch({
      type: userConstants.USER_DETAILS_UPDATE_SUCCESS,
      payload: res.data,
    });

    dispatch({
      type: userConstants.USER_DETAILS_UPDATE_RESET,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_DETAILS_UPDATE_FAILURE,
    });
  }
};
