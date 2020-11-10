import React, {useState} from "react"
import {Form, Button} from "react-bootstrap"
import {fetchSingleProduct} from "../store/actions/productAction"
import {useDispatch} from "react-redux"

export default ({handleChange, products, filterValue}) => {
  const dispatch = useDispatch()
  const [options, setOptions] = useState("")
  function setProduct (e){
    e.preventDefault()
    dispatch(fetchSingleProduct(options))
  } 

    return(
        <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Search by name</Form.Label>
      <Form.Control onChange={handleChange} value={filterValue && filterValue.search} name="search" type="text" placeholder="name@example.com" />
      <Form.Control as="select" onClick={(e) => {setOptions(e.target.value)}}>
      {products &&
          products.filter(product => product.name.includes(filterValue && filterValue.search)).map(product => {
          return (
          <option value={product._id}>{product.name}{product.brand}</option>
          )
      })
    }
  
    
    </Form.Control>
    <Button onClick={setProduct}>Search</Button>
           
      
      </Form.Group>
    )
}