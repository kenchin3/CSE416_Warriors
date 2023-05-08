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
        // <TableContainer component={Paper}>
        //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //     <TableHead>
        //       <TableRow>
        //         <TableCell align="left"> District </TableCell>
        //         <TableCell align="left"> Opposing Candidate</TableCell>
        //         <TableCell align="left"> Population Difference</TableCell>
        //         <TableCell align="left"> 2022 Population</TableCell>
        //         <TableCell align="left"> Geographic Difference</TableCell>
        //         <TableCell align="left"> 2022 Geographic Area</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {rows.map((row) => (
        //         <TableRow
        //           key={row.name}
        //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        //         >
        //           <TableCell component="th" scope="row">
        //             {row.name}
        //           </TableCell>
        //           <TableCell align="left">{row.calories}</TableCell>
        //           <TableCell align="left">{row.fat}</TableCell>
        //           <TableCell align="left">{row.carbs}</TableCell>
        //           <TableCell align="left">{row.protein}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>

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
          {incumbentTableData[district]["rep_cand"] == ""} <br />
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
