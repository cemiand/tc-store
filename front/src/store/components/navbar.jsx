import React from "react"

import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/action-creators/user";

/*
const dispatch = useDispatch(state) => {
  
  }*/

  return (

    <Navbar id="headmenu" fixed="top"  expand="lg">
      <Nav className="mr-auto nav">
        <Navbar.Brand href="/">
          <img src="" alt="logo" id="logo" /></Navbar.Brand>
      </Nav>
    <Nav>
        <Form>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Búsqueda" />
            </Form.Group>
        </Form>
    
    </Nav>

      <Nav className="nav">
        {(
          <>
          <Button href="/">
              
            </Button>
            <a><img src="https://www.flaticon.com/svg/static/icons/svg/34/34627.svg" alt="cart"/></a>
            <Button href="/login" >
              Log In
            </Button>
            <Button href="/register" >
              Sign In
            </Button>
            {user.id && (
              <div>
        <Button  onClick={} className="sb" variant="dark">
          Log Out
        </Button>
        <Button  href="#" className="sb" variant="dark">
        Mis Compras
      </Button>
      </div>
      )}
          </>
        )}
      </Nav>
    </Navbar>
  )
;
