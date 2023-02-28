import "./Data.css";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import IncumbentTable from "./IncumbentTable";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import SeatGraph from "./SeatGraph";
import React from "react";
import okDistrictData from "./../data/okDistrictData.json";
import paDistrictData from "./../data/paDistrictData.json";
import tnDistrictData from "./../data/tnDistrictData.json";

function Data({
  filter,
  setFilter,
  twoZero,
  twoTwo,
  random,
  stateValue,
  setStateValue,
  tabValue,
  district,
  setDistrict,
}) {
  const [rowSize, setRowSize] = React.useState(0);
  const [incumbentData, setIncumbentData] = React.useState([]);

  React.useEffect(() => {
    let rowLength = 0;
    switch (stateValue) {
      case "":
        setIncumbentData([]);
      case "pa":
        setIncumbentData(paDistrictData.data);
        incumbentData.map((row) => rowLength++);
        setRowSize(rowLength);
        //console.log(rowSize);
        break;
      case "tn":
        setIncumbentData(tnDistrictData.data);
        incumbentData.map((row) => rowLength++);
        setRowSize(rowLength);
        //console.log(rowSize);
        break;
      case "ok":
        setIncumbentData(okDistrictData.data);
        incumbentData.map((row) => rowLength++);
        setRowSize(rowLength);
        //console.log(rowSize);
        break;
      default:
        break;
    }
  });

  const handleChange = (event) => {
    // //console.log(event.target.value);
    setFilter(event.target.value);
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
    setDistrict(-1);
  };

  return (
    <>
      <div className="leftData">
        <Paper className="paper1" elevation={10}>
          <FormControl className="form" size="small">
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

        <Paper className="paper2" elevation={10}>
          <FormControl className="paper2Content">
            <span className="paper22">
              <RadioGroup
                defaultValue="2022"
                name="radio-buttons-group"
                row={true}
                onChange={handleChange}
                className="radioGroup"
              >
                <span className="paper2Header">Boundary :</span>
                <span className="paper2Options">
                  <FormControlLabel
                    className="formControlLabel"
                    value="2020"
                    control={<Radio />}
                    label="2020"
                  />
                  <FormControlLabel
                    className="formControlLabel"
                    value="2022"
                    control={<Radio />}
                    label="2022"
                  />
                  <FormControlLabel
                    className="formControlLabel"
                    value="Random"
                    control={<Radio />}
                    label="Random"
                  />
                </span>
              </RadioGroup>
            </span>
          </FormControl>
        </Paper>
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {" "}
              <span className="accordionHeader">2022 Summary Information</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {stateValue && (
              <SeatGraph stateValue={stateValue} rowSize={rowSize} />
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <span className="accordionHeader">
                2022 Incumbent Information
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="span">
              {stateValue && (
                <IncumbentTable
                  stateValue={stateValue}
                  district={district}
                  setDistrict={setDistrict}
                  incumbentData={incumbentData}
                />
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Data;
