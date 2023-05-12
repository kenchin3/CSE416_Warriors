import "./Data.css";
import IncumbentTable from "./IncumbentTable";
import Card from "@mui/material/Card";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SeatGraph from "./SeatGraph";
import React from "react";
import BoxPlot from "../BoxPlot";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import BarGraph from "../BarGraph";
import ToggleButton from "@mui/material/ToggleButton";
import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function Data({
  stateValue,
  district,
  setDistrict,
  stateData,
  ensembleData,
  district22,
}) {
  return (
    <>
      <Accordion
        disabled={!(district22 && district22.districts && stateValue)}
        disableGutters
        className="accordionStart"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {" "}
            <span className="accordionHeader">2022 Summary Information</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {district22 && (
            <SeatGraph stateValue={stateValue} district22={district22} />
          )}
          {district22 && (
            <span className="summaryInformationText">
              {" "}
              {district22.party_influence}{" "}
            </span>
          )}{" "}
          <br></br>
          {district22 && (
            <span className="summaryInformationText">
              Safe seat and party influence are taken from{" "}
              <a
                target="_blank"
                href="https://www.cnn.com/interactive/2022/politics/us-redistricting/"
              >
                CNN
              </a>
              .
            </span>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        disabled={!(district22 && district22.districts && stateValue)}
        className="accordion"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <span className="accordionHeader">2022 District Information</span>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography component="span">
            <span>
              <IncumbentTable
                stateValue={stateValue}
                district={district}
                setDistrict={setDistrict}
                district22={district22}
              />
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled={!(district22 && district22.districts && stateValue)}
        disableGutters
        className="accordion"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <span className="accordionHeader"> Incumbent Box Plot</span>
          </Typography>
        </AccordionSummary>

        {stateValue && (
          <BoxPlot stateValue={stateValue} ensembleData={ensembleData} />
        )}
      </Accordion>
    </>
  );
}

export default Data;
