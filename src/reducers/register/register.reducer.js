import { registerTypes } from "./register.types";

const INITIAL_STATE = {
  isLoading: false,
  user: [],
  errors: [],
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case registerTypes.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case registerTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case registerTypes.REGISTER_FAILURE:
      return {
        ...state,
        errors: action.payload,
        user: [],
      };
    default:
      return state;
  }
};

export default registerReducer;
