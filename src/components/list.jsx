import React, { Component } from "react";

class List extends Component {
  render() {


    return (
      <div className="list">


        {this.props.correct.map((country, index) => {
          return <li key={index}>{country}</li>
        })}
      </div>
    );
  };
};

export default List;
