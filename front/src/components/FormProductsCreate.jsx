import React, { useState } from "react"
import { Form } from "react-bootstrap"



export default ({ filterValue, singleProduct, inputs }) => {
  const [options, setOptions] = useState("")
  const [optionDelete, setOptionDelete] = useState("")

  function setDelete(e) {
    e.preventDefault()
    deleteUser({ email: filterValue })
  }

  return (

    <>
      <Form.Group >
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control name="name" type="text" placeholder="Name" defaultValue={singleProduct && singleProduct.name} />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Brand</b></Form.Label>
        <Form.Control name="brand" type="text" placeholder="Brand" defaultValue={singleProduct && singleProduct.brand} />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Categories</b></Form.Label>
        <Form.Control name="categories" type="text" placeholder="Categories" defaultValue={singleProduct && singleProduct.categories} />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Price</b></Form.Label>
        <Form.Control name="price" type="text" placeholder="Price" defaultValue={singleProduct && singleProduct.price} />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Pictures</b></Form.Label>
        <Form.Control name="pictures" type="text" placeholder="Pictures" defaultValue={singleProduct && singleProduct.pictures} />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control name="description" type="text" placeholder="Description" defaultValue={singleProduct && singleProduct.description} />
      </Form.Group>

    </>

  )
}