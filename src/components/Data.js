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
import Divider from "@mui/material/Divider";
import React from "react";
import okDistrictData from "./../data/okDistrictData.json";
import paDistrictData from "./../data/paDistrictData.json";
import tnDistrictData from "./../data/tnDistrictData.json";
import BoxPlot from "./BoxPlot";

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
  setTabValue
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
              <span className="accordionHeader">
                2022 Incumbent Information
              </span>
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
                    incumbentData={incumbentData}
                  />
                </span>
              ) : (
                <span />
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <BoxPlot stateValue={stateValue}/>
   
    </>
  );
}

export default Data;
