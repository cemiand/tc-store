import React from "react";
import { Spinner } from "react-bootstrap";

const ContenedorDeReviews = ({ singleProductReviews }) => {
  return (
    <div style={{ backgroundColor: "grey", width: "100%", height: "500px" }}>
      {singleProductReviews ? (
        singleProductReviews.map((review) => {
          return (
            <div key={review._id} style={{ border: "1px solid black" }}>
              <h2 style={{ textAlign: "left" }}>{review.user.name} dijo:</h2>
              <h3>{review.description}</h3>
            </div>
          );
        })
      ) : (
        <Spinner animation="border" variant="light" />
      )}
    </div>
  );
};

export default ContenedorDeReviews;
