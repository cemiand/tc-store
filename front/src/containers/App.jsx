import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import { fetchUser } from "../store/actions/usersAction";
import "../assets/style.scss";

export default () => {
  const dispatch = useDispatch();

  const { singleUser } = useSelector((state) => state.usersReducer);
  useEffect(() => {
    if (!singleUser) dispatch(fetchUser());
  });

  return <Main />;
};
