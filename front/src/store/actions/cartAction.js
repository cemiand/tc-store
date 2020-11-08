import axios from "axios";
import { SHOW_CART } from "../constants";

const showCart = (data) => ({
    type: SHOW_CART,
    payload: data,
  });
  
export const addProductToCart = (producto) => axios.post("/api/cart/add", producto)
  .then(()=>console.log("PRODUCTO",producto))

export const deleteProductFromCart = (id) => axios.delete(`/api/cart/delete/${id}`) // CHEQUEAR RUTA DE BACK !!!

export const showCartProducts = (userId) => dispatch => axios.get(`/api/users/${userId}`) // CHEQUEAR RUTA DE BACK !!!
.then((res) => res.data)
.then((cart) => dispatch(showCart(cart))) 
