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

export const createProduct = (product) => (dispatch) => {
  axios.post("/api/products", product).then(({ data }) => dispatch(fetchProducts()))
}


export const fetchProducts = () => (dispatch) =>
  axios.get("/api/products").then(({ data }) => dispatch(products(data)));

export const fetchSingleProduct = (id) => (dispatch) =>
  axios
    .get(`/api/products/${id}`)
    .then(({ data }) => dispatch(singleProduct(data)))

export const updateProduct = (product) => (dispatch) => {
  axios.put(`/api/products/${product._id}`, product)
    .then(res => res.data)
    .then(data => { dispatch(fetchSingleProduct(data._id)) })
}

export const deleteProduct = (product) => (dispatch) => {
  axios.delete(`/api/products/${product._id}`)
    .then(() => { dispatch(fetchProducts()) })
}



