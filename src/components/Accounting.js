import React, { Component } from "react";
import Navbar from "./Navbar";
import { accountingReviews } from "../constants";
import Reviews from "./Reviews";

export default class Accounting extends Component {
  render() {
    return (
      <>
        <div className="accounting-container">
          <div className="accounting-image">
            <Navbar />
            <div className="accounting-text"></div>
          </div>
          <div className="accounting-content">
            <br />
            <table className="services-table">
              <caption className="accounting-table-header">
                Accounting Services
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
                  ❖ Tax Returns
                  <br />
                  <br />
                  ❖ Tax Planning
                  <br />
                  <br />
                  ❖ Tax consultation
                  <br />
                  <br />❖ Tax Appeal
                </td>
                <td>
                  ❖ Tax Returns
                  <br />
                  ❖ Bookkeeping
                  <br />
                  ❖ Corp/LLC Setup
                  <br />
                  ❖ Payroll Processing
                  <br />
                  ❖ Sales Tax
                  <br />
                  ❖ Financial Reporting
                  <br />❖ Financial Review
                </td>
              </tr>
            </table>
            <div className="accounting-header">Meet our accounting team</div>
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
