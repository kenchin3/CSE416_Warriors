import React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
  TablePagination,
} from "@mui/material";
import makeStyles from "@material-ui/core/styles/makeStyles";

function DistrictPlanSummaryTable({ currData, district, setDistrict }) {
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(5);

  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

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
      lineHeight: "12px",
      fontSize: "12px",
      fontWeight: 400,
      fontFamily: ["Helvetica"],
    },
  });
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.header}
                align="left"
                component="th"
                scope="row"
              >
                District
              </TableCell>
              <TableCell
                className={classes.header}
                align="left"
                component="th"
                scope="row"
              >
                Incumbent
              </TableCell>
              <TableCell
                className={classes.header}
                align="left"
                component="th"
                scope="row"
              >
                Geometric Variance
              </TableCell>
              <TableCell
                className={classes.header}
                align="left"
                component="th"
                scope="row"
              >
                Population Variance
              </TableCell>
              <TableCell
                className={classes.header}
                align="left"
                component="th"
                scope="row"
              >
                Geometric Difference
              </TableCell>
              <TableCell
                className={classes.header}
                align="left"
                component="th"
                scope="row"
              >
                Population Difference
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currData &&
              currData.districts.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                <TableRow
                  key={row.district}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    setDistrict(parseInt(row.district) - 1);
                  }}
                  className="districtEnsembleRow"
                  style={{
                    backgroundColor:
                      district == -1
                        ? "white"
                        : parseInt(row.district) - 1 == district
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
                    {parseInt(row.district)}
                  </TableCell>

                  <TableCell
                    className={classes.content}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {row.incumbent}
                  </TableCell>

                  <TableCell
                    className={classes.content}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {row.geo_var}
                  </TableCell>
                  <TableCell
                    className={classes.content}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {row.pop_var}
                  </TableCell>
                  <TableCell
                    className={classes.content}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {row.geo_diff}
                  </TableCell>
                  <TableCell
                    className={classes.content}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {row.pop_diff}
                  </TableCell>
                </TableRow>
              ))}

            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                count={currData ? Object.keys(currData).length : 0}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DistrictPlanSummaryTable;
