import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";
import { Router } from "react-router-dom";
import history from "./history"

render(<Router history={history}><Root /></Router>, document.getElementById("main"));