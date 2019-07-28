import React, { Component } from "react";

import Game from "./game.jsx";
import List from "./list.jsx";
import Map from "./map.jsx";
import countries from "./data/countries.js";

class App extends Component {
  state = { correct: [], countries: countries, input: "", time: 900, message: "" }; // 15 minutes

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    if (event.key === "Enter") {
      if (this.state.countries.find(country => country["name"] === this.state.input || country["other"] === this.state.input)) {
        if (!this.state.correct.includes(this.state.input)) {
          var answer = this.state.countries.filter(country => country["name"] === this.state.input || country["other"] === this.state.input);
          this.state.correct.push(answer[0]["name"]);
          this.setState({ message: "" });
        } else {
          this.setState({ message: `Already guessed! (${this.state.input})` })
        };
      } else {
        this.setState({ message: "Incorrect answer" });
      };
      this.setState({ input: "" });
    };
  };

  updateTime = () => {
    this.setState({ time: this.state.time - 1 });
  };

  resetGame = () => {
    this.setState({ correct: [], time: 900 });
    clearInterval(this.timer);
  };

  giveUp = () => {
    this.setState({ started: false, time: 0 });
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="app">
        <h1>World Countries</h1>
        <Game
          countries={this.state.countries}
          correct={this.state.correct}
          input={this.state.input}
          message={this.state.message}
          time={this.state.time}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          updateTime={this.updateTime}
          giveUp={this.giveUp}
          resetGame={this.resetGame}
        />
        <Map />
        <List
          countries={this.state.countries}
          correct={this.state.correct}
          time={this.state.time}
        />
      </div>
    );
  };
};

export default App;
