import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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


// const optionsA = {
//   method: 'GET',
//   url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
//   params: {t: 'wisdom, compassion, courage, gratitude, happiness, hope, kindness, motivational, positivity', maxR: '1', size: 'medium'},
//   headers: {
//     'x-rapidapi-key': 'd2c174c9b0msh4dccfca97fa9159p1945e7jsna80b5e5ecc3f',
//     'x-rapidapi-host': 'healthruwords.p.rapidapi.com'
//   }
// };

// axios.request(optionsA)
// .then(response =>  this.setState({quote: response.data[0].media, id: response.data[0].id}))
// .catch(err => console.log(err));
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
                <Link
                  to='#'
                  className='btn btn-link text-secondary'
                  onClick={this.logout}
                >
                  <span className='text-secondary'>logout</span>
                </Link>
              </section>
            ) : (
              <section className='navbar-section'>
                <Link to='/home' className='btn btn-link text-secondary'>
                  <span className='text-secondary'>home</span>
                </Link>
                <Link to='/login' className='btn btn-link text-secondary'>
                  <span className='text-secondary'>login</span>
                </Link>
                <Link to='/signup' className='btn btn-link'>
                  <span className='text-secondary'>sign up</span>
                </Link>
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
