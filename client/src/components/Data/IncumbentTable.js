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
import "./IncumbentTable.css";

function IncumbentTable({ stateValue, district, setDistrict, stateData }) {
  const [incumbentTableData, setIncumbentTableData] = React.useState();

  React.useEffect(() => {
    if (stateData && stateData["incumbents"].length > 0) {
      let incumbents = stateData["incumbents"];
      let districts = stateData["districts"];
      for (let i = 0; i < incumbents.length; i++) {
        let district = districts.filter(function (d) {
          return d.district == incumbents[i].district;
        })[0];
        incumbents[i]["geoVar"] = district["geoVar"];
        incumbents[i]["popVar"] = district["popVar"];
        incumbents[i]["area"] = district["area"];
        incumbents[i]["pop"] = district["population"];
      }
      setIncumbentTableData(incumbents);
    }
  }, [stateData]);

  const useStyles = makeStyles({
    header: {
      color: "black",
      paddingLeft: "auto",
      paddingRight: "auto",
      lineHeight: "13px",
      fontSize: "13px",
      fontWeight: 550,
      fontFamily: ["Helvetica"],
    },
  });

  const classes = useStyles();

  // const tableColumnsNames = [
  //   "District",
  //   "Name",
  //   "Party",
  //   "Election Result",
  //   "Geographic σ2",
  //   "Population σ2",
  // ];

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
                Geographic σ2
              </TableCell>
              <TableCell className={classes.header} align="left">
                Population σ2
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incumbentTableData &&
              incumbentTableData.map((row) => (
                <TableRow
                  key={row.district}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  district={row.district}
                  onClick={() => {
                    setDistrict(parseInt(row.district) - 1);
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
                    className={classes.content}
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
                    className={classes.content}
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    className={classes.content}
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row.party}
                  </TableCell>
                  <TableCell
                    className={classes.content}
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row.electionResult ? "Win" : "Loss"}
                  </TableCell>
                  <TableCell
                    className={classes.content}
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row["popVar"]}
                  </TableCell>
                  <TableCell
                    className={classes.content}
                    align="left"
                    style={{
                      color: rowColor(row.party, row.electionResult),
                    }}
                  >
                    {row["geoVar"]}
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
        incumbentTableData={incumbentTableData}
      />
    </>
  );
}

export default IncumbentTable;
