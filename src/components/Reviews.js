import React, { Component } from "react";
import Review from "./Review";

const Reviews = (props) => {
  const { reviews } = props;
  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <>
          <Review review={review} />
          <br />
        </>
      ))}
      <div>
        View more of our reviews on{" "}
        <a href="https://g.page/r/CY5Q7c9Syo7pEAE" target="blank">
          Google
        </a>{" "}
        or{" "}
        <a target="blank" href="https://www.yelp.com/biz/zhou-agency-chicago">
          Yelp
        </a>
      </div>
    </div>
  );
};

export default Reviews;
