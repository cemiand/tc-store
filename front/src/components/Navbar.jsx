import React, { useState } from "react";
import { Button, Modal, Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import LoginContainer from '../containers/LoginContainer'

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  
  <Navbar bg="dark" fixed="top" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cart">cart</Nav.Link>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        {<LoginContainer handleClose={handleClose} />}

      </Modal>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
   {/* <Nav>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        {<LoginContainer handleClose={handleClose} />}
      </Modal>
   </Nav>*/}
  </Navbar.Collapse>
</Navbar>

    
    
   
  );
}

