import React, { Component } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { withStyles } from "@material-ui/core";
import "./Header.css";
import Map from "./Map.js";

function Header({tabValue, setTabValue}) {
  // const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
    // props.state = tabValue;
  };

  const CustomHeaderTab = withStyles({
    root: {
      color: "white",
    },
  })(Tab);

  return (
    <div>
      <Box className="HeaderContent" bgcolor="#232023">
        <Tabs
          className="Tabs"
          value={tabValue}
          onChange={handleTabChange}
          centered
        >
          <CustomHeaderTab label="Cumulative Data" />
          <CustomHeaderTab label="Pennsylvania" />
          <CustomHeaderTab label="State2" />
          <CustomHeaderTab label="State3" />
        </Tabs>
      </Box>

      {tabValue === 0 && <div> data </div>}
      {tabValue === 1 && <div> State1 </div>}
      {tabValue === 2 && <div> State2 </div>}
      {tabValue === 3 && <div> State3 </div>}
    </div>
  );
}

export default Header;
