import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  Nav,
  Navbar,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import LoginContainer from "../containers/LoginContainer";

export default ({ userlog, logout, handleChange, filterValue }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="brand">
        <img style={{width:"40%"}} src="/logoTC2.png" alt="TC-Store"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="searcher">
          <FormControl
            onChange={handleChange}
            value={filterValue}
            name="search"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Link to={`/${filterValue}`}>
            {" "}
            <Button type="button" variant="outline-success">
              <img src="lupita2.png" className="lupitapng" />
            </Button>
          </Link>
        </Form>
        {userlog && userlog.name ? (
          <>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <Link
                  to=""
                  variant="outline"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    margin: " 0 5px",
                  }}
                >
                  {" "}
                  {userlog.name} <img src="usericon.png" className="navicon" />{" "}
                </Link>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: "#343a40" }}>
                <Link to="/" className="dropdownbutton">
                  <Dropdown.Item>
                    <b> Favoritos</b>
                  </Dropdown.Item>
                </Link>
                <Link to="" onClick={logout} className="dropdownbutton">
                  {" "}
                  <Dropdown.Item>Log Out</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
            <>
              <Button variant="outline-success" onClick={handleShow}>
                Sign In
            </Button>
              <Modal show={show} onHide={handleClose}>
                {<LoginContainer />}
              </Modal>


            </>
          )}
        <Nav.Link href="#link">
          <img src="cart2.png" className="cart" />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
