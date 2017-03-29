import React, { Component } from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Answers from './answers';
import Countdown from './Countdown';
import vid from './sound/lights.mp4';

import correct from './sound/correct.mp3';
import wrong from './sound/wrong.mp3';
import fame from './sound/fame.mp3';
import bg from './images/bg.jpg';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      round: 0,
      playAgain: false,
    }
  }

  // startTimer() {
  //   this.setState({outOfTime: false})

  //   setTimeout(() => {
  //     this.setState({outOfTime: true})
  //   }, 4000)
  // }

  playAgain() {
    return (
      <div><button>{this.state.playAgain}</button></div>
    )
  }

  checkAnswer(clicked) {
    if (clicked === Answers.answer[this.state.round].correct) {
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
          <img className="img" src={Answers.answer[this.state.round].image} alt=""/>
          <div className="buttons-holder">
            <button className="btn" onClick={ this.checkAnswer.bind(this, Answers.answer[this.state.round].answer1)}>
              {Answers.answer[this.state.round].answer1}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, Answers.answer[this.state.round].answer2)}>
              {Answers.answer[this.state.round].answer2}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, Answers.answer[this.state.round].answer3)}>
              {Answers.answer[this.state.round].answer3}
            </button>
            <button className="btn" onClick={ this.checkAnswer.bind(this, Answers.answer[this.state.round].answer4)}>
              {Answers.answer[this.state.round].answer4}
            </button>
            <div className="score-holder">
              <h4 className="score" >SCORE: {this.state.score} </h4> 
            </div>
             {/*   <Countdown />*/}
            {this.state.playAgain && <Countdown />}
            {/*<ReactAudioPlayer className="audio" src={fame} autoPlay />*/}
          </div>
        </div>
      </div>
    );
  }
}

