import React, { Component } from 'react';
import axios from 'axios';
import { 
    Button
} from '@material-ui/core';

class Pagebar extends Component {
  constructor() {
    super();
    };
   render() {
  
    return (
      <div>
          <section>
          <Button color="primary"
                    href="/facerec">
                        Face Space: Mood Reader
                </Button>
                <br/>
                <Button color="primary"
                    href="/journalentries">
                        Previous Entries
                </Button>
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
