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
    answer4: 'magdalena',
    correct: 'zeus',
    image: aaron,
  },
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
    answer4: 'magdalena',
    correct: 'zeus',
    image: aaron,
  },
]


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      round: 0,
    }
  }

  checkAnswer(clicked) {
    console.log( clicked );
    if (clicked === answer[this.state.round].correct) {
      this.updateScoreAndChangeRound();
    } else {
      this.moveToNextRound();
    }
  }

  updateScoreAndChangeRound() {
    //this.setState( {score: this.state.score + 1, round: this.state.round + 1})
    this.setState(Object.assign({}, this.state, {score: this.state.score + 1, round: this.state.round + 1}))
  }

  moveToNextRound() {
    this.setState(Object.assign({}, this.state, {round: this.state.round + 1}))
  }


  render() {
    return (
      <div className="App">
        <div className="image-holder">
          <img className="img" src={answer[this.state.round].image} alt=""/>
          <div className="buttons-holder">
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[this.state.round].answer1)}>
              {answer[this.state.round].answer1}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[this.state.round].answer2)}>
              {answer[this.state.round].answer2}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[this.state.round].answer3)}>
              {answer[this.state.round].answer3}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, answer[this.state.round].answer4)}>
              {answer[this.state.round].answer4}
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

