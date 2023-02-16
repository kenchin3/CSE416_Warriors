import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Header.css";
import Map from "./Map.js";

function Header({tabValue, setTabValue}) {
  // const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
    // props.state = tabValue;
  };

  const styles = {
    selectedTab: {
      color: "#D3D3D3",
    },
    nonSelectedTab: {
      color: "",
    },
  };

  return (
    <div className="content">
      <Box className="headerContent" bgcolor="#232023">
        <Tabs
          className="tabs"
          value={tabValue}
          onChange={handleTabChange}
          centered
        >
          <Tab
            label="Cumulative Data"
            style={tabValue ? styles.selectedTab : styles.nonSelectedTab}
          />
          <Tab
            label="Map"
            style={!tabValue ? styles.selectedTab : styles.nonSelectedTab}
          />
        </Tabs>
      </Box>

      <div className="bodyContent">
        {tabValue === 0 && <div className="map"> data </div>}
        {tabValue === 1 && (
          <div>
            <Map />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
