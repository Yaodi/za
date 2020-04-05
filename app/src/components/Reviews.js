import React, { Component } from "react";
import Review from "./Review";

const Reviews = props => {
  const { reviews } = props;
  return (
    <div className="reviews-container">
      {reviews.map(review => (
        <>
          <Review review={review} />
          <br />
        </>
      ))}
    </div>
  );
};

export default Reviews;
