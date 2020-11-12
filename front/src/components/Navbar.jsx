import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Navbar, Dropdown } from "react-bootstrap";
import LoginContainer from "../containers/LoginContainer";

export default ({
  userlog,
  logout,
  handleChange,
  filterValue,
  handleShow,
  handleClose,
  show,
}) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Link to="/" className="brand">
      <img style={{ width: "40%" }} src="/logoTC2.png" alt="TC-Store" />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <div className="search_wrap search_wrap_3">
        <div className="search_box">
          <input
            type="text"
            onChange={handleChange}
            value={filterValue}
            name="search"
            className="input"
            placeholder="Search..."
          />
          <Link to={`/${filterValue}`}>
            {" "}
            <div className="btn btn_common">
              <img src="lupita1.png" className="lupitapng" />
            </div>
          </Link>
        </div>
      </div>

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
            <Dropdown.Menu
              style={{
                backgroundColor: "#343a40",
                margin: "-8px 48px",
                padding: "0 4px",
              }}
            >
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
            {<LoginContainer handleClose={handleClose} />}
          </Modal>
        </>
      )}
      <Link to="/cart">
        <Button variant="outline-sucess" className="cartButton">
          <img src="cart2.png" className="cart" />
        </Button>
      </Link>
    </Navbar.Collapse>
  </Navbar>
);
