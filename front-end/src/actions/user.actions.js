import initialAxios from "../helpers/axios";
import { userConstants } from "./constants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_LOGIN_REQUEST,
    });

    const res = await initialAxios.post("/users/login", {
      email,
      password,
    });

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: res.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(res.data));
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
  dispatch({
    type: userConstants.USER_LOGOUT_SUCCESS,
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

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_DETAILS_REQUEST,
    });

    const res = await initialAxios.get(`/users/profile`);

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
