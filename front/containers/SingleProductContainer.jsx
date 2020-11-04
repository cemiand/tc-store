import React, {useEffect} from 'react';
import SingleProduct from "../components/SingleProduct"
import {fetchSingleProduct} from "../src/store/actions/productAction"
import { useDispatch, useSelector } from 'react-redux'


const SingleProductContainer = ({match}) => {
    
    const dispatch = useDispatch()
    
    const {singleProduct}  = useSelector((state) => state.productsReducer);
    
    
    useEffect(() => {
        dispatch(fetchSingleProduct(match.params.id))
        console.log("DESDE EL CONTAINER", {singleProduct})
    }, [])
    
    return (
        <SingleProduct singleProduct={singleProduct}/>
        )
    }

export default SingleProductContainer;  