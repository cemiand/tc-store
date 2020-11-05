import React, { useState } from "react";
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
        <div>
          <Form inline style={{ width: "100%", }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        {userlog ? <>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <Link to="#" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}> {userlog}  <i className="fas fa-user-circle"> </i></Link>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "#343a40" }}>
              <Dropdown.Item ><Link to="#" style={{ textDecoration: "none", color: "white", backgroundColor: "#343a40" }}><b> Favoritos</b></Link></Dropdown.Item>
              <Dropdown.Item ><Link to="#" onClick={logout} style={{ textDecoration: "none", color: "white", backgroundColor: "#343a40" }}>Log Out</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
          :
          <>
            <Button variant="success" onClick={handleShow}>
              Sign In
          </Button>
            <Modal show={show} onHide={handleClose}>
              {<LoginContainer handleClose={handleClose} />}

            </Modal>
          </>
        }
        <Nav.Link href="#link" className="cart">Cart</Nav.Link>
      </Navbar.Collapse>


    </Navbar>


  );
}


/* {userlog ? <>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <Link to="/movies" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}> {userlog}  <i className="fas fa-user-circle"> </i></Link>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: "#343a40" }}>
                <Dropdown.Item ><Link to="/movies/favorites" style={{ textDecoration: "none", color: "white", backgroundColor: "#343a40" }}><b> Favoritos</b></Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/login" onClick={logout} style={{ textDecoration: "none", color: "white", backgroundColor: "#343a40" }}>Log Out</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
            :
            <>
              <Link to="/movies/login" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}>Log In <i className="fas fa-user-circle"></i></Link>
              <Link to="/movies/register" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}>Sign In</Link>
            </>
          } */



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

