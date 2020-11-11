import React, {useEffect} from "react"
import Admin from "../components/Admin"
import { fetchUsers } from "../store/actions/usersAction";
import {fetchProducts, fetchSingleProduct} from "../store/actions/productAction"
import useInput from "../hooks/useInput"
import {useDispatch, useSelector} from "react-redux"



export default () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.usersReducer);
    const { products, singleProduct } = useSelector((state) => state.productsReducer);

    const { handleChange, inputs } = useInput();
  
    useEffect(() => {
      dispatch(fetchUsers());
      dispatch(fetchProducts());
      }, []);
  
    return (
        <Admin users={users} handleChange={handleChange} filterValue={inputs} products={products} singleProduct={singleProduct}/>
    )

}