import { loginTypes } from "./login.types";
import axios from "axios";

export const loginRequest = () => ({
  type: loginTypes.LOGIN_REQUEST,
});

export const loginSuccess = (json) => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload: json,
});

export const loginFailure = (error) => ({
  type: loginTypes.LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch(loginRequest);
    try {
      const data = JSON.stringify({
        email: user.email,
        password: user.password,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await axios.post(
        "https://malden-groceries.herokuapp.com/api/auth",
        data,
        config
      );
      let json = await response.data;
      dispatch(loginSuccess(json));
    } catch (error) {
      dispatch(loginFailure(error.response.data.errors));
    }
  };
};
