import { registerTypes } from "./register.types";
import axios from "axios";

export const registerRequest = () => ({
  type: registerTypes.REGISTER_REQUEST,
});

export const registerSuccess = (json) => ({
  type: registerTypes.REGISTER_SUCCESS,
  payload: json,
});

export const registerFailure = (error) => ({
  type: registerTypes.REGISTER_FAILURE,
  payload: error,
});

export const registerUser = (user) => {
  return async (dispatch) => {
    console.log("in register user");
    console.log(user);
    dispatch(registerRequest);
    try {
      const data = JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await axios.post(
        "https://malden-groceries.herokuapp.com/api/users",
        data,
        config
      );
      let json = await response.data;
      console.log("error:" + json.errors);
      dispatch(registerSuccess(json));
    } catch (error) {
      console.log("In error");
      dispatch(registerFailure(error.response.data.errors));
    }
  };
};
