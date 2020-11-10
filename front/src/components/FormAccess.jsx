import React, {useState} from "react"
import {Form, Row, Col, Button, Jumbotron, Tabs, Tab, Card} from "react-bootstrap"
import {deleteUser, updateUser} from "../store/actions/usersAction"

export default ({users, handleChange, filterValue}) => {
    return(
        <Form>
            <h1>Niveles de acceso</h1>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange} value={filterValue} name="email" type="email" placeholder="name@example.com" />
    {(filterValue.length >= 3) && (
        users.filter(user => user.email.includes(filterValue)).map(user => {
        return (
            <Col xs={3} className="mb-4" key={user._id}>
              <Card.Body>
                  <Card.Text>Name: {user.name}</Card.Text>
                  <Card.Text>Email: {user.email}</Card.Text>
                  <Card.Text>Level: {user.accessLevel}</Card.Text>
              </Card.Body> 
            </Col>
            
          )
    })
    )}
    

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Levels of Access</Form.Label>
    <Form.Control name="select" as="select">
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </Form.Control>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button onClick={console.log(event)} type="submit" variant="info">Update</Button>
      <Button onClick={deleteUser({email: filterValue})} type="delete" variant="warning">Delete</Button>
    </Col>
  </Form.Group></Form>
    )
}