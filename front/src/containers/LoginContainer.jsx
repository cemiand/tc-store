import React from "react";
import Login from "../components/Login";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { createUser, loginUser } from "../store/actions/usersAction";

export default () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    document.querySelector(".cont").classList.toggle("s-signup");
  };

  const { handleChange, inputs } = useInput();

  const handleSignUp = () => {
    const user = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    };
    createUser(user).then(() => handleButton());
  };

  const handleSingIn = () => {
    const user = { email: inputs.email, password: inputs.password };
    dispatch(loginUser(user));
  };

  return (
    <Login
      handleButton={handleButton}
      handleChange={handleChange}
      handleSignUp={handleSignUp}
      handleSingIn={handleSingIn}
      inputs={inputs}
    />
  );
};
