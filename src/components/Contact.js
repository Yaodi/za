import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="contact-banner">
          <div className="contact-page">
            <div className="contact-form-container">
              <div className="padding-top50" />
              <div className="title">Contact Us</div>
              <form className="contact-form">
                Name:
                <input
                  name="name"
                  type="text"
                  className="contact-form"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                ></input>
                <br />
                Phone:
                <input
                  name="phone"
                  type="tel"
                  className="contact-form"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                ></input>
                <br />
                Email:
                <input
                  name="email"
                  type="text"
                  className="contact-form"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                ></input>
                <br />
                Message:
                <textarea
                  name="message"
                  value={this.state.message}
                  className="contact-form"
                  onChange={(e) => this.setState({ message: e.target.value })}
                ></textarea>
                <br />
                <button className="contact-form" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
            <div>
              <div className="padding-top50" />
              <div className="contact-info">
                <h3>Location:</h3>
                <div>625 N Michigan Ave</div>
                <div>Suite 1705</div>
                <div>Chicago, IL 60610</div>
                <h3>Phone:</h3>
                <div>312-808-8899</div>
                <h3>Email:</h3>
                <div>zhouagency@gmail.com</div>
                <h3>WeChat:</h3>
                <div>周军城市集团</div>
                <div className="padding-top50" />
                <div>
                  Check out our reviews on{" "}
                  <a href="https://g.page/r/CY5Q7c9Syo7pEAE" target="blank">
                    Google
                  </a>{" "}
                  or{" "}
                  <a
                    target="blank"
                    href="https://www.yelp.com/biz/zhou-agency-chicago"
                  >
                    Yelp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="padding-top50" />
        </div>
      </>
    );
  }
}
