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
              <AngryJournalEntry/>
            </Grid>
          </Grid>
          <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default AngryJournalPage;