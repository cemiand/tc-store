import axios from "axios";
import { SET_PRODUCT, SET_PRODUCTS } from "../constants";

const products = (data) => ({
  type: SET_PRODUCTS,
  payload: data,
});

const singleProduct = (data) => ({
  type: SET_PRODUCT,
  payload: data,
});

export const fetchProducts = () => (dispatch) =>
  axios.get("/api/products").then(({ data }) => dispatch(products(data)));

export const fetchSingleProduct = (id) => (dispatch) =>
  axios
    .get(`/api/products/${id}`)
    .then(({ data }) => dispatch(singleProduct(data)));
