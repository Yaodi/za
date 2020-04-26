import React, { Component } from "react";
import Navbar from "./Navbar";
import { accountingReviews } from "../constants";
import Reviews from "./Reviews";

export default class RealEstate extends Component {
  render() {
    return (
      <>
        <div className="accounting-container">
          <div className="accounting-image">
            <Navbar />
            <div className="accounting-text"></div>
          </div>
          <div className="accounting-content">
            <table className="services-table">
              <caption className="accounting-table-header">
                Real Estate Services
              </caption>
              <tr>
                <td>
                  <b>Individual </b>
                  <br />
                </td>
                <td>
                  <b>Business</b>
                </td>
              </tr>
              <tr>
                <td>
                  ❖ Assist you in finding and buying your dream home
                  <br />❖ Help you sell and get the most out of your current
                  home
                </td>
                <td>
                  ❖ Find the best investment property to fit your needs and the
                  current market
                  <br />❖ Secure tenants, obtain rent, and manage your
                  investment property
                  <br />❖ Sell your investment property at highest value
                </td>
              </tr>
            </table>
            <div className="accounting-header">Meet Our Real Estate Team</div>
            <div className="accounting-pictures">
              <div className="accounting-row">
                <img src="images/jun.png" className="accounting-picture" />
                <p>
                  We Provide a personalized approach that takes into account
                  your situation, your finances, your story. Here are the
                  experts who will be helping you achieve your real estate
                  goals. We Provide a personalized approach that takes into
                  account your situation, your finances, your story. Here are
                  the experts who will be helping you achieve your real estate
                  goals.
                </p>
              </div>
              <div className="accounting-row">
                <p>
                  We Provide a personalized approach that takes into account
                  your situation, your finances, your story. Here are the
                  experts who will be helping you achieve your real estate
                  goals. We Provide a personalized approach that takes into
                  account your situation, your finances, your story. Here are
                  the experts who will be helping you achieve your real estate
                  goals.
                </p>
                <img src="images/jun.png" className="accounting-picture" />
              </div>
              <div className="accounting-row">
                <img src="images/jun.png" className="accounting-picture" />
                <p>
                  We Provide a personalized approach that takes into account
                  your situation, your finances, your story. Here are the
                  experts who will be helping you achieve your real estate
                  goals. We Provide a personalized approach that takes into
                  account your situation, your finances, your story. Here are
                  the experts who will be helping you achieve your real estate
                  goals.
                </p>
              </div>
            </div>

            <div className="accounting-reviews">
              <h1>Reviews</h1>
              <Reviews reviews={accountingReviews} />
            </div>
          </div>
        </div>
      </>
    );
  }
}