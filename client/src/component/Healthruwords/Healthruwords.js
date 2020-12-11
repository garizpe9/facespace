import React, {Component} from 'react';
import axios from 'axios';
import "./Healthruwords.css"

class Heal extends Component {
   
    state={
      quote: "",
      id: ""
    };
      componentDidMount() {
        this.getQuote();
      }

      getQuote = () =>{
        const optionsA = {
            method: 'GET',
            url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
            params: {t: 'wisdom, compassion, courage, gratitude, happiness, hope, kindness, motivational, positivity', maxR: '1', size: 'medium'},
            headers: {
            'x-rapidapi-key': 'd2c174c9b0msh4dccfca97fa9159p1945e7jsna80b5e5ecc3f',
            'x-rapidapi-host': 'healthruwords.p.rapidapi.com'
            }
        };
        
        axios.request(optionsA)
        .then(response =>  this.setState({quote: response.data[0].media, id: response.data[0].id}))
        .catch(err => console.log(err));
    }
    render() {
  return(
      <div>
         <img src={this.state.quote} alt={this.state.id}></img>
      </div>
  )
    }

}

export default Heal;