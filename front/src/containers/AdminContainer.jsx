import React, { useEffect, useState } from "react"
import Admin from "../components/Admin"
import { fetchUsers } from "../store/actions/usersAction";
import { fetchProducts, updateProduct } from "../store/actions/productAction"
import { submitCat, fetchCategories, deleteCategory } from "../store/actions/categoriesAction"
import useInput from "../hooks/useInput"
import { useDispatch, useSelector } from "react-redux"


export default () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.usersReducer);
  const { products, singleProduct, deleteProduct } = useSelector((state) => state.productsReducer);
  const { categories } = useSelector((state) => state.categoriesReducer)
  const { handleChange, inputs, setInputs } = useInput();

  const [options, setOptions] = useState("")
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
    dispatch(fetchCategories())
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
  const handleOptions = (e) => {
    setOptions(e.target.value)
  }

  const handleSubmitCat = (e) => {
    e.preventDefault();
    const category = {
      name: inputs.name,
      image: inputs.image
    }
    dispatch(submitCat(category))
    setInputs({ ...inputs, name: "", image: "" })
  }
  const handleDeleteCat = (e) => {
    e.preventDefault();
    console.log("options de handleDeleteCat", options)
    dispatch(deleteCategory(options))
  }

  return (
    <Admin users={users} handleOptions={handleOptions} categories={categories} handleDeleteCat={handleDeleteCat} handleChange={handleChange} handleSubmitCat={handleSubmitCat} filterValue={inputs} products={products} setProduct={setProduct} singleProduct={singleProduct} deleteProduct={setDelete} />
  )

}