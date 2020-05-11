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
            <img src="images/logo-v3-transparent.png" className="home-logo" />
            <span className="navbar-topright"> Chinese | Contact Us</span>
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
        </div>
      </div>
    );
  }
}
