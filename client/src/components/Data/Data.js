import "./Data.css";
import IncumbentTable from "./IncumbentTable";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SeatGraph from "./SeatGraph";
import React from "react";
import BoxPlot from "../BoxPlot";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import BarGraph from "../BarGraph";

function Data({
  stateValue,
  district,
  setDistrict,
  stateData,
  incumbentData,
  ensembleData,
}) {
  return (
    <>
      <Accordion disableGutters className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeader">2022 Summary Information</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {incumbentData && (
            <SeatGraph stateValue={stateValue} incumbentData={incumbentData} />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <span className="accordionHeader">2022 Incumbent Information</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="span">
            <span>
              <IncumbentTable
                stateValue={stateValue}
                district={district}
                setDistrict={setDistrict}
                stateData={stateData}
              />
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <span className="accordionHeader"> Incumbent Box Plot</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {stateValue && (
            <BoxPlot stateValue={stateValue} ensembleData={ensembleData} />
          )}
          {stateValue && (
            <BarGraph stateValue={stateValue} ensembleData={ensembleData} />
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Data;
