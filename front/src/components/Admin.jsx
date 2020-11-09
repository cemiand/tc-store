import React from "react"
import {Form, Row, Col, Button, Jumbotron} from "react-bootstrap"

export default () => {
    return(
    <Jumbotron fluid > 
        <Form>
            <h1>Niveles de acceso</h1>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>Admin</option>
      <option>User</option>
    </Form.Control>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group></Form>
</Jumbotron>
    )
}