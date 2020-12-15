import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  };
  state={
    quote: "",
    id: ""
  };

  logout(event) {
    event.preventDefault();
    console.log('logging out');
    axios
      .post('/api/user/logout')
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((error) => {
      });
  };

   render() {
    const loggedIn = this.props.loggedIn;

    return (
      <div>
        {loggedIn ? (
          <section className='navbar-section'>
            <Button color="primary">
            <Link
              to='/'
              onClick={this.logout}
            >
              <span className='text-secondary'>Logout</span>
            </Link>
            </Button>
          </section>
          ) : (
          <section className='navbar-section'> 
            <Button color="primary"
              href="/login">
                Login
            </Button>
            <br/>
            <Button color="primary"
              href="/signup">
                Register
            </Button>
          </section>
        )}
      </div>
    );
  }
}

export default Navbar;
