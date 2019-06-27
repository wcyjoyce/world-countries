import React, { Component } from "react";

// TODO:
// 1) setInterval speeds up when resuming game
// 2) render buttons dynamically

class Game extends Component {
  state = { started: false };

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

  // not used yet
  gameCompleted = () => {
    if (this.props.correct.length === this.props.countries.length) {
      this.setState({ started: false });
      this.endTime = new Date().getTime();
      this.timeTaken = (this.startTime - this.endTime) / 1000; // expressed in seconds

      return (
        <div className="completed"><h1>Congratulations!</h1></div>
      );
    };
  };

  // not used yet
  renderSummary = () => {
    if (this.props.time < 0) {
      console.log('ended!')
      return (
        <div className="summary"><h1>Summary</h1></div>
      );
    };
  };

  renderDisplay = () => {
    return this.state.started || this.props.time > 0 ? { display: "none" } : { display: "inline-block" };
  };

  render() {
    return (
      <div className="game">
        <div className="buttons">
          <button className="btn btn-info" disabled={this.state.started} onClick={this.startGame}>Start Game</button>
          <button className="btn btn-info" disabled={!this.state.started} onClick={this.stopGame}>Stop Game</button>
          <button className="btn btn-danger" style={this.renderDisplay()} onClick={this.props.resetGame}>Reset Game</button>
        </div>
        <div>Time: {this.formatTime(this.props.time)}</div>
        <div>{this.props.correct.length}/{this.props.countries.length} guessed</div>
        <div className="input">
          <label>Enter country's name</label>
          <input disabled={!this.state.started} type="text" onChange={this.props.handleChange} onKeyDown={this.props.handleSubmit} value={this.props.input} />
          <span className="message">{this.props.message}</span>
        </div>
      </div>
    );
  };
};

export default Game;
