import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginForm from './pages/Passport/login';
import Navbar from './components/navbar';
import Register from './pages/Passport/register'
import BottomAppBar from '../src/component/nav/BottomAppBar'
import FaceDetectionPage from './pages/FaceDetectionPage/FaceDetectionPage';
import HomeLandingPage from "./pages/LandingPage"
import CreateJournalPage from './pages/CreateJournalPage/CreateJournalPage';
import JournalEntries from './component/journal/JournalEntry'
import Home from './pages/Passport/home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios
      .get('/api/user/')
      .then((response) => {
        console.log('Get user response: ');
        console.log(response.data);
        if (response.data.user) {
          console.log(
            'Get User: There is a user saved in the server session: '
          );

          this.setState({
            loggedIn: true,
            username: response.data.user.username,
          });
        } else {
          console.log('Get user: no user');
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
      <Router>
      <div className='App'>
        <BottomAppBar/>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Welcome, {this.state.username}!</p>}
        {/* Routes to different components */}
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
        <HomeLandingPage />
        </Route>
        <Route exact path={"/createjournal"}>
        <CreateJournalPage />
        </Route>
        <Route exact path={"/journalentries"}>
          <JournalEntries />
        </Route>
        <Route exact path={"/createjournal"}>
          <CreateJournalPage />
            </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
