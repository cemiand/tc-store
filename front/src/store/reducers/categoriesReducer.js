import { SET_CATEGORIES } from "../constants";

const inicialState = {
    categories: [],
    singleCategory:{}
};

export default (state = inicialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_CATEGORy:
            return { ...state, singleCategory: action.payload };
        default:
            return state;
    }
};