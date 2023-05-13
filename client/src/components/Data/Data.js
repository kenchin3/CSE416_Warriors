import "./Data.css";
import IncumbentTable from "./IncumbentTable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SeatGraph from "./SeatGraph";
import React from "react";
import BoxPlot from "../BoxPlot";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";

function Data({
  stateValue,
  district,
  setDistrict,
  stateData,
  ensembleData,
  district22,
}) {
  const [expand, setExpand] = React.useState(-1);

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
        disabled={!(district22 && district22.districts && stateValue)}
        disableGutters
        className="accordionStart"
        expanded={expand === 1}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => handleAccordion(1)} />}
          aria-controls="panel1a-content"
        >
          <Typography>
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
        expanded={expand === 2}
        className="accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => handleAccordion(2)} />}
          aria-controls="panel1a-content"
        >
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
        expanded={expand === 3}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => handleAccordion(3)} />}
          aria-controls="panel1a-content"
        >
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
