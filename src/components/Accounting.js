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

            <div className="accounting-header">Meet our accounting team</div>
            <div className="accounting-pictures">
              <div className="accounting-row">
                <img src="images/leah.jpg" className="accounting-picture" />
                <p>
                  Li is a certified QuickBooks ProAdvisor. She provides clients
                  with tax preparation, financial accounting, and business set
                  up consulting service. She graduated from Shanghai Jiao Tong
                  University and received a master's degree in accounting from
                  DePaul University.
                </p>
              </div>
              <div className="accounting-row">
                <p>
                  Sibo specializes in federal and state tax returns for
                  partnerships, corporations, and individuals. He received a
                  master's degree in accounting from Michigan Tech University.
                </p>
                <img src="images/sibo.jpg" className="accounting-picture" />
              </div>
              <div className="accounting-row">
                <img src="images/yiru.jpg" className="accounting-picture" />
                <p>
                  Yiru is a recent addition to the Zhou Agency team. She worked
                  with the team for 2018 and 2019 Tax Seasons and started the
                  full-time job in May 2019. She received a Bachelor's and
                  Master's Degree in Accountancy from the University of Illinois
                  at Urbana-Champaign.
                </p>
              </div>
            </div>
            <table className="services-table">
              <caption className="accounting-table-header">
                Accounting Services
              </caption>
              <br />
              <br />
              <br />
              <tr>
                <th>
                  <b className="centered-text">Individual </b>
                  <br />
                </th>
                <th>
                  <b className="centered-text">Business</b>
                </th>
              </tr>
              <tr>
                <td>
                  Tax Returns
                  <br />
                  <br />
                  Tax Planning
                  <br />
                  <br />
                  Tax consultation
                  <br />
                  <br /> Tax Appeal
                </td>
                <td>
                  Tax Returns
                  <br />
                  Bookkeeping
                  <br />
                  Corp/LLC Setup
                  <br />
                  Payroll Processing
                  <br />
                  Sales Tax
                  <br />
                  Financial Reporting
                  <br /> Financial Review
                </td>
              </tr>
            </table>

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
