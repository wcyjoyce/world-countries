import React, { Component } from "react";

import Game from "./game.jsx";
import List from "./list.jsx";
import countries from "./countries.js";

class App extends Component {
  state = { correct: [], countries: countries, input: "" };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    if (event.key === "Enter") {
      if (this.state.countries.find(country => country["name"] === this.state.input || country["other"] === this.state.input)) {
        if (!this.state.correct.includes(this.state.input)) {
          this.state.correct.push(this.state.input);
        };
      };
      this.setState({ input: "" });
    };
  };

  render() {
    return (
      <div className="app">
        <h1>World Countries</h1>
        <Game countries={countries} handleChange={this.handleChange} handleSubmit={this.handleSubmit} correct={this.state.correct} input={this.state.input} />
        <List countries={countries} correct={this.state.correct} />
      </div>
    );
  };
};

export default App;
