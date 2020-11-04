import React from "react";
import Login from "../components/Login";

const handleSign = () => {
  document.querySelector(".cont").classList.toggle("s-signup");
};

export default () => {
  return <Login handleSign={handleSign} />;
};
