import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DistrictData({
  district,
  setDistrict,
  stateValue,
  incumbentTableData,
}) {
  const [districtData, setdistrictData] = React.useState();

  React.useEffect(() => {
    if (incumbentTableData) {
      setdistrictData(incumbentTableData);
    }
  }, [incumbentTableData]);

  return (
    <div>
      {district !== -1 && districtData && (
   
        <div className="districtDataFont">
          <span style={{ fontWeight: 550, fontSize: 15 }}> District: </span>
          {districtData[district]["district"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Democratic Candidate:{" "}
          </span>
          {incumbentTableData[district]["dem_cand"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Republican Candidate:{" "}
          </span>
          {incumbentTableData[district]["rep_cand"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Population Difference:
          </span>
          {}
          {incumbentTableData[district]["popDiff"]}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Population:
          </span>
          {incumbentTableData[district]["population"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Geographic Difference:
          </span>
          {parseFloat(incumbentTableData[district]["geoDiff"]).toFixed(3)}
          {} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Geographic Area:{" "}
          </span>{" "}
          {incumbentTableData[district]["area"]}
        </div>
      )}
    </div>
  );
}

export default DistrictData;
