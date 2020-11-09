import React from "react";
import Cart from '../components/Cart'
import { useSelector } from "react-redux";

const CartContainer = () => {
    
    // const dispatch = useDispatch();

    const { singleUser } = useSelector((state) => state.usersReducer);
    console.log("CARRITO DEL USER", singleUser)

    // useEffect(() => {
    //     singleUser.cart;
    //   }, []);
    
    return (
        <Cart singleUser={singleUser}/>
    )
}

export default CartContainer;