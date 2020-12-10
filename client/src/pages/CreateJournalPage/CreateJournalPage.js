import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import JournalEntry from "../../component/journal/JournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaControlCard from "../../component/media/MediaControlCard";
 
class CreateJournalPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <JournalEntry/>
        <MediaControlCard/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default CreateJournalPage;
