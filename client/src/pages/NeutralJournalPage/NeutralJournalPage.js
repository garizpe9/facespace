import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NeutralJournalEntry from "../../component/journal/NeutralJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaControlCard from "../../component/media/MediaControlCard";
 
class NeutralJournalPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <NeutralJournalEntry
        desc="Although neutral feelings do not have a valence—positive or negative—
        some say that neutral feelings can be counted as positive feelings,
         since they are characterized by the absence of pain and suffering."
        what="What are you feeling neutral about today? Did you feel any other intense emotions throughout the day?"
        unpack="Take a moment to unpack that feeling. Are there any positives or negatives to it?"
        note="Feel free to type anything else here that you would like to note about today."/>
        <MediaControlCard/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default NeutralJournalPage;