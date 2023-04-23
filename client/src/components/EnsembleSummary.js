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
  const [summaryData, setSummaryData] = React.useState({
    pa: {
      "District Plans Total": 300,
      "Incumbents Total": 17,
      "Incumbents Win": 14,
      "Geo Var22": 1.43,
      "Geo Var20": 1.33,
      "Pop Var22": 0.79,
      "Pop Var20": 1.29,
    },
    ok: {
      "District Plans Total": 1000,
      "Incumbents Total": 5,
      "Incumbents Win": 5,
      "Geo Var22": 1.82,
      "Geo Var20": 1.93,
      "Pop Var22": 2.35,
      "Pop Var20": 1.98,
    },
    tn: {
      "District Plans Total": 13,
      "Incumbents Total": 12,
      "Incumbents Win": 11,
      "Geo Var22": 1.43,
      "Geo Var20": 1.89,
      "Pop Var22": 0.79,
      "Pop Var20": 1.29,
    },
    "": {
      "District Plans Total": 0,
      "Incumbents Total": 0,
      "Incumbents Win": 0,
      "Geo Var22": 1.12,
      "Geo Var20": 1.42,
      "Pop Var22": 0.39,
      "Pop Var20": 0.45,
    },
  });

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
