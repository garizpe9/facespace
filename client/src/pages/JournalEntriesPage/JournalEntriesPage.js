import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Paper, Grid } from '@material-ui/core';
import Header from "../../component/HeaderComponent/Header";
import JournalList from '../../component/journal/JournalList';
import BottomAppBar from "../../component/nav/BottomAppBar";
import MediaCard from '../../component/media/MediaCard';


class JournalEntriesPage extends Component{
  constructor(props) {
    super(props);}
  render() {
    return (
      <div>
        <Router>
            <Header/>
              <Paper>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <MediaCard/>
                  </Grid>
                  <Grid item xs={8}>
                    <JournalList username={this.props.username}/>
                  </Grid>
                </Grid>
              </Paper>
            <BottomAppBar/>
        </Router>
      </div>
    );
  }


}
export default JournalEntriesPage;
