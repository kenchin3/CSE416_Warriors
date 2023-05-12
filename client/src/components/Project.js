import React from "react";
import Map from "./Map/Map.js";
import Header from "./Header.js";
import Data from "./Data/Data.js";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Ensemble from "./Ensemble/Ensemble.js";
import "./Project.css";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { Paper, FormControl, Select, MenuItem } from "@mui/material";

function Project() {
  const [stateData, setStateData] = React.useState();
  const [tabValue, setTabValue] = React.useState(1);
  const [stateValue, setStateValue] = React.useState("");
  const [filter, setFilter] = React.useState("YR22");
  const [district, setDistrict] = React.useState(-1);
  const [districtPlan, setDistrictPlan] = React.useState(0);
  const [districtPlanYear, setDistrictPlanYear] = React.useState(2022);
  const [enacted, setEnacted] = React.useState(false);

  const [incumbentData, setIncumbentData] = React.useState();
  const [districtEnsembleData, setdistrictEnsembleData] = React.useState();
  const [mapData, setMapData] = React.useState();
  const [ensembleData, setEnsembleData] = React.useState();
  const { twoZero, twoTwo, random } = filter;

  const [district22, setDistrict22] = React.useState();
  const [districtR1, setDistrictR1] = React.useState();
  const [districtR2, setDistrictR2] = React.useState();
  const [districtR3, setDistrictR3] = React.useState();

  React.useEffect(() => {
    if (stateValue) {
      axios
        .get("http://localhost:8080/api/getState", {
          params: { state: stateValue.toUpperCase() },
        })
        .then((res) => {
          console.log(res.data);
          setStateData(res.data);
          setEnsembleData(res.data.ensemble);
          setDistrict22(res.data.districtsYR22.data);
          setDistrictR1(res.data.districtsRandom1.data);
          setDistrictR2(res.data.districtsRandom2.data);
          setDistrictR3(res.data.districtsRandom3.data);
          setFilter("YR22");
        });
    }
  }, [stateValue]);

  const handleChange = (event) => {
    setFilter(event.target.value);
    setEnacted(false);
    if (event.target.value === "YR22" || event.target.value === "YR20") {
      setTabValue(1);
      setDistrictPlan(0);
      if (event.target.value === "YR20") setDistrictPlanYear(2020);
      else setDistrictPlanYear(2022);
    } else {
      setTabValue(0);
      // console.log(event.target.value);
      setDistrictPlan(event.target.value);
    }
  };

  const resetPage = () => {
    setTabValue(1);
    setFilter("YR22");
    setStateValue("");
    setEnacted(false);
    setDistrict22(null);
  };

  const resetState = () => {
    setTabValue(1);
    setFilter("YR22");
    setEnacted(false);
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
    setDistrict(-1);
  };

  return (
    <div>
      <Header />

      <Grid container spacing={0} component="span">
        <Grid item xs={6} md={6} component="span">
          <div className="userOptions">
            <Paper className="paperSS" elevation={5}>
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

            <Paper className="paperDP" elevation={5}>
              <FormControl className="formD" size="small">
                <Select
                  labelId="inputLabel"
                  className="select"
                  displayEmpty
                  value={filter}
                  onChange={handleChange}
                  disabled={stateValue == "" ? true : false}
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

            <Paper className="paperP2" elevation={5}>
              <FormControl className="formD" size="small">
                <Button className="resetButton" onClick={resetPage}>
                  Reset Page
                </Button>
              </FormControl>
            </Paper>
            <Paper className="paperP2" elevation={5}>
              <FormControl className="formD" size="small">
                <Button className="resetButton" onClick={resetState}>
                  Reset State
                </Button>
              </FormControl>
            </Paper>
            <Paper className="paperEP" elevation={5}>
              <FormControlLabel
                className="formEP"
                disabled={
                  filter == "" || filter == "YR20" || filter == "YR22"
                    ? true
                    : false
                }
                control={
                  <Switch
                    className="switch"
                    onChange={() => {
                      setEnacted(!enacted);
                    }}
                  />
                }
                label="Enacted Plan"
              />
            </Paper>
          </div>
          <span className="filler"> </span>
          <span>
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
                district22={district22}
                ensembleData={ensembleData}
              />
            ) : (
              <Ensemble
                district={district}
                setDistrict={setDistrict}
                stateValue={stateValue}
                setStateValue={setStateValue}
                districtPlan={districtPlan}
                ensembleData={ensembleData}
                districtsRandom1={districtR1}
                districtsRandom2={districtR2}
                districtsRandom3={districtR3}
              />
            )}
          </span>
        </Grid>
        <Grid item xs={6} md={6} className="mapGrid">
          <Map
            stateValue={stateValue}
            setStateValue={setStateValue}
            filter={filter}
            setFilter={setFilter}
            districtValue={district}
            setDistrict={setDistrict}
            stateData={stateData}
            district22={district22}
            enacted={enacted}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;
