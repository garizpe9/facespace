import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    typography: {
        color: 'darkblue',
        textAlign: 'center',
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',
        textAlign: 'center',
    },
    font: {
        textAlign: 'center',
        color: 'darkblue',
    },
});

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
            <Button color="primary">
                <Link to='/facerec'>
                    <span>Face Space: Mood Reader </span>
                </Link>
            </Button>
            <br/>
            <Button color="primary">
                <Link to='/journalentries'>
                    <span>Previous Entries</span>
                </Link>
            </Button>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                    Mood Journals 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Button color="primary">
                        <Link to='/angryjournal'>
                            <span >Anger</span>
                        </Link>
                    </Button>
                    <br/>
                    <Button color="primary">
                        <Link to='/disgustjournal'>
                            <span>Disgust</span>
                        </Link>
                    </Button>   
                    <br/>         
                    <Button color="primary">
                        <Link to='/fearjournal' >
                            <span >Fear</span>
                        </Link>
                    </Button>
                    <br/>
                    <Button color="primary">
                        <Link to='/happyjournal'>
                            <span >Happiness</span>
                        </Link>
                    </Button>  
                    <br/>                  
                    <Button color="primary">
                        <Link to='/neutraljournal'>
                            <span >Neutral</span>
                        </Link>
                    </Button>
                    <br/>                    
                    <Button color="primary">
                        <Link to='/surprisejournal'>
                            <span >Surprised</span>
                        </Link>
                    </Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
  }
}

export default Pagebar;
