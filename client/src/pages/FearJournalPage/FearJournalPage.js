import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FearJournalEntry from "../../component/journal/FearJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaControlCard from "../../component/media/MediaControlCard";
 
class FearJournalPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <FearJournalEntry
                desc="We become afraid when we encounter things and situations that we don’t understand, 
                we can’t control, and/or we suspect will cause harm to us. 
                Like all of your emotions, fear has developed to keep you safe. 
                Just because fear is a natural response doesn’t mean you can’t limit its power!"
                what="What are you fearful of today? How has that impacted your day?"
                unpack="Take a moment to unpack that reaction. Do you feel any other emotions that may lie underneath it?"
                note="Feel free to type anything else here that you would like to note about today."/>
        <MediaControlCard/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default FearJournalPage;