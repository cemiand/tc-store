import React, { useState } from "react"
import { Form, Row, Col, Button, Jumbotron, Tabs, Tab, Card } from "react-bootstrap"
import { deleteUser, updateUser } from "../store/actions/usersAction"


export default ({ users, setProduct, filterValue, singleProduct }) => {
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
        <Form.Control type="text" placeholder="Name" defaultValue={singleProduct && singleProduct.name} />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Brand</b></Form.Label>
        <Form.Control type="text" placeholder="Brand" defaultValue={singleProduct && singleProduct.brand} />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Categories</b></Form.Label>
        <Form.Control type="text" placeholder="Categories" defaultValue={singleProduct && singleProduct.categories} />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Price</b></Form.Label>
        <Form.Control type="text" placeholder="Price" defaultValue={singleProduct && singleProduct.price} />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Pictures</b></Form.Label>
        <Form.Control type="text" placeholder="Pictures" defaultValue={singleProduct && singleProduct.pictures} />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control type="text" placeholder="Description" defaultValue={singleProduct && singleProduct.description} />
      </Form.Group>

    </>

  )
}