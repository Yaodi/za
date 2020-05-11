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
    let [centeredEmployee, ...remainingEmployees] = accountingEmployees;
    return (
      <>
        <div className="accounting-container">
          <Navbar />
          <div className="accounting-content">
            <br />

            <div className="title">Our Accounting Team</div>
            <div className="accounting-pictures">
              <div className="accounting-row">
                <Employee employee={centeredEmployee} centered={true} />
                {remainingEmployees.map((employee) => {
                  if (employee.name === "Leah Yang")
                    return (
                      <>
                        <Employee employee={employee} />
                        <div className="employee-profile" />
                      </>
                    );
                  return <Employee employee={employee} />;
                })}
              </div>
            </div>
            <div className="padding-top50" />
            <hr />
            <table className="services-table">
              <caption className="title">Our Services</caption>
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
                  Tax Planning
                  <br />
                  Tax consultation
                  <br /> Tax Appeal
                </td>
                <td>
                  Bookkeeping
                  <br />
                  Payroll Processing
                  <br />
                  Sales Tax
                  <br /> Financial Review
                </td>
              </tr>
            </table>
            <div className="padding-top50" />
            <div className="padding-top50" />
            <div className="title">Reviews</div>
            <div className="accounting-reviews">
              <Reviews reviews={accountingReviews} />
            </div>
            <div className="padding-top50" />
          </div>
        </div>
      </>
    );
  }
}
