import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HappyJournalEntry from "../../component/journal/HappyJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaCard from "../../component/media/MediaCard";
import PlayerApp from '../../component/PlayerComponent/Player';
import Header from "../../component/HeaderComponent/Header";
import { Grid } from '@material-ui/core';
 
class HappyJournalPage extends Component {
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
                <HappyJournalEntry/>
              </Grid>
            </Grid>
          <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default HappyJournalPage;