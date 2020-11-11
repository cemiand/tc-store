import React, { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/actions/productAction";
import {
  addProductToCart,
  addProductStorage,
} from "../store/actions/cartAction";

const SingleProductContainer = ({ match }) => {
  const dispatch = useDispatch();

  const { singleProduct } = useSelector((state) => state.productsReducer);
  const { singleUser } = useSelector((state) => state.usersReducer);

  const [count, setCount] = useState(1);

  const addToCart = () => {
    if (singleUser.name) {
      dispatch(addProductToCart({ product: singleProduct, quantity: count }));
    } else {
      dispatch(addProductStorage({ product: singleProduct, quantity: count }));
    }
  };

  const sumProduct = () => setCount(count + 1);
  const restProduct = () => {
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(match.params.id));
  }, []);

  return (
    <SingleProduct
      singleProduct={singleProduct}
      addToCart={addToCart}
      sumProduct={sumProduct}
      restProduct={restProduct}
      quantity={count}
    />
  );
};

export default SingleProductContainer;
