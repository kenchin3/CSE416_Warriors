import React, { Component } from "react";
import Map from "./Map.js";
import Header from "./Header.js";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Map></Map>
      </div>
    );
  }
}

export default Project;
