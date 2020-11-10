import React, {useEffect} from "react"
import Admin from "../components/Admin"
import { fetchUsers } from "../store/actions/usersAction";
import useInput from "../hooks/useInput"
import {useDispatch, useSelector} from "react-redux"



export default () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.usersReducer);
    const { handleChange, inputs } = useInput();
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, []);
  
    return (
        <Admin users={users} handleChange={handleChange} filterValue={inputs.email}/>
    )

}