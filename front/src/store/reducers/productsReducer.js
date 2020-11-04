import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../constants";

const inicialState = {
  products: [],
  singleProduct: {},
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT:
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
};
