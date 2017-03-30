import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import Answers from './answers';
import Countdown from './Countdown';
import vid from './sound/lights.mp4';

import correct from './sound/correct.mp3';
import wrong from './sound/wrong.mp3';
import fame from './sound/fame.mp3';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      round: 0,
      game: 1,
      answers: Answers.answer
    }
  }

  checkAnswer(clicked) {
    if (clicked === this.state.answers[this.state.round].correct) {
      this.updateScoreAndChangeRound();
    } else {
      this.moveToNextRound();
    }
    if (this.state.round === 5) {
      this.setState({playAgain: !this.state.playAgain})
      console.log('finished')
    }
  }

  updateScoreAndChangeRound() {
    this.setState(Object.assign({}, this.state, {score: this.state.score + 1, round: this.state.round + 1}));
    let correct = document.getElementById("correct");
    correct.currentTime = 0.5;
    correct.play();
  }

  moveToNextRound() {
    this.setState(Object.assign({}, this.state, {round: this.state.round + 1}));
    let wrong = document.getElementById("wrong");
    wrong.currentTime = 0.5;
    wrong.play();
  }


  newGame() {
    axios.get('http://localhost:4000')
      .then(response => {
      if (this.state.game === 1) {
        this.setState( Object.assign({}, this.state, {game: 2, round: 0, score: 0, answers: response.data.slice(0,6)}) )
        console.log('GAME 2', this.state.answers )
      } else if (this.state.game === 2) {
        this.setState( Object.assign({}, this.state, {game: 3, round: 0, score: 0, answers: response.data.slice(6,12)}) )
        console.log('GAME 3', this.state.answers )
      }
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="vid-wrapper">
          <video loop muted autoPlay className="vid">
            <source src={vid} />
          </video>
        </div>
        <audio id="correct" src={correct}></audio>
        <audio id="wrong" src={wrong}></audio>
    
        <div className="image-holder">
          <img className="img" src={this.state.answers[this.state.round].image} alt=""/>
          <div className="buttons-holder">
            <button className="btn" onClick={ this.checkAnswer.bind(this, this.state.answers[this.state.round].answer1)}>
              {this.state.answers[this.state.round].answer1}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, this.state.answers[this.state.round].answer2)}>
              {this.state.answers[this.state.round].answer2}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, this.state.answers[this.state.round].answer3)}>
              {this.state.answers[this.state.round].answer3}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, this.state.answers[this.state.round].answer4)}>
              {this.state.answers[this.state.round].answer4}
            </button>

            <div className="score-holder">
              <h4 className="score" >SCORE: {this.state.score} </h4> 
            </div>

            <button className="newGame" onClick={ this.newGame.bind(this) } >New Game</button>
            <div>
              <ReactAudioPlayer className="audio" src={fame} autoPlay />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

