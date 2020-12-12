import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SurpriseJournalEntry from "../../component/journal/SurpriseJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaCard from "../../component/media/MediaCard";
import PlayerApp from '../../component/PlayerComponent/Player';
import Header from "../../component/HeaderComponent/Header";
import { Grid } from '@material-ui/core';
 
class SurpriseJournalPage extends Component {
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
              <SurpriseJournalEntry
                desc="Neurologists have discovered that surprise stimulates 
                the hippocampus, the part of the brain that stores and processes memories. 
                Psychologists believe that this is most likely a survival instinct 
                that helps us to learn from new events and pass that learning on."
                what="What surprised you today? Was it a good or bad surprise? How did that impact your day?"
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

export default SurpriseJournalPage;