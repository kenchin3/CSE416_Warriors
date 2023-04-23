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
import axios from "axios";

function IncumbentTable({ stateValue, district, setDistrict }) {
  const [incumbentData, setIncumbentData] = React.useState();

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/api/getIncumbentByState", {
        params: { state: stateValue.toUpperCase() },
      })
      .then((res) => {
        console.log(res.data);
        setIncumbentData(res.data);
      });
  }, [stateValue]);

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
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "15px",
      fontWeight: 550,
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
  });

  const classes = useStyles();

  function rowColor(party, result) {
    if (result === "Open") {
      return "grey";
    } else if (party === "REP") {
      return "#D70040";
    } else {
      return "blue";
    }
  }

  return (
    <>
      <TableContainer className="table" component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} align="left">
                District
              </TableCell>
              <TableCell className={classes.header} align="left">
                Name
              </TableCell>
              <TableCell className={classes.header} align="left">
                Party
              </TableCell>
              <TableCell className={classes.header} align="left">
                Election Result
              </TableCell>
              <TableCell className={classes.header} align="left">
                Geographic Variance
              </TableCell>
              <TableCell className={classes.header} align="left">
                Population Variance
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incumbentData &&
              incumbentData.map((row) => (
                <TableRow
                  key={row.district}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  district={row.district}
                  onClick={() => {
                    setDistrict(row.District - 1);
                  }}
                  className="districtRow"
                  style={{
                    backgroundColor:
                      district === -1
                        ? "white"
                        : row.district - 1 === district
                        ? "#D3D3D3"
                        : "white",
                  }}
                >
                  <TableCell
                    className="tableCellIT"
                    align="left"
                    component="th"
                    scope="row"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row.district}
                  </TableCell>
                  <TableCell
                    className="tableCellIT"
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    className="tableCellIT"
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row.party}
                  </TableCell>
                  <TableCell
                    className="tableCellIT"
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row.electionResult ? "Win" : "Loss"}
                  </TableCell>
                  {/* <TableCell
                  className="tableCellIT"
                  align="left"
                  style={{
                    color: rowColor(
                      row["Incumbent"]["Party"],
                      row["Incumbent"]["Win"]
                    ),
                  }}
                >
                  {(
                    parseInt(row["Pop 2022"]) / parseInt(row["Pop 2020"])
                  ).toFixed(3)}
                </TableCell> */}
                  {/* <TableCell
                  className="tableCellIT"
                  align="left"
                  style={{
                    color: rowColor(
                      row["Incumbent"]["Party"],
                      row["Incumbent"]["Win"]
                    ),
                  }}
                >
                  {(
                    parseInt(row["Area 2022"]) / parseInt(row["Area 2020"])
                  ).toFixed(3)}
                </TableCell> */}
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
