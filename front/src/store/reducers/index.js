import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  productsReducer,
  usersReducer,
  cartReducer,
});
