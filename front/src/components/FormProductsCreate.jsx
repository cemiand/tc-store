import React, { useState } from "react"
<<<<<<< HEAD
import { Form, Button } from "react-bootstrap"
import {createProduct} from "../store/actions/productAction"
=======
import { Form } from "react-bootstrap"

>>>>>>> 4fd7862ae1f5b79fa221ec19c60255f07263923f


export default () => {

  const handleSubmit = (e) => {
 
    e.preventDefault()
    createProduct({   
    name: e.target[0].value,
    brand: e.target[1].value,
    categories: e.target[2].value,
    price: e.target[3].value,
    pictures: e.target[4].value,
    description: e.target[5].value
    })
    }

  return (

    <Form onSubmit={handleSubmit}>
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