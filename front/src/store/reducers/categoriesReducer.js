import { SET_CATEGORIES,SET_CATEGORY } from "../constants";

const inicialState = {
    categories: [],
    singleCategory:{}
};

export default (state = inicialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_CATEGORY:
            return { ...state, singleCategory: action.payload };
        default:
            return state;
    }
};