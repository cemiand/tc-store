import React, { useEffect } from 'react';
import Products from "../components/Products"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions/productAction';


const FilteredProductsContainer = ({match}) => {

    const dispatch = useDispatch()

    const { products } = useSelector(state => state.productsReducer);
    const filteredProducts = products.filter(product => product.name == match.params.search)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <Products products={filteredProducts} />
    )
}

export default FilteredProductsContainer;