import "./Data.css";
import IncumbentTable from "./IncumbentTable";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SeatGraph from "./SeatGraph";
import React from "react";
import okDistrictData from "./../data/okDistrictData.json";
import paDistrictData from "./../data/paDistrictData.json";
import tnDistrictData from "./../data/tnDistrictData.json";
import BoxPlot from "./BoxPlot";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import BarGraph from "./BarGraph";

function Data({ stateValue, district, setDistrict, stateData, incumbentData }) {
  const [rowSize, setRowSize] = React.useState(0);
  // const [incumbentData, setIncumbentData] = React.useState([]);

  // React.useEffect(() => {
  //   let rowLength = 0;
  //   switch (stateValue) {
  //     case "":
  //       setIncumbentData([]);
  //     case "pa":
  //       setIncumbentData(paDistrictData.data);
  //       incumbentData.map((row) => rowLength++);
  //       setRowSize(rowLength);
  //       break;
  //     case "tn":
  //       setIncumbentData(tnDistrictData.data);
  //       incumbentData.map((row) => rowLength++);
  //       setRowSize(rowLength);
  //       break;
  //     case "ok":
  //       setIncumbentData(okDistrictData.data);
  //       incumbentData.map((row) => rowLength++);
  //       setRowSize(rowLength);
  //       break;
  //     default:
  //       break;
  //   }
  // });

  return (
    <>
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
            <span className="accordionHeader">2022 Incumbent Information</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="span">
            {stateValue ? (
              <span>
                <IncumbentTable
                  stateValue={stateValue}
                  district={district}
                  setDistrict={setDistrict}
                  stateData={stateData}
                  
                />
              </span>
            ) : (
              <span />
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <span className="accordionHeader">
              {" "}
              Incumbent Box Plot
            </span>
          </Typography>
        </AccordionSummary>
        {stateValue && <BoxPlot stateValue={stateValue} />}
      </Accordion>
    </>
  );
}

export default Data;
