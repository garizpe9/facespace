import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HappyJournalEntry from "../../component/journal/HappyJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaControlCard from "../../component/media/MediaControlCard";
 
class HappyJournalPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <HappyJournalEntry
        desc="What are you happy about today? How has that impacted your day?"
        what="What are some of the things you did to make yourself happy today? Was your overall emotion different from yesterday? How?"
        unpack="Take a moment to unpack that reaction. Do you feel any other emotions that may lie underneath it?"
        note="Feel free to type anything else here that you would like to note about today."/>
        <MediaControlCard/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default HappyJournalPage;