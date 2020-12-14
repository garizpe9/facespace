import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';

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
        console.log('Logout error');
      });
  };

   render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ');
    console.log(this.props);

    return (
      <div>
        {loggedIn ? (
          <section className='navbar-section'>
            <Button>
            <Link
              to='/'
              className='btn btn-link text-secondary'
              onClick={this.logout}
            >
              <span className='text-secondary'>Logout</span>
            </Link>
            </Button>
          </section>
          ) : (
          <section className='navbar-section'> 

            <Button>
            <Link to='/login' className='btn btn-link text-secondary'>
              <span className='text-secondary'>Login </span>
            </Link>
            </Button>
            <br/>
            <Button>
            <Link to='/signup' className='btn btn-link'>
              <span className='text-secondary'>Register </span>
            </Link>
            </Button>
          </section>
        )}
      </div>
    );
  }
}

export default Navbar;
