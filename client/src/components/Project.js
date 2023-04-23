import React from "react";
import Map from "./Map.js";
import Header from "./Header.js";
import Data from "./Data.js";
import Grid from "@mui/material/Grid";
import Ensemble from "./Ensemble.js";
import "./Project.css";
import axios from "axios";

import { Paper, FormControl, Select, MenuItem } from "@mui/material";

function Project() {
  const [stateData, setStateData] = React.useState();
  const [tabValue, setTabValue] = React.useState(1);
  const [stateValue, setStateValue] = React.useState("");
  const [filter, setFilter] = React.useState("YR22");
  const [district, setDistrict] = React.useState(-1);
  const [districtPlan, setDistrictPlan] = React.useState(0);
  const [districtPlanYear, setDistrictPlanYear] = React.useState(2022);
  const [districtData, setDistrictData] = React.useState();
  const [incumbentData, setIncumbentData] = React.useState();
  const {twoZero, twoTwo, random } = filter;
  

  React.useEffect(() => {
    if (stateValue) {
      axios.get("http://localhost:8080/api/getState", { params: { state: stateValue.toUpperCase() } })
        .then((res) => {
        setStateData(res.data);
        setDistrictData(res.data.districts);
        setIncumbentData(res.data.setIncumbentData);
        console.log(res.data);
       
      });
    }
  }, [stateValue]);

  const handleChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === "YR22" || event.target.value === "YR20") {
      setTabValue(1);
      setDistrictPlan(0);
      if (event.target.value === "YR20") setDistrictPlanYear(2020);
      else setDistrictPlanYear(2022);
    } else {
      setTabValue(0);
      setDistrictPlan(event.target.value);
    }
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
    setDistrict(-1);
  };

  return (
    <div>
      <Header />

      <Grid container spacing={1} component="span">
        <Grid item xs={6} md={6} component="span">
          <div className="userOptions">
            <Paper className="paperP1" elevation={5}>
              <FormControl className="formD" size="small">
                <Select
                  labelId="inputLabel"
                  className="select"
                  displayEmpty
                  value={stateValue}
                  onChange={handleStateChange}
                >
                  <MenuItem className="selectState" value={""}>
                    <em>
                      {" "}
                      <span className="selectState">Select State</span>{" "}
                    </em>
                  </MenuItem>
                  <MenuItem className="selectState" value={"pa"}>
                    <span className="selectState">Pennsylvania</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={"tn"}>
                    <span className="selectState">Tennessee</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={"ok"}>
                    <span className="selectState">Oklahoma</span>
                  </MenuItem>
                </Select>
              </FormControl>
            </Paper>

            <Paper className="paperP1" elevation={5}>
              <FormControl className="formD" size="small">
                <Select
                  labelId="inputLabel"
                  className="select"
                  displayEmpty
                  value={filter}
                  onChange={handleChange}
                >
                  <MenuItem className="selectState" value={"YR22"}>
                    <em>
                      <span className="selectState">Select District Plan</span>
                    </em>
                  </MenuItem>
                  <MenuItem className="selectState" value={"YR20"}>
                    <span className="selectState">2020 District Plan</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={"YR22"}>
                    <span className="selectState">2022 District Plan</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={1}>
                    <span className="selectState">District Plan 1</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={2}>
                    <span className="selectState">District Plan 2</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={3}>
                    <span className="selectState">District Plan 3</span>
                  </MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </div>

          {tabValue === 1 ? (
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
              districtPlanYear={districtPlanYear}
              stateData={stateData}
              incumbentData={incumbentData}
              districtData={districtData}
            />
          ) : (
            <Ensemble
              stateValue={stateValue}
              setStateValue={setStateValue}
              districtPlan={districtPlan}
            />
          )}
        </Grid>
        <Grid item xs={6} md={6} className="mapGrid">
          <Map
            stateValue={stateValue}
            filter={filter}
            districtValue={district}
            stateData={stateData}
            incumbentData={incumbentData}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;
