import React, { useEffect,useState } from "react"
import Admin from "../components/Admin"
import { fetchUsers } from "../store/actions/usersAction";
import {fetchProducts} from "../store/actions/productAction"
import {fetchOrders} from "../store/actions/ordersAction"
import { submitCat,fetchCategories } from "../store/actions/categoriesAction"
import useInput from "../hooks/useInput"
import { useDispatch, useSelector } from "react-redux"
import { deletCategory } from "../store/actions/categoriesAction";
import { updateProduct } from "../store/actions/productAction";

export default () => {
    const dispatch = useDispatch();

    const { users, singleUser } = useSelector((state) => state.usersReducer);
    const { products, singleProduct, deleteProduct } = useSelector((state) => state.productsReducer);
    const { orders, singleOrder } = useSelector((state) => state.ordersReducer);
    const [options, setOptions] = useState("")
    const { handleChange, inputs, setInputs } = useInput();
    const {categories} = useSelector((state)=>state.categoriesReducer)
  
    useEffect(() => {
      dispatch(fetchUsers());
      dispatch(fetchProducts());
      dispatch(fetchOrders());
      dispatch(fetchCategories());
      }, []);
  
  

  //PRODUCTOS
  function setProduct(e) {
    e.preventDefault();
    updateProduct(singleProduct);
  }

  function setDelete(e) {
    e.preventDefault()
    deleteProduct()
  }

  //CATEGORIES
const handleOptions = (e)=>{
   setOptions(e.target.value)
}

  const handleSubmitCat = (e) => {
    e.preventDefault();
    const category = {
      name: inputs.name,
      image: inputs.image
    }
    dispatch(submitCat(category))
    setInputs({ ...inputs, name: "" ,image: "" })

  }
  
  const handleDeleteCat = (e) => {
    e.preventDefault();
    console.log("options",options)
    dispatch(deletCategory(options.toString()))
  }
  return (
    <Admin users={users} handleChange={handleChange} handleOptions={handleOptions} singleUser={singleUser} handleDeleteCat={handleDeleteCat} categories={categories} handleSubmitCat={handleSubmitCat} orders={orders} filterValue={inputs} products={products} setProduct={setProduct} deleteProduct={setDelete} singleProduct={singleProduct} singleOrder={singleOrder}/>
)
}