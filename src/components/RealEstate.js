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
            <div className="accounting-header">Meet Our Real Estate Team</div>
            <div className="accounting-pictures">
              <div className="accounting-row">
                {realEstateEmployees.map((employee) => {
                  return <Employee employee={employee} />;
                })}
              </div>
            </div>
            <table className="re-services-table">
              <caption className="accounting-table-header">
                Real Estate Services
              </caption>
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
              <tr>
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
                      Find the best investment property to fit your needs and
                      the current market
                    </li>
                    <li>
                      Secure tenants, obtain rent, and manage your investment
                    </li>
                    property
                  </ul>
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
