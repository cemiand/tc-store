import axios from "axios";
import { setUser } from "./usersAction";

export const addProductToCart = (product) =>
  axios.post("/api/cart/add", product).then(({ data }) => console.log(data));

export const deleteProductFromCart = (id) =>
  axios.delete(`/api/cart/delete/${id}`).then(({ data }) => console.log(data));
