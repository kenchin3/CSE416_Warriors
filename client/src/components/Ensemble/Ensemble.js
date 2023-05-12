import React from "react";
import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import EnsembleSummary from "./EnsembleSummary";
import DistrictPlanSummary from "./DistrictPlanSummary";
import "./Ensemble.css";
import BoxPlot from "../BoxPlot";
import BarGraph from "../BarGraph";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Ensemble({
  district,
  setDistrict,
  stateValue,
  setStateValue,
  districtPlan,
  ensembleData,
  districtsRandom1,
  districtsRandom2,
  districtsRandom3,
  bWFilter,
}) {
  return (
    <>
      {/* <Accordion className="accordionEnsemble">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeaderEnsemble">Ensemble Summary</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EnsembleSummary
            stateValue={stateValue}
            districtPlan={districtPlan}
            ensembleData={ensembleData}
            districtEnsembleData={districtEnsembleData} 
          />
        </AccordionDetails>
      </Accordion> */}

      <Accordion disableGutters className="accordionEnsembleStart">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeaderEnsemble">
              Random District Plan {districtPlan} Outcome
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistrictPlanSummary
            district={district}
            setDistrict={setDistrict}
            stateValue={stateValue}
            districtPlan={districtPlan}
            ensembleData={ensembleData}
            districtsRandom1={districtsRandom1}
            districtsRandom2={districtsRandom2}
            districtsRandom3={districtsRandom3}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters className="accordionEnsemble">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeaderEnsemble">Incumbent Box Plot</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {stateValue && (
            <BoxPlot stateValue={stateValue} ensembleData={ensembleData} />
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Ensemble;
