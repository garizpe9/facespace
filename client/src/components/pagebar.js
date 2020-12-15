import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
    Button, Radio
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Pagebar extends Component {
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
    axios
      .post('/api/user/logout')
      .then((response) => {
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
          <section>
          <Button color="primary"
                    href="/facerec">
                        Face Space: Mood Reader
                </Button>
                <br/>
                <Radio color="primary"
                    href="/journalentries">
                        Previous Entries
                </Radio>
                <br/>
                <Button color="primary"
                    href="/angryjournal">
                        Anger
                </Button>
                <br/>
                <Button color="primary"
                    href='/disgustjournal'>
                        Disgust
                </Button>   
                <br/>         
                <Button color="primary"
                    href="/fearjournal">
                        Fear
                </Button>
                <br/>
                <Button color="primary"
                    href="/happyjournal">
                        Happiness
                </Button>  
                <br/>                  
                <Button color="primary"
                    href="/neutraljournal">
                        Neutral
                </Button>
                <br/>                    
                <Button color="primary"
                    href="/surprisejournal">
                        Surprised
                </Button>
            </section>
        </div>
    );
  }
}

export default Pagebar;
