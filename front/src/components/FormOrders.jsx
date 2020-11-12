import React, { useState } from "react"
import { Form, Row, Col, Button, Card } from "react-bootstrap"
import { fetchSingleOrder } from "../store/actions/ordersAction"
import { useDispatch } from "react-redux"


export default ({ orders, singleOrder, handleSubmitOrder }) => {
  const dispatch = useDispatch()
  const [options, setOptions] = useState("")
  const [newOptions, setNewOptions] = useState("")
  //const [id, setId] = useState("")

  function setOrder(e, id) {
    e.preventDefault()
    console.log("OPTIONSSSSSS", id)
    dispatch(fetchSingleOrder(id))
    console.log("SINGLE ORDER", newOptions)
  }

  function setOrder(e, id) {
    e.preventDefault()
    dispatch(fetchSingleOrder(id))
  }

  return (

    <Form >
      <Form className="adminUserForm">
        <h1>Find and modify orders</h1>
        <Form.Group>
          <Form.Label>Orders by state:</Form.Label>
          <Form.Control onClick={(e) => { setOptions(e.target.value) }} as="select" >
            <option value="">Select order status</option>
            <option value="Confirmado">Confirmed</option>
            <option value="En Camino">On Delivery</option>
            <option value="Entregado">Delivered</option>
            <option value="Devuelto">Rejected</option>

          </Form.Control>
          {orders && (
            orders.filter(order => order.state.includes(options)).map(order => {
              return (
                <Col xs={3} className="paraCols" key={order._id}>
                  <Card.Body>
                    <Card.Text>Purchase Date: {order.date}</Card.Text>
                    <Card.Text>Order Id: {order._id}</Card.Text>
                    <Card.Text>Products: {(order.products.map(product => product.name))}</Card.Text>
                    <Button className="buttonsDiv" onClick={(e) => { setOrder(e, order._id) }}>Choose</Button>
                  </Card.Body>
                </Col>

              )
            })
          )}

        </Form.Group>
        <Form.Group>
          <Form.Label>Select new status</Form.Label>
          <Form.Control as="select" onClick={(e) => { setNewOptions(e.target.value) }}>
            <option value="Confirmado">Confirmed</option>
            <option value="En Camino">On Delivery</option>
            <option value="Entregado">Delivered</option>
            <option value="Devuelto">Rejected</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }} >
            <div className="buttonsDivUser">
              <Button onClick={(e) => handleSubmitOrder(e, newOptions)} className="buttonformAdmin" type="submit" variant="info">Update</Button>
            </div>

          </Col>
        </Form.Group></Form>

    </Form>

  )
}