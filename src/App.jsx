import React, { Component } from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Answers from './answers';
// import laurence from './images/laurence-fishbourne.png';
// import aaron from './images/aaron-eckhardt.png';
// import end from './images/end.jpg';
import correct from './sound/correct.mp3';
import wrong from './sound/wrong.mp3';
import gthang from './sound/gthang.mp3';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      round: 0,
    }
  }

  checkAnswer(clicked) {
    console.log(Answers.answer[4].answer1)
    if (clicked === Answers.answer[this.state.round].correct) {
      this.updateScoreAndChangeRound();
      // return (
      //   <audio src={correct} autoplay></audio>
      // )
      
    } else {
      this.moveToNextRound();
      //return wrong.play();
    }
    if (this.state.round === 5) {
      //end game and declare winner/loser 
      //keeps going even if get wrong answer at last one
         //this.setState(Object.assign({}, this.state, {score: this.state.score + 1}))
      console.log('game over')
    }
  }

  updateScoreAndChangeRound() {
    
    this.setState(Object.assign({}, this.state, {score: this.state.score + 1, round: this.state.round + 1}))
    return (
        <audio src={correct} autoplay></audio>
      )
  }

  moveToNextRound() {
    this.setState(Object.assign({}, this.state, {round: this.state.round + 1}))
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
     {/* <ReactAudioPlayer src={gthang} autoPlay />*/}
             <audio src={correct} autoPlay></audio>

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
          </div>
        </div>
      </div>
    );
  }
}

