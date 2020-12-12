import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AngryJournalEntry from "../../component/journal/AngryJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import Header from "../../component/HeaderComponent/Header"; 
import MediaCard from "../../component/media/MediaCard";
import PlayerApp from '../../component/PlayerComponent/Player';
import { Grid } from '@material-ui/core';

class AngryJournalPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <MediaCard>
              <PlayerApp/>
              </MediaCard>
            </Grid>
            <Grid item xs={8}>
              <AngryJournalEntry
              desc="Psychological studies have identified three causes of anger:
              when our desires, goals or expectations are not met,
              when we feel threatened, and/or when we are using anger to mask other emotions."
              what="What do you feel angry about today? How has that impacted your day?"
              unpack="Take a moment to unpack that reaction. Do you feel any other emotions that may lie underneath it?"
              note="Feel free to type anything else here that you would like to note about today."
              />
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default AngryJournalPage;