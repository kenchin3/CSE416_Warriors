import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DistrictData from "./DistrictData";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TablePagination from "@mui/material/TablePagination";
import "./IncumbentTable.css";

function IncumbentTable({ stateValue, district, setDistrict, district22 }) {
  const [incumbentTableData, setIncumbentTableData] = React.useState();
  const [incumbentsOnly, setIncumbentsOnly] = React.useState(false);
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(5);

  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  React.useEffect(() => {
    // console.log(district22.districts)
    if (district22) {
      setIncumbentTableData(district22.districts);
      setpg(0);
      setrpg(5);
    }
  }, [district22]);

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
    content: {
      color: "black",
      paddingLeft: "auto",
      paddingRight: "auto",
      lineHeight: "13px",
      fontSize: "13px",
      fontWeight: 400,
      fontFamily: ["Helvetica"],
    },
  });

  const classes = useStyles();

  // const tableColumnsNames = [
  //   "District",
  //   "Name",
  //   "Party",
  //   "Election Result",
  //   "Geographic Var",
  //   "Population Var",
  // ];

  function rowColor(party, result) {
    if (result === "Open") {
      return "grey";
    } else if (party === "REP") {
      return "blue";
    } else {
      return "#D70040";
    }
  }

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            onChange={() => {
              setIncumbentsOnly(!incumbentsOnly);
            }}
          />
        }
        label="Incumbents Only"
      />
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        count={incumbentTableData ? incumbentTableData.length : 0}
        rowsPerPage={rpg}
        page={pg}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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
                Geographic Var
              </TableCell>
              <TableCell className={classes.header} align="left">
                Population Var
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incumbentTableData &&
              incumbentTableData.slice(pg * rpg, pg * rpg + rpg).map(
                (row) =>
                  ((incumbentsOnly && row.incumbent != "") ||
                    !incumbentsOnly) && (
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
                      >
                        {row.district}
                      </TableCell>
                      <TableCell className={classes.content} align="left">
                        {row.incumbent == "rep"
                          ? row.rep_cand
                          : row.incumbent == "dem"
                          ? row.dem_cand
                          : "None"}
                      </TableCell>
                      <TableCell
                        className={classes.content}
                        align="left"
                        style={{
                          color: rowColor(row.party, row.electionResult),
                        }}
                      >
                        {row.incumbent == "rep"
                          ? "Rep"
                          : row.incumbent == "dem"
                          ? "Dem"
                          : ""}
                      </TableCell>
                      <TableCell className={classes.content} align="left">
                        {row.electionResult ? "Win" : "Loss"}
                      </TableCell>
                      <TableCell className={classes.content} align="left">
                        {row["popVar"]}
                      </TableCell>
                      <TableCell className={classes.content} align="left">
                        {row["geoVar"]}
                      </TableCell>
                    </TableRow>
                  )
              )}
            <TableRow></TableRow>
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
