import axios from "axios";
import { SET_ORDER, SET_ORDERS } from "../constants";

const setOrder = (data) => ({ type: SET_ORDER, payload: data });

const setOrders = (data) => ({ type: SET_ORDERS, payload: data });

export const newOrder = (cart) => (dispatch) =>
  axios.post("/api/orders", cart).then(({ data }) => dispatch(setOrders(data)));

export const fetchOrders = () => (dispatch) =>
  axios.get("/api/orders").then(({ data }) => dispatch(setOrders(data)));

export const fetchSingleOrder = (id) => (dispatch) =>
  axios.get(`/api/orders/${id}`).then(({ data }) => dispatch(setOrder(data)));

export const updateOrder = (order) => {
  axios.put(`/api/orders/${order._id}`, order).then((res) => res.data);
};

export const deleteOrder = (order) => {
  axios.delete(`/api/orders/${order._id}`);
};

export const fetchUserOrders = () => (dispatch) =>
  axios.get(`/api/orders/user`).then(({ data }) => {
    console.log(data);
    dispatch(setOrders(data));
  });
