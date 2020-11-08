import React, { useEffect } from "react";
import Cart from '../components/Cart'
import { showCartProducts }  from '../store/actions/cartAction'
import { useDispatch, useSelector } from "react-redux";

const CartContainer = () => {
    
    const dispatch = useDispatch();

    const { cartProducts } = useSelector((state) => state.cartReducer);
    
    useEffect(() => {
        dispatch(showCartProducts());
      }, []);
    
    return (
        <Cart cartProducts={cartProducts}/>
    )
}

export default CartContainer;