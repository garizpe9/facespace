import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from './pages/Passport/login';
import Register from './pages/Passport/register'
import FaceDetectionPage from './pages/FaceDetectionPage/FaceDetectionPage';
import CreateJournalPage from './pages/CreateJournalPage/CreateJournalPage';
import JournalEntries from './pages/JournalEntriesPage/JournalEntriesPage'
import Home from './pages/Passport/home';
import LandingPage from './component/LandingPage';
import BottomAppBar from './component/nav/BottomAppBar';
import SurpriseJournalPage from './pages/SurpriseJournalPage/SurpriseJournalPage'
import DisgustJournalPage from './pages/DisgustJournalPage/DisgustJournalPage.js'
import FearJournalPage from './pages/FearJournalPage/FearJournalPage.js'
import SadJournalPage from './pages/SadJournalPage/SadJournalPage.js'
import AngryJournalPage from './pages/AngryJournalPage/AngryJournalPage.js'
import HappyJournalPage from './pages/HappyJournalPage/HappyJournalPage.js'
import NeutralJournalPage from './pages/NeutralJournalPage/NeutralJournalPage.js'
import Aboutuspage from './pages/Aboutus/Aboutus';
import FreestyleJournalEntries from './component/journal/FreestyleJournalEntries';
import EmotionJournalEntries from './component/journal/EmotionJournalEntries';
import Navbar from './components/navbar';
import ReactLoading from "react-loading";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: null,
      done: undefined
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 1200);
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios
      .get('/api/user/')
      .then((response) => {

        if (response.data.user) {
          console.log(
            'Get User: There is a user saved in the server session: '
          );

          this.setState({
            loggedIn: true,
            username: response.data.user.username,
          });
        } else {
          this.setState({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((err) => console.log('err', err));
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
           <ReactLoading type={"bars"} color={"pink"} id="loading" />
      
        ) :(
      
      <Router>
        {this.state.loggedIn ? (
        <div className='App'>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route exact path='/' component={Home} />
        <Route
          path='/login'
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path='/signup' render={() => <Register />} />
        <Switch>
        <Route exact path={"/facerec"}>
        <FaceDetectionPage />
        </Route>
        <Route exact path={["/home"]}>
        <LandingPage />
        </Route>
        <Route exact path={"/createjournal"}>
        <CreateJournalPage />
        </Route>
        <Route exact path={"/journalentries"}>
          <JournalEntries />
        </Route>
        <Route exact path={"/surprisejournal"}>
          <SurpriseJournalPage />
        </Route>
        <Route exact path={"/disgustjournal"}>
          <DisgustJournalPage />
        </Route>
        <Route exact path={"/fearjournal"}>
          <FearJournalPage />
        </Route>
        <Route exact path={"/sadjournal"}>
          <SadJournalPage />
        </Route>
        <Route exact path={"/angryjournal"}>
          <AngryJournalPage />
        </Route>
        <Route exact path={"/happyjournal"}>
          <HappyJournalPage />
        </Route>
        <Route exact path={"/neutraljournal"}>
          <NeutralJournalPage />
        </Route>
        <Route exact path={"/aboutus"}>
          <Aboutuspage />
        </Route>
        <Route exact path={"/entries/:id"}>
          <FreestyleJournalEntries />
        </Route>
        <Route exact path={"/emo/:id"}>
          <EmotionJournalEntries />
        </Route>
        </Switch>
        </div>
        )
        :(
        <div className='App'>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

        <Route exact path='/' component={Home} />
        <Route
          exact path='/login' render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Switch>
        <Route exact path='/signup' render={() => <Register />} />
        <Route exact path={"/aboutus"}>
          <Aboutuspage />
        </Route>
        <Route exact path = {"/*"}>
          <Home/>         
        </Route>
        <Route exact path={["/home"]}>
        <LandingPage />
        </Route>
        </Switch>
        
      </div>
      )
      }
      <BottomAppBar/>
      </Router>)}
      </div>
    );
  }
}

export default App;