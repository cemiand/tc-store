import React, { useEffect } from 'react';
import Products from "../components/Products"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions/productAction';


const FilteredProductsContainer = () => {

    const dispatch = useDispatch()

    const { filteredProducts } = useSelector(state => state.search);
    filteredProducts = filteredProducts.filter(product => product.name == state.search)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <Products products={filteredProducts} />
    )
}

export default FilteredProductsContainer;