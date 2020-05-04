import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const departments = [
      "HOME",
      "ACCOUNTING",
      "INSURANCE",
      "REAL ESTATE",
      "SEMINARS",
    ];
    return (
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-top">
            <span> Chinese | Join Our Team | Contact Us</span>
          </div>
          <div className="navbar-tabs">
            {departments.map((department) => (
              <div key={department} className="navbar-tab">
                <Link
                  to={"/" + department.toLowerCase().replace(" ", "")}
                  style={{ textDecorationLine: "none" }}
                >
                  <span className="navbar-text">{department}</span>
                </Link>
              </div>
            ))}
          </div>
          {/* <div className="logo">
            <h1>Zhou Agency</h1>
            <p>
              We are a team of dedicated experts ready to help you with all your
              financial needs
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}
