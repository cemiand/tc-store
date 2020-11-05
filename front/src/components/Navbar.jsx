import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Button, Modal, Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import LoginContainer from '../containers/LoginContainer'

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <Navbar bg="dark" variant="dark" expand="lg">

      <Navbar.Brand href="#home">Tc-Store</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>

        </Nav>
        <div className="divSearchlupita">
          <Form style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Link to=""><span className="lupita"><img src="lupita2.png" className="lupitaimg" alt=""></img></span></Link>
          </Form>
        </div>

        <Nav.Link href="#link" className="cart">
          <Button variant="success" onClick={handleShow}>
            Sign In
          </Button>
          <Modal show={show} onHide={handleClose}>
            {<LoginContainer handleClose={handleClose} />}

          </Modal>

        </Nav.Link>
        <Nav.Link href="#link" className="cart">Cart</Nav.Link>
      </Navbar.Collapse>


    </Navbar>


  );
}

/*   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar> */

/*
*/

