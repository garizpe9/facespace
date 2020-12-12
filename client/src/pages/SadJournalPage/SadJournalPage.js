import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SadJournalEntry from "../../component/journal/SadJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaControlCard from "../../component/media/MediaControlCard";
 
class SadJournalPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <SadJournalEntry
                desc="Humans depend on each other to survive. 
                Sadness is the emotion that makes us remember that fact. 
                As painful as sadness is, it’s not all bad. 
                Psychologists have discovered some surprising benefits of sadness 
                that can help us make light of the emotion and its circumstances."
                what="What do you feel sad about today? How has that impacted your day?"
                unpack="Take a moment to unpack that reaction. Do you feel any other emotions that may lie underneath it?"
                note="Feel free to type anything else here that you would like to note about today."/>
        <MediaControlCard/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default SadJournalPage;