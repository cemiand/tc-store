import React from "react";
import Products from "../components/Products";
import { useSelector } from "react-redux";

const FilteredProductsContainer = ({ match }) => {
  const { products } = useSelector((state) => state.productsReducer);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().match(match.params.search.toLowerCase())
  );

  return <Products products={filteredProducts} />;
};

export default FilteredProductsContainer;
