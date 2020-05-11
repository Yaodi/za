import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Seminars extends Component {
  render() {
    return (
      <>
        <div className="accounting-container">
          <Navbar />
          <div className="accounting-content">
            <div className="title">Our Seminars</div>
            <div className="who-are-we">
              <div className="who-are-we-text">
                <br />
                <p>
                  We began our tax planning seminars over 15 years ago with the
                  goal of helping clients understand their own financial story.
                  Since then, we have taught our seminars in 6 different cities
                  reaching more than 3000 people over the course 200+ seminars.
                </p>
                <p>
                  We believe education is the key to long-term financial
                  success, which is why our seminars are free, interactive, and
                  available both in person and over webinar. Sign up for a free
                  seminar now, or watch one of our previous seminars below to
                  further your knowledge of tax strategies.
                </p>
              </div>
              <img src="images/jun2.png" className="jun" alt="jun" />
            </div>
            <div className="padding-top50" />
            <button className="appointment-button">
              <a href={window.location}>Sign Up</a>
            </button>
            <br />
            <button className="appointment-button">
              <a href={window.location}>Leave Feedback</a>
            </button>
            <div className="padding-top50" />
            <div className="padding-top50" />
            <div className="title">Previous Seminars</div>
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
            <br />
          </div>
        </div>
      </>
    );
  }
}
