import React, {useEffect} from "react"
import Admin from "../components/Admin"
import { fetchUsers } from "../store/actions/usersAction";
import {fetchProducts} from "../store/actions/productAction"
import {fetchOrders} from "../store/actions/ordersAction"
import useInput from "../hooks/useInput"
import {useDispatch, useSelector} from "react-redux"



export default () => {
    const dispatch = useDispatch();

    const { users, singleUser } = useSelector((state) => state.usersReducer);
    const { products, singleProduct } = useSelector((state) => state.productsReducer);
    const { orders, singleOrder } = useSelector((state) => state.ordersReducer);

    const { handleChange, inputs } = useInput();
  
    useEffect(() => {
      dispatch(fetchUsers());
      dispatch(fetchProducts());
      dispatch(fetchOrders());
      }, []);
  
    return (
        <Admin users={users} handleChange={handleChange} singleUser={singleUser} orders={orders} filterValue={inputs} products={products} singleProduct={singleProduct} singleOrder={singleOrder}/>
    )

}