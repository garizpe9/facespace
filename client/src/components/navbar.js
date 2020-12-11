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

  componentDidMount() {
    this.getQuote();
  }
  getQuote = () =>{
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/auto-complete',
    params: {term: 'kiss the', locale: 'en-US'},
    headers: {
      'x-rapidapi-key': 'd2c174c9b0msh4dccfca97fa9159p1945e7jsna80b5e5ecc3f',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  }

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
        <header className='navbar App-header' id='nav-container'>
          <div className='col-4'>
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
                <Button>
                <Link to='/signup' className='btn btn-link'>
                  <span className='text-secondary'>Register </span>
                </Link>
                </Button>
              </section>
            )}
          </div>
          <div className='col-4 col-mr-auto'>
            <div id='top-filler'></div>
           
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
