import React, {useEffect} from 'react';
import SingleProduct from "../components/SingleProduct"
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../store/actions/productAction';


const SingleProductContainer = ({match}) => {
    
    const dispatch = useDispatch()
    
    const {singleProduct}  = useSelector((state) => state.productsReducer);
    
    
    useEffect(() => {
        dispatch(fetchSingleProduct(match.params.id))
    }, [])
    
    return (
        <SingleProduct singleProduct={singleProduct}/>
        )
    }

export default SingleProductContainer;  