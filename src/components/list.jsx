import React, { Component } from "react";

class List extends Component {
  // style = input => {
  //   if (this.props.time > 0) {
  //     if (this.props.correct.includes(input)) {
  //       return { color: "green" };
  //     } else {
  //       return { color: "white" };
  //     };
  //   } else {
  //     if (this.props.correct.includes(input)) {
  //       return { color: "green" };
  //     } else {
  //       return { color: "red" }
  //     }
  //   };
  // };

  style = input => {
    if (this.props.correct.includes(input)) {
      return "green";
    } else {
      return this.props.time > 0 ? "white" : "red"
    };;
  };

  render() {
    const regions = this.props.countries.map(country => country["region"]);
    const regionList = [...new Set(regions)];

    let regionTable = [];
    regionList.forEach(region => {
      const regionName = this.props.countries.filter(country => country["region"] === region);
      regionTable.push({ region, regionName });
    });

    return (
      <div className="list">
        {regionTable.map(region => {
          return (
            <table key={region.region}>
              <thead><tr><th>{region.region} ({region.regionName.length})</th></tr></thead>
              <tbody>
                {region.regionName.map((r,i) => {
                  // return <tr key={i} style={this.style(r["name"])}><td>{r["name"]}</td></tr>
                  return <tr key={i} style={{ color: this.style(r["name"])}}><td>{r["name"]}</td></tr>
                })}
              </tbody>
            </table>
          );
        })}
      </div>
    );
  };
};

export default List;
