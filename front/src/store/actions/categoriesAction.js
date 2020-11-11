import axios from "axios";
import { SET_CATEGORIES,SET_CATEGORY } from "../constants";

const categories = (data) => ({
    type: SET_CATEGORIES,
    payload: data,
});

//objeto que me va a traer la categoria individual
const category = (data) => ({
type: SET_CATEGORY,
payload: data,
});


export const fetchCategories = () => (dispatch) =>
axios
.get("/api/categories")
.then(({ data }) => dispatch(categories(data)));



export const fetchCategory = (id) => (dispatch) =>
axios
.get(`/api/categories/${id}`)
.then(({ data }) => dispatch(category(data)));



