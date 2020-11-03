import React, {useEffect} from 'react';
import SingleProduct from "../components/SingleProduct"
import {fetchSingleProduct} from "../src/store/actions/productAction"
import { useDispatch } from 'react-redux'


const SingleProductContainer = () => {

    const dispatch = useDispatch();

    const { singleProduct } = useSelector(state => state.singleProduct);

    useEffect(() => {
        dispatch(fetchSingleProduct(ACA_VA_EL_ID_DEL_PRODUCTO))
      }, [])

    

    return (
        <SingleProduct singleProduct={singleProduct}/>
    )
}

export default SingleProductContainer;