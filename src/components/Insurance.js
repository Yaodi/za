import React, { Component } from "react";
import Navbar from "./Navbar";
import { accountingReviews } from "../constants";
import Reviews from "./Reviews";

export default class Insurance extends Component {
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
                  ❖ Auto
                  <br />❖ Homeowners
                  <br />❖ Renters
                  <br />❖ Landlord
                  <br />❖ Umbrella
                  <br />❖ Medical
                  <br />❖ Term Life
                  <br />❖ Permanent Life
                  <br />❖ Annuity
                  <br />❖ Disability
                </td>
                <td>
                  ❖ Property
                  <br />❖ Liability
                  <br />❖ Workers Comp
                  <br />❖ Business Interruption
                  <br />❖ Business Continuation
                  <br />❖ Employee Benefits
                  <br />❖ Umbrella
                  <br />❖ Key Person
                  <br />❖ Cyber
                  <br />❖ EPLI
                </td>
              </tr>
            </table>
            <div className="accounting-header">Meet Our Insurance Team</div>

            <div className="accounting-pictures">
              <div className="accounting-row">
                <img src="images/elsie.jpg" className="accounting-picture" />
                <p>
                  Elsie has extensive professional experience in financial
                  services, specializing in Property and Casualty insurance
                  advisory. She received her Charted Property and Casualty
                  Underwriter (CPCU) designation in 2018. She connects our
                  insurance carriers/partners to provide the best advice and
                  solutions to our clients for their risk management needs.
                  Elsie received a Bachelor degree in Finance at University of
                  Ottawa, in Canada, and a Master degree in Finance at DePaul
                  University.
                </p>
              </div>
              <div className="accounting-row">
                <p>
                  Mandy is our personal lines and employee benefits expert in
                  our insurance department, and she received her Certified
                  Insurance Service Representative (CISR) designation in 2018.
                  She connects with our insurance partners to provide customized
                  solutions to meet clients’ personal or group needs. Mandy
                  received her master’s degree from DePaul University.
                </p>
                <img src="images/mandy.jpg" className="accounting-picture" />
              </div>
              <div className="accounting-row">
                <img src="images/lu.jpeg" className="accounting-picture" />
                <p>
                  Lu provides service to both commercial and personal lines
                  clients on all inquiries and concerns regarding coverages,
                  policies and renewal service. She recently graduated from
                  Auburn University with a bachelor’s degree in business
                  administration.
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
