import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../component/HeaderComponent/Header";
import JournalList from '../../component/journal/JournalList'
import BottomAppBar from "../../component/nav/BottomAppBar";


function JournalEntriesPage(){

    return (
      <div>
        <Router>
            <Header/>
            <JournalList/>
            <BottomAppBar/>
        </Router>
      </div>
    );
  }



export default JournalEntriesPage;
