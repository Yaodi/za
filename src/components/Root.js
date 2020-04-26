import React, { Component } from "react";
import Routes from "./Routes"

export default class Root extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
        <div className="footer">
          © 2019 Zhou Agency | 625 N Michigan Ave | Suite 1705 | Chicago, IL
          60611 | 312-808-8899
        </div>
      </div>
    );
  }
}
