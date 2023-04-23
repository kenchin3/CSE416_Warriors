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

  return (
    <>
      <TableContainer component={Paper} className="tableContainerES">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} align="center">
                Number of District Plans
              </TableCell>
              <TableCell className={classes.header} align="center">
                Number of Incumbents
              </TableCell>
              <TableCell className={classes.header} align="center">
                Incumbents Predicted to Win
              </TableCell>
              <TableCell className={classes.header} align="center">
                Average Geographic Variation 
              </TableCell>
              <TableCell className={classes.header} align="center">
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
                align="center"
                component="th"
                scope="row"
              >
                {"10,000"}
              </TableCell>

              <TableCell className="tableCellES" align="center">
                {ensembleData.incumbentWin}
              </TableCell>
              <TableCell className="tableCellES" align="center">
                {ensembleData.incumbentWin}
              </TableCell>
              <TableCell className="tableCellES" align="center">
                {ensembleData.avgGeoVar}
              </TableCell>
              <TableCell className="tableCellES" align="center">
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
