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
