import React, { Component } from "react";
import { ColumnChart } from "react-chartkick";
import "chart.js";

import stats from "./data/stats";

class Summary extends Component {
  gameCompleted = () => {
    let timeTaken = 900 - this.props.time;
    const averageTime = 500;
    let averageTimeRanking = this.timeTaken < averageTime ? "above" : "below";

    return (
      <div className="completed summary">
        <h2>Congratulations!</h2>
        <p>You took <span className="result">{this.props.formatTime(timeTaken)} seconds</span>.</p>
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
        <h2>Summary</h2>
        <p>You scored <span className="result">{this.props.correct.length} / {this.props.countries.length} = {score.toFixed(0)}%</span></p>
        <p>The average score is {averageScore}. That means you're {averageScoreRanking} average!</p>
        {this.renderStats()}
        <button className="btn btn-info" onClick={this.props.resetGame}>Reset Game</button>
      </div>
    );
  };

  renderStats = () => {
    // placeholder data
    var userData = [["europe", 10], ["asia", 16], ["north america", 28], ["south america", 80], ["oceania", 40], ["africa", 10]];

    var data = [
      { name: "Your Score", data: userData },
      { name: "Average", data: stats }
    ];

    return (
      <ColumnChart id="chart" stacked={false} data={data} max={100} />
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
