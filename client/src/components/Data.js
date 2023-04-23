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
import BarGraph from "./BarGraph";

function Data({ stateValue, district, setDistrict }) {
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
        break;
      case "tn":
        setIncumbentData(tnDistrictData.data);
        incumbentData.map((row) => rowLength++);
        setRowSize(rowLength);
        break;
      case "ok":
        setIncumbentData(okDistrictData.data);
        incumbentData.map((row) => rowLength++);
        setRowSize(rowLength);
        break;
      default:
        break;
    }
  });

  return (
    <>
      <Card className="Card">
        <Typography>
          {" "}
          <span className="accordionHeader">2022 Summary Information</span>
        </Typography>
        <span>
          {stateValue && (
            <SeatGraph stateValue={stateValue} rowSize={rowSize} />
          )}
        </span>
      </Card>
      <Card className="Card">
        <Typography>
          <span className="accordionHeader">2022 Incumbent Information</span>
        </Typography>
        <span>
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
        </span>
      </Card>
      <Card className="Card">
        <Typography>
          <span className="accordionHeader"> Ensemble Summary</span>
        </Typography>
        {stateValue && <BoxPlot stateValue={stateValue} />}
        {stateValue && <BarGraph stateValue={stateValue} />}
      </Card>
    </>
  );
}

export default Data;
