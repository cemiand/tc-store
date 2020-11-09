import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "../components/Main";
import { fetchUser } from "../store/actions/usersAction";
import "../assets/style.scss";
import axios from "axios";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  /* useEffect(() => {
    axios.get("/api/auth/me").then((res) => res.data).then(data => console.log(data));
  }, []); */

  return <Main />;
};
