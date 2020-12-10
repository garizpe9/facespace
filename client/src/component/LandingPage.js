import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BottomAppBar from './nav/BottomAppBar'
import JournalList from './journal/JournalList'

class LandingPage extends Component {
  render() {
    return(
      <div>
        <Router>
        <JournalList/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default LandingPage;