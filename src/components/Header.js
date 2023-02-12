import React, { Component } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Header.css";
import { ClassNames } from "@emotion/react";

function Header() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
  };

  return (
    <div>
      <Box className="HeaderContent">
        <Tabs
          TabIndicatorProps={{
            style: { color: "#000000", background: "#000000" },
          }}
          className="Tabs"
          value={tabValue}
          onChange={handleTabChange}
          centered
        >
          <Tab
            className={{ root: ClassNames.tabsRoot }}
            label="Cumulative Data"
          />
          <Tab label="State1" />
          <Tab label="State2" />
          <Tab label="State3" />
        </Tabs>
      </Box>

      {tabValue === 0 && <div> State1 </div>}
      {tabValue === 1 && <div> State1 </div>}
      {tabValue === 2 && <div> State2 </div>}
      {tabValue === 3 && <div> State3 </div>}
    </div>
  );
}

export default Header;
