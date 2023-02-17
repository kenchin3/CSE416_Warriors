import React, { Component } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./Header.css";

function Header({ tabValue, setTabValue, stateValue, setStateValue }) {
  // const [tabValue, setTabValue] = React.useState(0);
  // const [state, setState] = React.useState("");

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
    console.log(event.target.value);
  };

  const styles = {
    selectedTab: {
      color: "",
    },
    nonSelectedTab: {
      color: "#D3D3D3",
    },
  };

  return (
    <div>
      <Box className="headerContent" bgcolor="#232023">
        <span className="mapSelection">
          <FormControl className="form">
            <InputLabel className="inputLabel">State</InputLabel>
            <Select
              className="select"
              value={stateValue}
              label="States"
              onChange={handleStateChange}
            >
              <MenuItem value={"pa"}>Pennsylvania</MenuItem>
              <MenuItem value={"tn"}>Tennessee</MenuItem>
              <MenuItem value={"ok"}>Oklahoma</MenuItem>
            </Select>
          </FormControl>
        </span>

        <Tabs
          className="Tabs"
          value={tabValue}
          onChange={handleTabChange}
          centered
        >
          <Tab
            label="Cumulative Data"
            style={tabValue === 0 ? styles.selectedTab : styles.nonSelectedTab}
          />
          <Tab
            label="States"
            style={tabValue === 1 ? styles.selectedTab : styles.nonSelectedTab}
          />
          <Tab
            label="Box and Whisker"
            style={tabValue === 2 ? styles.selectedTab : styles.nonSelectedTab}
          />
        </Tabs>
      </Box>

      {tabValue === 0 && <div> data </div>}
      {tabValue === 1 && <div> States </div>}
      {tabValue === 2 && <div> Box and Whisker </div>}
    </div>
  );
}

export default Header;
