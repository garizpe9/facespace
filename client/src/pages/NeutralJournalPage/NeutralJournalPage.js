import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NeutralJournalEntry from "../../component/journal/NeutralJournalEntry";
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaCard from "../../component/media/MediaCard";
import PlayerApp from '../../component/PlayerComponent/Player';
import Header from "../../component/HeaderComponent/Header";
import { Grid } from '@material-ui/core';
 
class NeutralJournalPage extends Component {
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
              <NeutralJournalEntry
              username={this.props.username}
              desc="Although neutral feelings do not have a valence—positive or negative—
              some say that neutral feelings can be counted as positive feelings,
              since they are characterized by the absence of pain and suffering."
              what="What are you feeling neutral about today? Did you feel any other intense emotions throughout the day?"
              unpack="Take a moment to unpack that feeling. Are there any positives or negatives to it?"
              note="Feel free to type anything else here that you would like to note about today."/>
            </Grid>
          </Grid>
          <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default NeutralJournalPage;