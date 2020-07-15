import { combineReducers } from "redux";

import categoriesReducer from "./categories/categories.reducer";
import drinksReducer from "./drinks/drinks.reducer";
import drinkDetailsReducer from "./drink-details/drink-details.reducer";
import registerReducer from "./register/register.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  drinks: drinksReducer,
  drinkDetails: drinkDetailsReducer,
  user: registerReducer,
});

export default rootReducer;
