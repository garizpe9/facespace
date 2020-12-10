import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import JournalEntry from "../../component/journal/JournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaControlCard from "../../component/media/MediaControlCard";
import Container from '@material-ui/core';

class JournalEntriesPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <Container>
            <JournalEntry/>
            <MediaControlCard/>
            <BottomAppBar/>
          </Container>
        </Router>
      </div>
    );
  }
}

export default JournalEntriesPage;
