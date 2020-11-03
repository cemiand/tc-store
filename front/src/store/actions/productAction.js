import axios from "axios";
import { FETCH_PRODUCT, FETCH_PRODUCTS } from "../constants";

const products = (data) => ({
  type: FETCH_PRODUCTS,
  payload: data,
});

const singleProduct = (data) => ({
  type: FETCH_PRODUCT,
  payload: data,
});


export const fetchProducts = () => (dispatch) =>
  axios
    .get("") //ACA VA LA DIR DE LOS PRODUCTS
    .then(({ data }) => dispatch(products(data)));


export const fetchSingleProduct = (id) => (dispatch) =>
  axios
    .get(`${id}`) //ACA VA LA DIR DEL SINGLEPRODUCT
    .then(({ data }) => dispatch(singleProduct(data)));
