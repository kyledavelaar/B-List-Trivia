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
        {/*{setInterval(() => { this.state.secs - 2}, 1000)}*/}
        <p>testing</p>
      </div>
    );
  }
}

