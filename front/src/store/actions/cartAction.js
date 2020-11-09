import axios from "axios";

export const addProductToCart = (producto) =>
  axios
    .post("/api/cart/add", producto)
    .then(({ data }) => console.log("POST_ADD_PRODUCT", data));

export const deleteProductFromCart = (id) =>
  axios.delete(`/api/cart/delete/${id}`); // CHEQUEAR RUTA DE BACK !!!
