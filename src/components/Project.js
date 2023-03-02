import React from "react";
import Map from "./Map.js";
import Header from "./Header.js";
import Data from "./Data.js";
import Grid from "@mui/material/Grid";
import Ensemble from "./Ensemble.js";
import "./Project.css";

import {
  Paper,
  FormControl,
  Select,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function Project() {
  const [tabValue, setTabValue] = React.useState(1);
  const [stateValue, setStateValue] = React.useState("");
  const [filter, setFilter] = React.useState("2022");
  const [district, setDistrict] = React.useState(-1);

  const { twoZero, twoTwo, random } = filter;

  const handleChange = (event) => {
    // //console.log(event.target.value);
    setFilter(event.target.value);
    if (event.target.value == "Random") {
      setTabValue(0);
    } else {
      setTabValue(1);
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
          <div className="leftData">
            <Paper className="paper1" elevation={10}>
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

            <Paper className="paper1" elevation={10}>
              <FormControl className="formD" size="small">
                <Select
                  labelId="inputLabel"
                  className="select"
                  displayEmpty
                  value={filter}
                  onChange={handleChange}
                >
                  <MenuItem className="selectState" value={"2020"}>
                    <span className="selectState">2020</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={"2022"}>
                    <span className="selectState">2022</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={"Random"}>
                    <span className="selectState">District Plan 1</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={"Random"}>
                    <span className="selectState">District Plan 2</span>
                  </MenuItem>
                  <MenuItem className="selectState" value={"Random"}>
                    <span className="selectState">District Plan 3</span>
                  </MenuItem>
                </Select>
              </FormControl>

              {/* <FormControl className="paper2ContentD">
                    <span className="paper2InsideD">
                      <RadioGroup
                        defaultValue="2022"
                        name="radio-buttons-group"
                        row={true}
                        onChange={handleChange}
                        className="radioGroup"
                      >
                        <span className="paper2HeaderD">Select Boundary :</span>
                        <span className="paper2Options">
                          <FormControlLabel
                            className="formControlLabelD"
                            value="2020"
                            control={<Radio />}
                            label="2020"
                          />
                          <FormControlLabel
                            className="formControlLabelD"
                            value="2022"
                            control={<Radio />}
                            label="2022"
                          />
                          <FormControlLabel
                            className="formControlLabelD"
                            value="Random"
                            control={<Radio />}
                            label="Ensemble1"
                          />
                        </span>
                      </RadioGroup>
                    </span>
                  </FormControl> */}
            </Paper>
            <label>***District Plans 1-3 are from the Ensemble</label>

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
              />
            ) : (
              <Ensemble stateValue={stateValue} setStateValue={setStateValue} />
            )}
          </div>
        </Grid>
        <Grid item xs={6} md={6} className="mapGrid">
          <Map
            stateValue={stateValue}
            filter={filter}
            districtValue={district}
          />
        </Grid>
      </Grid>

      {/* {tabValue === 0 && (
        <Ensemble stateValue={stateValue} setStateValue={setStateValue} />
      )} */}
    </div>
  );
}

export default Project;
