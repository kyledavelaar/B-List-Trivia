import React, { Component } from 'react';
import './App.css';


export default class Countdown extends Component {
   constructor() {
    super();
    this.state = {
      secs: 4,
    }
  }

  countdown() {
    this.setState({secs: this.state.secs - 1})
    console.log(this);
  }

  render() {
    return (
      <div>
        {setInterval(() => { this.setState({secs: this.state.secs - 1}) }, 1000)}
        {/*{this.state.secs}*/}
      </div>
    );
  }
}

