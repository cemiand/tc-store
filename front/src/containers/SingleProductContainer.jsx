import React, { useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/actions/productAction";
import { addProductToCart } from "../store/actions/cartAction";
import ReviewContainer from "./ReviewContainer";
import ContenedorDeReviews from "../components/ContenedorDeReviews";

const SingleProductContainer = ({ match }) => {
  const dispatch = useDispatch();

  const { singleProduct } = useSelector((state) => state.productsReducer);

  const addToCart = () => {
    console.log("PRODUCTO AGREGADO", singleProduct);
    addProductToCart(singleProduct);
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id));
  }, []);

  return (
    <div>
      <SingleProduct singleProduct={singleProduct} addToCart={addToCart} />
      <ReviewContainer />
      <ContenedorDeReviews singleProductReviews={singleProduct.reviews} />
    </div>
  );
};

export default SingleProductContainer;
