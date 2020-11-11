import React, { useState } from "react";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProductFromCart,
  resetCartUser,
  deleteProductStorage,
  resetCartStorage,
  setCart,
  cartStorage,
  fetchCartUser,
} from "../store/actions/cartAction";
import { useEffect } from "react";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { singleUser } = useSelector((state) => state.usersReducer);
  const { cart } = useSelector((state) => state.cartReducer);

  const deleteProduct = (product) => {
    singleUser.name
      ? dispatch(deleteProductFromCart(product))
      : dispatch(deleteProductStorage(product));
  };

  const resetCart = () => {
    singleUser.name ? dispatch(resetCartUser()) : dispatch(resetCartStorage());
  };

  useEffect(() => {
    singleUser.name
      ? dispatch(fetchCartUser())
      : dispatch(setCart(cartStorage));
  }, [singleUser]);

  return (
    <Cart cart={cart} deleteProduct={deleteProduct} resetCart={resetCart} />
  );
};

export default CartContainer;
