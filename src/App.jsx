import React, { Component } from 'react';
import './App.css';
import laurence from './images/laurence-fishbourne.png';
import aaron from './images/aaron-eckhardt.png';

let answer = [
  {
    answer1: 'mario lopez', 
    answer2: 'billy boy',
    answer3: 'jeffy',
    answer4: 'stacy',
    correct: 'mario lopez',
    image: laurence,
  },
  {
    answer1: 'zeus', 
    answer2: 'aeuro',
    answer3: 'triton',
    answer4: 'magdalena'
  },
]

let answer1 = 'mario lopez'
let answer2 = 'bill cosby'
let answer3 = 'jeff lawrence'
let answer4 = 'stacy'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      answer: answer[0].correct
    }
  }

  checkAnswer(clicked) {
    console.log( clicked );
    if (clicked === this.state.answer) {
      this.setState(Object.assign({}, this.state, {score: this.state.score + 1}))
    } 
  }

  render() {
    return (
      <div className="App">
        <div className="image-holder">
          <img className="img" src={answer[0].image} alt=""/>
          <div className="buttons-holder">
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[0].answer1)}>
              {answer[0].answer1}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[0].answer2)}>
              {answer[0].answer2}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[0].answer3)}>
              {answer[0].answer3}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[0].answer4)}>
              {answer[0].answer4}
            </button>
 
            <div className="score-holder">
              <h4 className="score" >SCORE: {this.state.score} </h4> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

