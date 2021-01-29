import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DisgustJournalEntry from "../../component/journal/DisgustJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaCard from "../../component/media/MediaCard";
import PlayerApp from '../../component/PlayerComponent/Player';
import Header from "../../component/HeaderComponent/Header";
import { Grid } from '@material-ui/core';
 
class DisgustJournalPage extends Component {
  constructor(props) {
    super(props);}
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
              <DisgustJournalEntry
                username={this.props.username}
                desc="We’re disgusted by things we think are bad, 
                whether it is rotting food or cockroaches in the bathroom. 
                In pre-modern civilizations, this was a great trait because it prevented people 
                from eating poisonous food and doing things that could make them sick."
                what="What disgusted you today? How did that impact your day?"
                unpack="Take a moment to unpack that reaction. Do you feel any other emotions that may lie underneath it?"
                note="Feel free to type anything else here that you would like to note about today."
                />
            </Grid>
          </Grid>
          <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default DisgustJournalPage;