import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StarRating from "./StarRating";

const Review = ({
  singleUser,
  onSubmiteHandler,
  textAreaHandler,
  singleProductReviews,
  //   starHandler
}) => {
  const [dejoReview, setDejoReview] = useState(false);

  useEffect(() => {
    singleProductReviews &&
      singleProductReviews.forEach((reviews) => {
        reviews.user._id == singleUser.id ? setDejoReview(true) : null;
      });
  });

  return (
    dejoReview == false &&
    (singleUser.name ? (
      <div className="formulario">
        <h2 className="h2">Did you buy this product {singleUser.name}?</h2>
        <h3 className="h3">Then, please, leave us a review</h3>
        <form onSubmit={onSubmiteHandler}>
          <div className="pinfo">Rate our product</div>

          <StarRating />

          <div className="pinfo">Write your feedback</div>
          <textarea
            onChange={textAreaHandler}
            className="textarea"
            rows="10"
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    ) : (
      <p>Plz leave a review</p>
    ))
  );
};

export default Review;
