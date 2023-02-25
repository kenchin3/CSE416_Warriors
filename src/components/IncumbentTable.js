import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DistrictData from "./DistrictData";

function IncumbentTable({ stateValue, district, setDistrict, incumbentData }) {
  const handleClick = (event) => {
    console.log(event.target.innerText);
    setDistrict(event.target.innerText - 1);
  };

  // function makeData() {
  //   let arr = [0];
  //   // incumbentData.forEach(element => {
  //   //     if (element.Party == "Rep") {
  //   //         arr[0] += 1
  //   //     }
  //   //     else if (element.Party = "Dem") {
  //   //         arr[1] += 1
  //   //     }
  //   // });
  //   // let
  //   // console.log(arr)
  //   return arr;
  // }
  // const series = [
  //   {
  //     data: makeData(),
  //   },
  // ];

  // const options = {
  //   chart: {
  //     type: "bar",
  //     height: 350,
  //   },
  //   plotOptions: {
  //     bar: {
  //       borderRadius: 4,
  //       horizontal: true,
  //     },
  //   },
  //   dataLabels: {
  //     enabled: true,
  //     formatter: function (val, opt) {
  //       return val !== 0 ? val : "";
  //     },
  //   },
  //   xaxis: {
  //     categories: ["Repblican", "Democrats"],
  //   },
  // };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>District</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Party</TableCell>
              <TableCell align="right">Election Result&nbsp;(2022)</TableCell>
              <TableCell align="right">Geographic Var</TableCell>
              <TableCell align="right">Population Var</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incumbentData.map((row) => (
              <TableRow
                key={row.District}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                district={row.District}
              >
                <TableCell component="th" scope="row" onClick={handleClick}>
                  {row.District}
                </TableCell>
                <TableCell align="right">{row.Name}</TableCell>
                <TableCell align="right">{row.Party}</TableCell>
                <TableCell align="right">{row.Win}</TableCell>
                <TableCell align="right">{row["Pop Variation"]}</TableCell>
                <TableCell align="right">{row["Geo Variation"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DistrictData
        district={district}
        setDistrict={setDistrict}
        stateValue={stateValue}
      />
    </>
  );
}

export default IncumbentTable;
