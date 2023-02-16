import React, { Component } from "react";
import Map from "./Map.js";
import Header from "./Header.js";

function Project() {
  const [tabValue, setTabValue] = React.useState(0);
  // console.log(tabValue)
 
  return (
    <div>
      <Header tabValue={tabValue} setTabValue={setTabValue}/>
      <Map tabValue={tabValue} setTabValue={setTabValue}/>
    </div>
  );
  
}

export default Project;
