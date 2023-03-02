import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  FormControl,
  MenuItem,
  Select,
  Grid,
  Typography,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import EnsembleSummary from "./EnsembleSummary";
import DistrictPlanSummary from "./DistrictPlanSummary";
import "./Ensemble.css";
import BoxPlot from "./BoxPlot";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Ensemble({ stateValue, setStateValue, districtPlan }) {
  // const [ensembleData, setEnsembleData] = React.useState(paSeries);

  // const handleDistrictPlanChange = (event) => {
  //   setDistrictPlan(event.target.value);
  // };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
  };

  return (
    <>
      {/* <Grid container spacing={1} component="span">
        <Grid item xs={6} md={6} component="span"> */}
      {/* <Paper className="paper2Ensemble" elevation={10}>
            <FormControl className="paper2ContentEnsemble">
              <span className="paper2InsideEnsemble">
                <RadioGroup
                  defaultValue="20"
                  name="radio-buttons-group"
                  row={true}
                  // onChange={ }
                >
                  <span className="paper2HeaderEnsemble">
                    Variation Comparison:
                  </span>
                  <span className="paper2OptionsEnsemble">
                    <FormControlLabel
                      className="formControlLabelEnsemble"
                      value="Geometric Variation"
                      control={<Radio />}
                      label="Geometric"
                    />
                    <FormControlLabel
                      className="formControlLabelEnsemble"
                      value="Population Variation"
                      control={<Radio />}
                      label="Population"
                    />
                  </span>
                </RadioGroup>
              </span>
            </FormControl>
          </Paper> */}
      {/* <br></br>
          <span>Ensemble District Plan {districtPlan}</span> */}
      <Accordion className="accordionEnsemble">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeaderEnsemble">
              Ensemble Summary
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EnsembleSummary stateValue={stateValue} />
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordionEnsemble">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeaderEnsemble">
              District Plan {districtPlan} Incumbents
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistrictPlanSummary districtPlan={districtPlan} />
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordionEnsemble">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeaderEnsemble">
              Incumbent Box Plot
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className="paper2ContentEnsemble">
            <span className="paper2InsideEnsemble">
              <RadioGroup
                defaultValue="Geometric Variation"
                name="radio-buttons-group"
                row={true}
              >
                <span className="paper2HeaderEnsemble">
                  Variation Comparison:
                </span>
                <span className="paper2OptionsEnsemble">
                  <FormControlLabel
                    className="formControlLabelEnsemble"
                    value="Geometric Variation"
                    control={<Radio />}
                    label="Geometric"
                  />
                  <FormControlLabel
                    className="formControlLabelEnsemble"
                    value="Population Variation"
                    control={<Radio />}
                    label="Population"
                  />
                </span>
              </RadioGroup>
            </span>
          </FormControl>

          <BoxPlot stateValue={stateValue} />
        </AccordionDetails>
      </Accordion>

      {/* <Typography variant="p">Available SeaWulf Plans</Typography>
          <FormControl className="formEnsemble" size="small">
            <Select
              labelId="inputLabel"
              className="select"
              displayEmpty
              value={districtPlan}
              onChange={handleDistrictPlanChange}
            >
              <MenuItem value={1}>Plan 1</MenuItem>
              <MenuItem value={2}>Plan 2</MenuItem>
              <MenuItem value={3}>Plan 3</MenuItem>
            </Select>
          </FormControl> */}
    </>
  );
}

export default Ensemble;
