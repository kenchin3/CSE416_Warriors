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
    // console.log(event.target.innerText);
    setDistrict(event.target.innerText - 1);
  };

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
                onClick={() => {
                  setDistrict(row.District - 1);
                }}
                // classes={{ hover: classes.hover, selected: classes.selected }}
                className="districtRow"
                style={{
                  backgroundColor:
                    district === -1
                      ? "white"
                      : row.District - 1 === district
                      ? "grey"
                      : "white",
                }}
              >
                <TableCell component="th" scope="row">
                  {row.District}
                </TableCell>
                <TableCell align="right">{row.Incumbent.Name}</TableCell>
                <TableCell align="right">{row.Incumbent.Party}</TableCell>
                <TableCell align="right">{row.Incumbent.Win}</TableCell>
                <TableCell align="right">
                  {(
                    parseInt(row["Pop 2022"]) / parseInt(row["Pop 2020"])
                  ).toFixed(3)}
                </TableCell>
                <TableCell align="right">
                  {(
                    parseInt(row["Area 2022"]) / parseInt(row["Area 2020"])
                  ).toFixed(3)}
                </TableCell>
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
