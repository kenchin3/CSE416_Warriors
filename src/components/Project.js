import React from "react";
import Map from "./Map.js";
import Header from "./Header.js";
import Data from "./Data.js";
import Grid from "@mui/material/Grid";
import Ensemble from "./Ensemble.js";
import Accordion from "@mui/material/Accordion";
import { tab } from "@testing-library/user-event/dist/tab.js";

function Project() {
  const [tabValue, setTabValue] = React.useState(0);
  const [stateValue, setStateValue] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const [district, setDistrict] = React.useState(1);;

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
        <Grid container spacing={1} component="span">
          <Grid item xs={6} md={6} component="span">
            <Data
              filter={filter}
              setFilter={setFilter}
              twoZero={twoZero}
              twoTwo={twoTwo}
              random={random}
              setStateValue={setStateValue}
              stateValue={stateValue}
              tabValue={tabValue}
              district={district}
              setDistrict={setDistrict}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <Map stateValue={stateValue} filter={filter} />
          </Grid>
        </Grid>
      ) : (
        <span />
      )}
      {tabValue === 0 &&
        (
          <Ensemble stateValue={stateValue}
            setStateValue={setStateValue} />
        )
      }
    </div>
  );
}

export default Project;
