import React, { Component } from "react";
import Map from "./Map.js";
import Header from "./Header.js";

function Project() {
  const [tabValue, setTabValue] = React.useState(0);
  const [stateValue, setStateValue] = React.useState("");
  // console.log(tabValue)

  return (
    <div>
      <Header 
        tabValue={tabValue} 
        setTabValue={setTabValue} 
        stateValue={stateValue}
        setStateValue={setStateValue}
      />
      <Map 
        tabValue={tabValue} 
        setTabValue={setTabValue} 
        stateValue={stateValue}
        setStateValue={setStateValue}
      />
    </div>
  );
}

export default Project;
