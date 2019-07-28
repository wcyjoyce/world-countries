import { VectorMap } from "react-jvectormap"
import React, { PureComponent } from "react";

class Map extends PureComponent {
  render() {
    const regionStyle = {
      initial: { fill: "white" },
      hover: {
        fill: "white",
        "fill-opacity": 1
      },
      selected: {
        fill: "pink",
        "fill-opacity": 1
      }
    };

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
