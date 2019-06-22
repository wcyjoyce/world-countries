import React, { Component } from "react";

import Game from "./game.jsx";
import countries from "./countries.js";

class App extends Component {
  state = { correct: [], countries: countries, input: "" };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    };
  };

  render() {
    return (
      <div className="app">
        <h1>World Countries</h1>
        <Game countries={countries} handleChange={this.handleChange} handleSubmit={this.handleSubmit} correct={this.state.correct} input={this.state.input} />
      </div>
    );
  };
};

export default App;
