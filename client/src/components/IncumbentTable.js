import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DistrictData from "./DistrictData";
import makeStyles from "@material-ui/core/styles/makeStyles";

function IncumbentTable({ stateValue, district, setDistrict, incumbentData }) {
  // const handleClick = (event) => {
  //   // console.log(event.target.innerText);
  //   setDistrict(event.target.innerText - 1);
  // };

  const useStyles = makeStyles({
    cell: {
      color: "black",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
      lineHeight: "16px",
      fontWeight: 400,
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
    header: {
      color: "black",
      paddingLeft: "10px",
      paddingRight: "10px",
      lineHeight: "18px",
      // textAlign: "center",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "15px",
      fontWeight: 550,
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
  });

  const classes = useStyles();

  function rowColor(party, result) {
    if (result == "Open"){return "grey"}
    else if (party == "Rep"){return "#D70040"}
    else{return "blue"}


  }

  return (
    <>
      <TableContainer className="table" component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} align="center">
                District
              </TableCell>
              <TableCell className={classes.header} align="center">
                Name
              </TableCell>
              <TableCell className={classes.header} align="center">
                Party
              </TableCell>
              <TableCell className={classes.header} align="center">
                Election Result
              </TableCell>
              <TableCell className={classes.header} align="center">
                Geographic Variance
              </TableCell>
              <TableCell className={classes.header} align="center">
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
                      ? "#D3D3D3"
                      : "white",
                }}
              >
                <TableCell
                  className="tableCellIT"
                  align="center"
                  component="th"
                  scope="row"
                  style={{
                    color:
                      rowColor(row["Incumbent"]["Party"], row["Incumbent"]["Win"])
                  }}
                >
                  {row.District}
                </TableCell>
                <TableCell
                  className="tableCellIT"
                  align="center"
                  style={{
                    color:
                    rowColor(row["Incumbent"]["Party"], row["Incumbent"]["Win"]),
                  }}
                >
                  {row.Incumbent.Name}
                </TableCell>
                <TableCell
                  className="tableCellIT"
                  align="center"
                  style={{
                    color:
                    rowColor(row["Incumbent"]["Party"], row["Incumbent"]["Win"]),
                  }}
                >
                  {row.Incumbent.Party}
                </TableCell>
                <TableCell
                  className="tableCellIT"
                  align="center"
                  style={{
                    color:
                    rowColor(row["Incumbent"]["Party"], row["Incumbent"]["Win"]),
                  }}
                >
                  {row.Incumbent.Win}
                </TableCell>
                <TableCell
                  className="tableCellIT"
                  align="center"
                  style={{
                    color:
                    rowColor(row["Incumbent"]["Party"], row["Incumbent"]["Win"]),
                  }}
                >
                  {(
                    parseInt(row["Pop 2022"]) / parseInt(row["Pop 2020"])
                  ).toFixed(3)}
                </TableCell>
                <TableCell
                  className="tableCellIT"
                  align="center"
                  style={{
                    color:
                    rowColor(row["Incumbent"]["Party"], row["Incumbent"]["Win"]),
                  }}
                >
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
