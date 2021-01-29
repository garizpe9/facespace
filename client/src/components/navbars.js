import React, { Component } from 'react';
import { Button } from '@material-ui/core';



class Navbar extends Component {
  constructor(props) {
    super(props);

  };

   render() {

    return (
      <div>
        

            <Button color="primary" href='/aboutus'>
                <span className='text-secondary'>About Us </span>
            </Button>
            <br/>
            <Button color="primary" href='/'>
                <span className='text-secondary'>Home </span>
            
            </Button>
         
        
      </div>
    );
  }
}

export default Navbar;
