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
  const handleChange = (event) => {
    // console.log(event.target.value);
    setFilter(event.target.value);
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
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
              // sx={{
              //   color: "black",
              //   ".MuiOutlinedInput-notchedOutline": {
              //     borderColor: "rgba(228, 219, 233, 0.25)",
              //   },
              //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              //     borderColor: "rgba(228, 219, 233, 0.25)",
              //   },
              //   "&.Mui-focused .MuiSvgIcon-root ": {
              //     fill: "black",
              //   },
              //   "&:hover .MuiSvgIcon-root ": {
              //     fill: "rgba(228, 219, 233, 0.25)",
              //   },
              //   ".MuiSvgIcon-root ": {
              //     fill: "rgba(228, 219, 233, 0.25)",
              //   },
              // }}
            >
              <MenuItem value={stateValue}>
                <em>Select State</em>
              </MenuItem>
              <MenuItem value={"pa"}>Pennsylvania</MenuItem>
              <MenuItem value={"tn"}>Tennessee</MenuItem>
              <MenuItem value={"ok"}>Oklahoma</MenuItem>
            </Select>
          </FormControl>
        </Paper>

        <Paper className="paper2" elevation={10}>
          <FormControl className="paper2Content">
            <span className="paper22">
              <RadioGroup
                defaultValue="20"
                name="radio-buttons-group"
                row={true}
                onChange={handleChange}
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
          <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Incumbent Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <IncumbentTable stateValue={stateValue} />
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Summary Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <span className="summaryInformation">Number of Districts:</span>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </>
  );
}

export default Data;

// import other icon
