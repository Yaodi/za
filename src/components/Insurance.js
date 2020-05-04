import React, { Component } from "react";
import Navbar from "./Navbar";
import { accountingReviews, employees } from "../constants";
import Reviews from "./Reviews";
import Employee from "./Employee";

export default class Insurance extends Component {
  render() {
    let insuranceEmployees = employees.filter(
      (employee) => employee.department === "insurance"
    );
    return (
      <>
        <div className="accounting-container">
          <Navbar />
          <div className="accounting-content">
            <div className="accounting-header">Meet Our Insurance Team</div>
            <div className="accounting-pictures">
              <div className="accounting-row">
                {insuranceEmployees.map((employee) => {
                  return <Employee employee={employee} />;
                })}
              </div>
            </div>

            <table className="services-table">
              <caption className="accounting-table-header">
                Insurance Services
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
                  Auto
                  <br /> Homeowners
                  <br /> Renters
                  <br /> Landlord
                  <br /> Umbrella
                  <br /> Medical
                  <br /> Term Life
                  <br /> Permanent Life
                  <br /> Annuity
                  <br /> Disability
                </td>
                <td>
                  Property
                  <br /> Liability
                  <br /> Workers Comp
                  <br /> Business Interruption
                  <br /> Business Continuation
                  <br /> Employee Benefits
                  <br /> Umbrella
                  <br /> Key Person
                  <br /> Cyber
                  <br /> EPLI
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
