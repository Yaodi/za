import React, { Component } from "react";
import Navbar from "./Navbar";
import { accountingReviews, employees } from "../constants";
import Reviews from "./Reviews";
import Employee from "./Employee";

export default class Accounting extends Component {
  render() {
    let accountingEmployees = employees.filter(
      (employee) => employee.department === "accounting"
    );
    return (
      <>
        <div className="accounting-container">
          <Navbar />
          <div className="accounting-content">
            <br />

            <div className="accounting-header">Meet our accounting team</div>
            <div className="accounting-pictures">
              <div className="accounting-row">
                {accountingEmployees.map((employee) => {
                  return <Employee employee={employee} />;
                })}
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
