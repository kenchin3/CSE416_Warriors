import React from "react";
import Map from "./Map.js";
import Header from "./Header.js";
import Data from "./Data.js";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";

function Project() {
  const [tabValue, setTabValue] = React.useState(0);
  const [stateValue, setStateValue] = React.useState("");
  const [filter, setFilter] = React.useState({
    twoZero: false,
    twoTwo: true,
    random: false,
  });

  const { twoZero, twoTwo, random } = filter;

  return (
    <div>
      <Header
        tabValue={tabValue}
        setTabValue={setTabValue}
        stateValue={stateValue}
        setStateValue={setStateValue}
      />
      {tabValue === 1 ? (
        <Grid container spacing={1}>
          <Grid item xs={6} md={6}>
            <Data
              filter={filter}
              setFilter={setFilter}
              twoZero={twoZero}
              twoTwo={twoTwo}
              random={random}
              stateValue={stateValue}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <Map stateValue={stateValue} filter={filter} />
          </Grid>
        </Grid>
      ) : (
        <span />
      )}
    </div>
  );
}

export default Project;
