import { combineReducers } from "redux";

import categoriesReducer from "./categories/categories.reducer";
import drinksReducer from "./drinks/drinks.reducer";
import drinkDetailsReducer from "./drink-details/drink-details.reducer";
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  drinks: drinksReducer,
  drinkDetails: drinkDetailsReducer,
  user: registerReducer,
  loginUser: loginReducer,
});

export default rootReducer;
