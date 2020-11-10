import React, {useState, useRef} from "react"
import {Form, Row, Col, Button, Jumbotron, Tabs, Tab, Card} from "react-bootstrap"
import {deleteUser, updateUser} from "../store/actions/usersAction"

export default ({users, handleChange, filterValue}) => {
  const [options, setOptions] = useState("")
  function setUser (e){
    e.preventDefault()
    updateUser({email: filterValue, accessLevel: options})
  } 

  function setDelete(e){
    e.preventDefault()
    deleteUser({email: filterValue})
  }


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
    <Form.Control as="select" onClick={(e) => {setOptions(e.target.value)}}>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </Form.Control>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button onClick={setUser} type="submit" variant="info">Update</Button>
      <Button onClick={setDelete} type="submit" variant="warning">Delete</Button>
    </Col>
  </Form.Group></Form>
    )
}