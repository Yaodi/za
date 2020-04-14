import React, { Component } from "react";

const Review = props => {
  const { author, source, URL, content, numStars } = props.review;
  let starRating = "★".repeat(numStars);

  return (
    <div className="review">
      <div className="review-text">{content}</div>
      <br />
      <div className="review-stars">{starRating}</div>
      <div className="review-author">
        <i>{author}</i>
      </div>
    </div>
  );
};

export default Review;
