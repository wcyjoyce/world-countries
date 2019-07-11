import { VectorMap } from "react-jvectormap"
import React, { Component } from "react";

class Map extends Component {
  render() {
    const regionStyle = {
      initial: { fill: "white" },
      hover: {
        fill: "white",
        "fill-opacity": 1
      }
    };

    const countrylist = this.props.countries.map(country => country.name);

    return (
      <div className="map">
        <VectorMap
          map={"world_mill"}
          zoomOnScroll={false}
          regionsSelectable={true}
          containerStyle={{ width: "100%", height: "520px" }}
          regionStyle={regionStyle}
        />
      </div>
    );
  }
}

export default Map;
