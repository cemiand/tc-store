import { SHOW_CART } from '../constants'

const inicialState = {
    cartProducts: [],
};

export default (state = inicialState, action) => {
    switch (action.type) {
      case SHOW_CART:
        return { ...state, cartProducts: action.payload };
      default:
        return state;
    }
  };
  