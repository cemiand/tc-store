import axios from "axios";
import { SET_ORDER, SET_ORDERS } from "../constants";

const setOrder = (data) => ({ type: SET_ORDER, payload: data });
 
const setOrders = (data) => ({ type: SET_ORDERS, payload: data });
/* 
const createOrder = (order) =>
  axios.post("/api/orders", Order).then(({ data }) => console.log(data));
 */
export const fetchOrders = () => (dispatch) =>
  axios.get("/api/orders").then(({ data }) => dispatch(setOrders(data)));

  export const fetchSingleOrder = (id) => (dispatch) =>
  axios
    .get(`/api/orders/${id}`)
    .then(({ data }) => dispatch(setOrder(data)))


export const updateOrder = (order) => {
  axios.put(`/api/orders/${order._id}`, order)
  .then(res => res.data)
  }

export const deleteOrder = (order) => {
   axios.delete(`/api/orders/${order._id}`)
  }


