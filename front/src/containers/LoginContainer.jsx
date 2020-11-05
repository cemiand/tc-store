import React from "react";
import Login from "../components/Login";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { createUser, loginUser } from "../store/actions/usersAction";

export default () => {
  const dispatch = useDispatch();

  const handleSign = () => {
    document.querySelector(".cont").classList.toggle("s-signup");
  };

  const { handleChange, inputs } = useInput();

  const handleSignUp = () => {
    const user = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    };
    dispatch(createUser(user)).then((user) => console.log(user));
  };

  const handleSingIn = () => {
    const user = { email: inputs.email, password: inputs.password };
    dispatch(loginUser(user)).then((user) => console.log(user));
  };

  return (
    <Login
      handleSign={handleSign}
      handleChange={handleChange}
      handleSignUp={handleSignUp}
      handleSingIn={handleSingIn}
      inputs={inputs}
    />
  );
};
