import React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
} from "@mui/material";
import "./EnsembleSummary.css";
import makeStyles from "@material-ui/core/styles/makeStyles";

function EnsembleSummary({ stateValue, ensembleData }) {
  const useStyles = makeStyles({
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

  return (
    <>
      <TableContainer component={Paper} className="tableContainerES">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} align="left">
                Number of District Plans
              </TableCell>
              <TableCell className={classes.header} align="left">
                Number of Incumbents
              </TableCell>
              <TableCell className={classes.header} align="left">
                Incumbents Predicted to Win
              </TableCell>
              <TableCell className={classes.header} align="left">
                Average Geographic Variation
              </TableCell>
              <TableCell className={classes.header} align="left">
                Average Geographic Variation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="tableCellES"
                align="left"
                component="th"
                scope="row"
              >
                {"10,000"}
              </TableCell>

              <TableCell className="tableCellES" align="left">
                {ensembleData.incumbentWin}
              </TableCell>
              <TableCell className="tableCellES" align="left">
                {ensembleData.incumbentWin}
              </TableCell>
              <TableCell className="tableCellES" align="left">
                {ensembleData.avgGeoVar}
              </TableCell>
              <TableCell className="tableCellES" align="left">
                {ensembleData.avgPopVar}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EnsembleSummary;
