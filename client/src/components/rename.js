import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.userLook = this.userLook.bind(this);
  };
  userLook() { 
    this.props.updateUser({
        username: this.username,
     });
    };
    
  render() {
    var user = this.props.username  
    console.log(user)
     
    
    return (<div></div>)
  }
  

}
export default User;