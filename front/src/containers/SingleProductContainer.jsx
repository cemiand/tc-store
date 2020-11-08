import React, {useEffect} from 'react';
import SingleProduct from "../components/SingleProduct"
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../store/actions/productAction';
import { addProductToCart } from '../store/actions/cartAction'

const SingleProductContainer = ({match}) => {
    
    const dispatch = useDispatch()
    
    const {singleProduct}  = useSelector((state) => state.productsReducer);
    
    const addToCart = () => {
        addProductToCart(singleProduct)
    }
    
    
    useEffect(() => {
        dispatch(fetchSingleProduct(match.params.id))
    }, [])
    
    return (
        <SingleProduct singleProduct={singleProduct} addToCart={addToCart}/>
        )
    }

export default SingleProductContainer;  