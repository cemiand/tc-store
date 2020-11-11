import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import usersReducer from "./usersReducer";
import cartReducer from './cartReducer';
import categoriesReducer from "./categoriesReducer"

export default combineReducers({
  productsReducer,
  usersReducer,
  cartReducer,
  categoriesReducer,
});
