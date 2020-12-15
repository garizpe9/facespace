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
          <Header />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <MediaCard>
                <PlayerApp />
              </MediaCard>
            </Grid>
            <Grid item xs={8}>
              <HappyJournalEntry
                desc="Happiness is our brain’s way of telling us that 
                something is good for us and encourages us to seek it out.  
                We feel joy when the neurotransmitters dopamine and serotonin are released into our bodies."
                what="What are you happy about today? How has that impacted your day?"
                unpack="What are some of the things you did to make yourself happy today? Was your overall emotion different from yesterday? How?"
                note="Feel free to type anything else here that you would like to note about today." />
            </Grid>
          </Grid>
          <BottomAppBar />
        </Router>
      </div>
    );
  }
}

export default HappyJournalPage;