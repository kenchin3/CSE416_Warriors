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
  const [expand, setExpand] = React.useState(-1);
  const [random1Data, setrandom1Data] = React.useState();
  const [random2Data, setrandom2Data] = React.useState();
  const [random3Data, setrandom3Data] = React.useState();

  React.useEffect(() => {
    if (districtsRandom1) {
      setrandom1Data(districtsRandom1);
    }
  }, [districtsRandom1]);

  React.useEffect(() => {
    if (districtsRandom2) {
      setrandom2Data(districtsRandom2);
    }
  }, [districtsRandom2]);

  React.useEffect(() => {
    if (districtsRandom3) {
      setrandom3Data(districtsRandom3);
    }
  }, [districtsRandom3]);

  const handleAccordion = (event) => {
    if (expand === event) {
      console.log("same");
      setExpand(-1);
    } else {
      console.log("diff");
      setExpand(event);
    }
  };

  return (
    <>
      <Accordion
        expanded={expand === 1}
        disableGutters
        className="accordionEnsembleStart"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => handleAccordion(1)} />}
        >
          <Typography>
            <span className="accordionHeaderEnsemble">
              Random District Plan {districtPlan} Outcome
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EnsembleSummary
            stateValue={stateValue}
            ensembleData={ensembleData}
            districtPlan={districtPlan}
            random1Data={random1Data}
            random2Data={random2Data}
            random3Data={random3Data}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expand === 2}
        disableGutters
        className="accordionEnsemble"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => handleAccordion(2)} />}
        >
          <Typography>
            <span className="accordionHeaderEnsemble">
              Random District Plan {districtPlan} Incumbent Information
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistrictPlanSummary
            district={district}
            setDistrict={setDistrict}
            stateValue={stateValue}
            districtPlan={districtPlan}
            random1Data={random1Data}
            random2Data={random2Data}
            random3Data={random3Data}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expand === 3}
        disableGutters
        className="accordionEnsemble"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => handleAccordion(3)} />}
        >
          <Typography>
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
