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
  incumbentData,
  ensembleData,
}) {
  const [bWFilter, setbWFilter] = React.useState("geometric");
  const [geoBW, setgeoBW] = React.useState();
  const [popBW, setpopBW] = React.useState();

  React.useEffect(() => {
    if (ensembleData) {
      let data = ensembleData.boxAndWhiskers[0]["data"];
      let d = [];
      for (let i = 0; i < data.length; i++) {
        let row = { x: i.toString(), y: data[i] };
        d.push(row);
      }

      data = ensembleData.boxAndWhiskers[0]["dots22"];
      let dots = [];
      for (let i = 0; i < data.length; i++) {
        let row = { x: i.toString(), y: data[i] };
        dots.push(row);
      }
      let bW = [
        { type: "boxPlot", name: "Ensemble", data: d },
        { type: "scatter", name: "2022 Incumbents", data: dots },
      ];
      // console.log(bW);
      setgeoBW(bW);

      data = ensembleData.boxAndWhiskers[1]["data"];
      d = [];
      for (let i = 0; i < data.length; i++) {
        let row = { x: i.toString(), y: data[i] };
        d.push(row);
      }
      data = ensembleData.boxAndWhiskers[0]["dots22"];
      dots = [];
      for (let i = 0; i < data.length; i++) {
        let row = { x: i.toString(), y: data[i] };
        dots.push(row);
      }
      bW = [
        { type: "boxPlot", name: "Ensemble", data: d },
        { type: "scatter", name: "2022 Incumbents", data: dots },
      ];
      setpopBW(bW);
    }
  }, [ensembleData]);

  const handleBWFilter = (event) => {
    setbWFilter(event.target.value);
    // console.log(bWFilter);
  };

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
        <FormControl className="paper2ContentEnsemble">
          <span className="paper2InsideEnsemble">
            <RadioGroup
              defaultValue="geometric"
              name="radio-buttons-group"
              row={true}
              onChange={handleBWFilter}
            >
              <span className="paper2HeaderEnsemble">
                Variation Comparison:
              </span>
              <span className="paper2OptionsEnsemble">
                <FormControlLabel
                  className="formControlLabelEnsemble"
                  value="geometric"
                  control={<Radio />}
                  label="geometric"
                />
                <FormControlLabel
                  className="formControlLabelEnsemble"
                  value="population"
                  control={<Radio />}
                  label="population"
                />
              </span>
            </RadioGroup>
          </span>
        </FormControl>

        {stateValue && (
          <BoxPlot
            stateValue={stateValue}
            bWData={bWFilter == "geometric" ? geoBW : popBW}
          />
        )}
        {stateValue && (
          <BarGraph stateValue={stateValue} ensembleData={ensembleData} />
        )}
      </Accordion>
    </>
  );
}

export default Data;
