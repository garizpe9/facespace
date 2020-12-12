import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../component/HeaderComponent/Header";
import FearJournalEntry from "../../component/journal/FearJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaCard from "../../component/media/MediaCard";
import PlayerApp from '../../component/PlayerComponent/Player';
import { Grid } from '@material-ui/core';
 
class FearJournalPage extends Component {
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
              <FearJournalEntry
                desc="We become afraid when we encounter things and situations that we don’t understand, 
                we can’t control, and/or we suspect will cause harm to us. 
                Like all of your emotions, fear has developed to keep you safe. 
                Just because fear is a natural response doesn’t mean you can’t limit its power!"
                what="What are you fearful of today? How has that impacted your day?"
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

export default FearJournalPage;