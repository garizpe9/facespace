import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../component/HeaderComponent/Header";
import JournalList from '../../component/journal/JournalList'
import BottomAppBar from "../../component/nav/BottomAppBar";

class JournalEntriesPage extends Component {
  render() {
    return (
      <div>
        <Router>
            <Header/>
            <JournalList/>
            <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default JournalEntriesPage;
