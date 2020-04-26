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
                <img src="images/yongle.jpeg" className="accounting-picture" />
                <p>
                  Yongle is the Property Manager that oversees the entire
                  property portfolio for our real estate clients. Prior to
                  joining Zhou Agency, Yongle worked as an accountant at
                  Berkshire Hathaway Koenig Rubloff Realty Group and held Real
                  Estate broker assistant role at Buzz Real Estate. Yongle also
                  has professional experience in managing client relationships
                  having most recently worked at Eastland Food Corporation as a
                  regional account manager. Yongle graduated from Loyola
                  University in 2015 with a degree in Finance.
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
