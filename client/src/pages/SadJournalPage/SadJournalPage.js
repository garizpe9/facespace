import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SadJournalEntry from "../../component/journal/SadJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaCard from "../../component/media/MediaCard";
import PlayerApp from '../../component/PlayerComponent/Player';
import Header from "../../component/HeaderComponent/Header";
import { Grid } from '@material-ui/core';

class SadJournalPage extends Component {
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
                <SadJournalEntry
                  desc="Humans depend on each other to survive. 
                  Sadness is the emotion that makes us remember that fact. 
                  As painful as sadness is, it’s not all bad. 
                  Psychologists have discovered some surprising benefits of sadness 
                  that can help us make light of the emotion and its circumstances."
                  what="What do you feel sad about today? How has that impacted your day?"
                  unpack="Take a moment to unpack that reaction. Do you feel any other emotions that may lie underneath it?"
                  note="Feel free to type anything else here that you would like to note about today."/>
              </Grid>
            </Grid>
          <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default SadJournalPage;