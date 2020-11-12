import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import {createProduct} from "../store/actions/productAction"



export default ({handleSubmitCreate}) => {

  
  return (

    <Form onSubmit={handleSubmitCreate}>
      <Form.Group >
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control name="name" type="text" placeholder="Name"  />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Brand</b></Form.Label>
        <Form.Control name="brand" type="text" placeholder="Brand"  />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Categories</b></Form.Label>
        <Form.Control name="categories" type="text" placeholder="Categories"  />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Price</b></Form.Label>
        <Form.Control name="price" type="text" placeholder="Price"  />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Pictures</b></Form.Label>
        <Form.Control name="pictures" type="text" placeholder="Pictures" />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control name="description" type="text" placeholder="Description" />
      </Form.Group>

     <Button variant="success" type="submit">Submit</Button> 

    </Form>

  )
}