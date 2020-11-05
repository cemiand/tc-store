import React from 'react';
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/actions/usersAction'



const NavbarContainer = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser())
  }

  const { singleUser } = useSelector(state => state.usersReducer);

  return (
    <Navbar userlog={singleUser} logout={logout} />
  )
}

export default NavbarContainer;