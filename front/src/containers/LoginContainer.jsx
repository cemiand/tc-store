import React from "react";
import Login from "../components/Login";


export default ({ handleClose }) => {

  const handleSign = () => {
    document.querySelector(".cont").classList.toggle("s-signup");
  };
  return <Login handleSign={handleSign} handleCloe={handleClose} />;
};
