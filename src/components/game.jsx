import React, { Component } from "react";

// TODO:
// 1) setInterval speeds up when resuming game
// 2) render summary

class Game extends Component {
  state = { started: false };

  renderButton = () => {
    if (this.props.time > 0) {
      if (this.state.started) {
        return (
          <div>
            <button className="btn btn-info" onClick={this.stopGame}>Pause Game</button>
            <button className="btn btn-info" onClick={this.props.giveUp}>Give Up</button>
            <div className="input">
              <label>Enter country's name</label>
              <input disabled={!this.state.started} type="text" onChange={this.props.handleChange} onKeyDown={this.props.handleSubmit} value={this.props.input} />
              <span className="message">{this.props.message}</span>
              <div>{this.props.correct.length}/{this.props.countries.length} guessed</div>
            </div>
          </div>
        );
      } else {
        if (this.props.time < 5) {
          return (
            <div>
              <button className="btn btn-info" onClick={this.startGame}>Resume Game</button>
              <button className="btn btn-info" onClick={this.props.giveUp}>Give Up</button>
            </div>
          );
        } else {
          return (
            <div>
              <button className="btn btn-info" onClick={this.startGame}>Start Game</button>
            </div>
          );
        };
      };
    } else {
      return (
        <div>
          <button className="btn btn-danger" onClick={this.props.resetGame}>Reset Game</button>
        </div>
      );
    };
  };

  formatTime = (time) => {
    let seconds = ("0" + time % 60).slice(-2);
    let minutes = Math.floor(time / 60);
    minutes = seconds === 59 ? minutes - 1 : minutes;
    return minutes + ":" + seconds;
  };

  timer = () => {
    if (this.state.started) {
      if (this.props.time > 0) {
        this.props.updateTime();
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
    setInterval(this.timer, 1000); // 1-second intervals
  };

  stopGame = () => {
    this.setState({ started: false });
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="game">
        <div>Time: {this.formatTime(this.props.time)}</div>
        <div className="buttons">{this.renderButton()}</div>
      </div>
    );
  };
};

export default Game;
