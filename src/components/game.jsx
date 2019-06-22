import React, { Component } from "react";

class Game extends Component {
  state = { started: false, time: 900 };

  formatTime = (time) => {
    let seconds = ("0" + time % 60).slice(-2);
    let minutes = Math.floor(time / 60);
    minutes = seconds === 59 ? minutes - 1 : minutes;
    return minutes + ":" + seconds;
  };

  timer = () => {
    if (this.state.started) {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      } else {
        this.setState({ started: false, input: "" });
        clearInterval(this.timer);
        console.log("time's up"); // placeholder check
      };
    };
  };

  startGame = () => {
    this.setState({ started: true })
    this.startTime = new Date().getTime();
    this.timer = setInterval(this.timer, 1000); // 1-second intervals
  };

  stopGame = () => {
    this.setState({ started: false });
    clearInterval(this.timer);
  };

  gameCompleted = () => {
    if (this.props.correct.length === this.props.countries.length) {
      this.setState({ started: false });
      this.endTime = new Date().getTime();
      this.timeTaken = (this.startTime - this.endTime) / 1000; // expressed in seconds
    }
  }

  render() {
    return (
      <div className="game">
        <div>
          <button className="btn btn-info" disabled={this.state.started} onClick={this.startGame}>Start Game</button>
          <button className="btn btn-info" disabled={!this.state.started} onClick={this.stopGame}>Stop Game</button>
        </div>
        <div>Time: {this.formatTime(this.state.time)}</div>
        <div>{this.props.correct.length}/{this.props.countries.length} guessed</div>
        <label>Enter country's name</label>
        <input disabled={!this.state.started} type="text" onChange={this.props.handleChange} onKeyDown={this.props.handleSubmit} value={this.props.input} />
        {this.gameCompleted()}
      </div>
    );
  };
};

export default Game;
