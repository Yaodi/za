import React, { Component } from "react";
import Navbar from "./Navbar";
import { accountingReviews, employees } from "../constants";
import Reviews from "./Reviews";
import Employee from "./Employee";

export default class RealEstate extends Component {
  render() {
    let realEstateEmployees = employees.filter(
      (employee) => employee.department === "real estate"
    );
    return (
      <>
        <div className="accounting-container">
          <Navbar />
          <div className="accounting-content">
            <div className="title">Meet Our Real Estate Team</div>
            <div className="accounting-pictures">
              <div className="accounting-row">
                {realEstateEmployees.map((employee) => {
                  return <Employee employee={employee} />;
                })}
              </div>
            </div>
            <table className="services-table">
              <caption className="title">Real Estate Services</caption>
              <br />
              <tr>
                <td>
                  <b>Individual </b>
                  <br />
                </td>
                <td>
                  <b>Business</b>
                </td>
              </tr>
              <td>
                <ul>
                  <li>Assist you in finding and buying your dream home</li>
                  <li>
                    Help you sell and get the most out of your current home
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    Find the best investment property to fit your needs and the
                    current market
                  </li>
                  <li>
                    Secure tenants, obtain rent, and manage your investment
                    property
                  </li>
                  <li>Sell your investment property at highest value</li>
                </ul>
              </td>
            </table>
            <div className="padding-top50" />
            <div className="title">Reviews</div>
            <div className="accounting-reviews">
              <Reviews reviews={accountingReviews} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
