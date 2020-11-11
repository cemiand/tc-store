import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Review from "../components/Review";
import { postReview } from "../store/actions/reviewsAction";
import ContenedorDeReviews from "../components/ContenedorDeReviews";

const ReviewContainer = () => {
  const [rate, setRate] = useState(null); //CONECTAR CON LA REVIEW!!
  const [review, SetReview] = useState("");

  const { singleProduct } = useSelector((state) => state.productsReducer);
  const { singleUser } = useSelector((state) => state.usersReducer);

  const textAreaHandler = (e) => {
    SetReview(e.target.value);
  };

  //CONECTAR CON LA REVIEW!!
  const starHandler = (e) => {
    setRate(e.target.value);
  };

  const onSubmiteHandler = (e) => {
    e.preventDefault();
    <ContenedorDeReviews />;
    postReview(singleProduct, { review });
  };

  return (
    <Review
      onSubmiteHandler={onSubmiteHandler}
      singleUser={singleUser}
      singleProductReviews={singleProduct.reviews}
      textAreaHandler={textAreaHandler}
      starHandler={starHandler} //CONECTAR CON LA REVIEW!!
    />
  );
};

export default ReviewContainer;
