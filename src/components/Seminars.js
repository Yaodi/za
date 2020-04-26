import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Seminars extends Component {
  render() {
    return (
      <>
        <div className="accounting-container">
          <div className="accounting-image">
            <Navbar />
            <div className="accounting-text"></div>
          </div>
          <div className="accounting-content">
            <div className="accounting-header">Seminars</div>
            <div className="seminar-philosophy">
              I began running tax planning seminars over 15 years ago. Since, it
              has become one of my favorite services to provide because there is
              nothing more satisfying than when a customer truly understands
              what they are doing with their money. All of our seminars are
              free. We believe education is the key to long-term financial
              success. Our interactive forum allows you to get the answers you
              need.
            </div>
            <a className="accounting-header" href={window.location}>
              Sign Up
            </a>
            <a className="accounting-header" href={window.location}>
              Leave Feedback
            </a>
            <div className="accounting-header">Previous Seminars</div>
            <iframe
              title="simp"
              src="https://player.vimeo.com/video/411613447"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay;fullscreen"
            />
            <hr />
            <iframe
              title="enriqueSimp"
              src="https://player.vimeo.com/video/406332448"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay;fullscreen"
            />
          </div>
        </div>
      </>
    );
  }
}
