import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./HomePage";
import Accounting from "./Accounting";
import Insurance from "./Insurance";
import Seminars from "./Seminars";
import RealEstate from "./RealEstate";

export default class Routes extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/accounting" component={Accounting} />
          <Route exact path="/insurance" component={Insurance} />
          <Route exact path="/seminars" component={Seminars} />
          <Route exact path="/realestate" component={RealEstate} />
          <Route exact path="/home" component={Homepage} />
        </Switch>
      </>
    );
  }
}
