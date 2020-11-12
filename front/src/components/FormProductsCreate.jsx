import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { createProduct } from "../store/actions/productAction"



export default ({ categories, handleOptions }) => {

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
        <Form.Control name="name" type="text" placeholder="Name" />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Brand</b></Form.Label>
        <Form.Control name="brand" type="text" placeholder="Brand" />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Category</b></Form.Label>
        {/*  <Form.Control name="categories" type="text" placeholder="Categories" /> */}
        <Form.Control as="select" onChange={handleOptions}>
          {categories &&
            categories.map(category => {
              return (
                <option key={category._id} value={category._id}>{category.name}</option>
              )
            })
          }
        </Form.Control>
      </Form.Group>




      <Form.Group >
        <Form.Label><b>Price</b></Form.Label>
        <Form.Control name="price" type="text" placeholder="Price" />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Pictures</b></Form.Label>
        <Form.Control name="pictures" type="text" placeholder="Pictures" />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control name="description" type="text" placeholder="Description" />
      </Form.Group>

      <Button variant="success" className="buttonsDiv" type="submit">Submit</Button>

    </Form>

  )
}