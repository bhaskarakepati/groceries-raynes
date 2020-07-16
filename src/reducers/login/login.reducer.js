import { loginTypes } from "./login.types";

const INITIAL_STATE = {
  isLoading: false,
  user: [],
  errors: [],
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errors: [],
      };
    case loginTypes.LOGIN_FAILURE:
      return {
        ...state,
        errors: action.payload,
        user: [],
      };
    default:
      return state;
  }
};

export default loginReducer;
