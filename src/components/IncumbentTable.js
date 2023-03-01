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
import "./IncumbentTable.css";

function IncumbentTable({ stateValue, district, setDistrict, incumbentData }) {
  const handleClick = (event) => {
    // console.log(event.target.innerText);
    setDistrict(event.target.innerText - 1);
  };

  return (
    <>
      <TableContainer className="table" component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCellHeaderIT" align="center">
                District
              </TableCell>
              <TableCell className="tableCellHeaderIT" align="center">
                Name
              </TableCell>
              <TableCell className="tableCellHeaderIT" align="center">
                Party
              </TableCell>
              <TableCell className="tableCellHeaderIT" align="center">
                Election Result
              </TableCell>
              <TableCell className="tableCellHeaderIT" align="center">
                Geographic Variance
              </TableCell>
              <TableCell className="tableCellHeaderIT" align="center">
                Population Variance
              </TableCell>
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
                <TableCell
                  className="tableCellIT"
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.District}
                </TableCell>
                <TableCell className="tableCellIT" align="center">
                  {row.Incumbent.Name}
                </TableCell>
                <TableCell className="tableCellIT" align="center">
                  {row.Incumbent.Party}
                </TableCell>
                <TableCell className="tableCellIT" align="center">
                  {row.Incumbent.Win}
                </TableCell>
                <TableCell className="tableCellIT" align="center">
                  {(
                    parseInt(row["Pop 2022"]) / parseInt(row["Pop 2020"])
                  ).toFixed(3)}
                </TableCell>
                <TableCell className="tableCellIT" align="center">
                  {(
                    parseInt(row["Area 2022"]) / parseInt(row["Area 2020"])
                  ).toFixed(3)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <DistrictData
        district={district}
        setDistrict={setDistrict}
        stateValue={stateValue}
      /> */}
    </>
  );
}

export default IncumbentTable;
