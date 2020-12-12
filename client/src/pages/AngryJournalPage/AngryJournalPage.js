import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AngryJournalEntry from "../../component/journal/AngryJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaControlCard from "../../component/media/MediaControlCard";
 
class AngryJournalPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <AngryJournalEntry
        desc="Psychological studies have identified three causes of anger:
        when our desires, goals or expectations are not met,
        when we feel threatened, and/or when we are using anger to mask other emotions."
        what="What do you feel angry about today? How has that impacted your day?"
        unpack="Take a moment to unpack that reaction. Do you feel any other emotions that may lie underneath it?"
        note="Feel free to type anything else here that you would like to note about today."/>
        <MediaControlCard/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default AngryJournalPage;