import React, { Component } from "react";
import { Box, Flex, Heading, Text, Image } from "rebass";
import Navbar from "./Navbar";

export default class Homepage extends Component {
  render() {
    return (
      <Flex className="home-container" flexDirection="column" maxWidth="100%">
        <div className="home-image">
          <Navbar />
          {/* <div className="logo">
            <h1>Zhou Agency</h1>
            <h4>Your Trusted Advisor</h4>
          </div> */}
          <div className="your-financial-family">
            <h1>Zhou Agency</h1>
            <p>
              We are a team of dedicated experts ready to help you with all your
              financial needs
            </p>
          </div>
        </div>
        <div className="home-content">
          <div className="who-are-we">
            <div className="who-are-we-text">
              {/* <h1>About</h1> */}
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
              {/* <p>
                Zhou Agency is a small, family-run business that is committed to
                making a difficult process more understandable. I never use
                jargon when speaking to customers, because I am not here to
                impress you with complicated terminology. I am here to help you
                understand where you are at now so you can get to where you want
                to be.
              </p> */}
            </div>
            <img
              src="images/jun.png"
              height="450"
              width="450"
              alt="Avatar"
              className="jun"
            />
          </div>
          <div className="why-us">
            <h1>Reviews</h1>

            <div className="reviews-container">
              <div className="review">
                <div className="review-text">
                  This is a 5 star review! couldn't be happier
                </div>
                <div className="review-stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="review-author">-Yaodi Hu</div>
              </div>
              <br />
              <div className="review">
                <div className="review-text">
                  This is a 5 star review! couldn't be happier
                </div>
                <div className="review-stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="review-author">-Yaodi Hu</div>
              </div>
            </div>
            <br />

            <h1>Statistics</h1>
            <div
              className="stats-box-container"
              style={{ backgroundColor: "lightgray" }}
            >
              <div className="stats-box-content">
                <div className="stats-box-row">
                  <div>
                    <div className="bold-stats">95%</div>{" "}
                    <p>Retention rate for insurance</p>
                  </div>
                  <div>
                    <div className="bold-stats">1,685</div>
                    <p>Tax returns filed in 2019</p>
                  </div>
                </div>
                <div className="stats-box-row">
                  <div>
                    <div className="bold-stats">500+</div>{" "}
                    <p>Families assisted in finding a property</p>
                  </div>
                  <div>
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
              {" "}
              <b>Mission Statement:</b> To build meaningful, lasting
              relationship with clients while securing their financial future.
              To create an energizing work environment that encourages constant
              personal and professional growth.
            </i>
          </div>
        </div>
        <hr />
      </Flex>
    );
  }
}
