import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/usersAction";
import useInput from "../hooks/useInput";

const NavbarContainer = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    dispatch(logoutUser());
  };

  const { singleUser } = useSelector((state) => state.usersReducer);

  const { handleChange, inputs } = useInput();

  return (
    <Navbar
      userlog={singleUser}
      logout={logout}
      handleChange={handleChange}
      filterValue={inputs.search}
      handleShow={handleShow}
      handleClose={handleClose}
      show={show}
    />
  );
};

export default NavbarContainer;
