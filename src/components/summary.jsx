import React, { Component } from "react";

// TODO:
// 1) clearInterval doesn't work
// 2) renderSummary doesn't work

class Summary extends Component {
  gameCompleted = () => {
    let timeTaken = 900 - this.props.time;
    const averageTime = 500;
    let averageTimeRanking = this.timeTaken < averageTime ? "above" : "below";

    return (
      <div className="completed summary">
        <h1>Congratulations!</h1>
        <p>You took {this.props.formatTime(timeTaken)} seconds.</p>
        <p>The average time taken is {this.props.formatTime(averageTime)}. That means you're {averageTimeRanking} average!</p>
        <button className="btn btn-info" onClick={this.props.resetGame}>Reset Game</button>
      </div>
    );
  };

  renderSummary = () => {
    let score = this.props.correct.length / this.props.countries.length * 100;
    const averageScore = 106;
    let averageScoreRanking = this.props.correct.length > averageScore ? "above" : "below";

    return (
      <div className="summary">
        <h1>Summary</h1>
        <p>You scored {this.props.correct.length} / {this.props.countries.length} ({score.toFixed(1)}%)</p>
        <p>The average score is {averageScore}. That means you're {averageScoreRanking} average!</p>
        <button className="btn btn-info" onClick={this.props.resetGame}>Reset Game</button>
      </div>
    );
  };

  render() {
    if (this.props.correct.length === this.props.countries.length) {
      return this.gameCompleted();
    } else if (this.props.time <= 0) {
      return this.renderSummary();
    } else {
      return null
    };
  };
};

export default Summary;
