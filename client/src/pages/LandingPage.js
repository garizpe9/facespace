import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Heal from "../component/Healthruwords/Healthruwords";
import BottomAppBar from "../component/nav/BottomAppBar";
import Login from "./Passport/login"


class HomeLandingPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <Login/><br/>
        <Heal/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default HomeLandingPage;
