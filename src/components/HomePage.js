import React, { Component } from "react";
import Navbar from "./Navbar";
import { homePageReviews } from "../constants";
import Reviews from "./Reviews";

export default class Homepage extends Component {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <div className="home-content">
          <div className="title">Zhou Agency</div>
          <div className="home-graphic" />
          <div className="padding-top50" />
          <div className="who-are-we">
            <div className="who-are-we-text">
              <br />
              <p>
                Hi, my name is Justine, and I am the founder of Zhou agency. I
                started this business 20 years ago with the dream of helping
                people understand their financial story.
              </p>
              <p>
                For many people, dealing with taxes, insurance, retirement, and
                real estate is a stressful process. There is a lot at stake.
                When it comes to big, long term decisions that effect your loved
                ones, you need an expert you can trust. My favorite part of my
                job is sitting down with someone and understanding where they
                are coming from. Once I know what your priorities are, I can
                then figure out how best to get you there. Learning your story
                and finding the best solution for you is the mission of my
                company.
              </p>
            </div>
            <img src="images/jun2.png" className="jun" alt="jun" />
          </div>
          <div className="why-us">
            <h1>Reviews</h1>
            <Reviews reviews={homePageReviews} />
            <br />

            <h1>Statistics</h1>
            <div
              className="stats-box-container"
              style={{ backgroundColor: "lightgray" }}
            >
              <div className="stats-box-content">
                <div className="stats-box-row">
                  <div className="stats">
                    <div className="bold-stats">95%</div>{" "}
                    <p>Retention rate for insurance</p>
                  </div>
                  <div className="stats">
                    <div className="bold-stats">1,685</div>
                    <p>Tax returns filed in 2019</p>
                  </div>
                </div>
                <div className="stats-box-row">
                  <div className="stats">
                    <div className="bold-stats">500+</div>{" "}
                    <p>Families assisted in finding a property</p>
                  </div>
                  <div div className="stats">
                    <div className="bold-stats">102</div>{" "}
                    <p>Small businesses with full service accounting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-top50" />
          </div>
          <div className="mission-statement">
            <i>
              Our mission is to build meaningful, lasting relationship with
              clients while securing their financial future. To create an
              energizing work environment that encourages constant personal and
              professional growth.
            </i>
          </div>
        </div>
      </div>
    );
  }
}
