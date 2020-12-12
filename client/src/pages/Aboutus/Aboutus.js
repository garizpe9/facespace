import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BottomAppBar from "../../component/nav/BottomAppBar";
import Header from "../../component/HeaderComponent/Header";
import { Grid } from '@material-ui/core';
import Aboutus from "../../component/Aboutus/Aboutus";
 
class Aboutuspage extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
            <Grid item xs={12}>
                <Aboutus/>
            </Grid>
          
          <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default Aboutuspage;