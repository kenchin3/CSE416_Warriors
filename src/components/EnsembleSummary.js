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
function EnsembleSummary({ stateValue }) {
  const [summaryData, setSummaryData] = React.useState({
    "pa": {
      "District Plans Total": 300,
      "Incumbents Total": 17,
      "Incumbents Win": 14,
      "Geo Var": 1.43,
      "Pop Var": 0.79
    },
    "ok": {
      "District Plans Total": 1000,
      "Incumbents Total": 5,
      "Incumbents Win": 5,
      "Geo Var": 1.2,
      "Pop Var": 0.45
    },
    "tn": {
      "District Plans Total": 13,
      "Incumbents Total": 12,
      "Incumbents Win": 11,
      "Geo Var": 1.31,
      "Pop Var": 0.67
    },
    "": {
      "District Plans Total": 0,
      "Incumbents Total": 0,
      "Incumbents Win": 0,
      "Geo Var": 0,
      "Pop Var": 0
    }

  })
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Number of District Plans</TableCell>
              <TableCell align="right">Number of Incumbents</TableCell>
              <TableCell align="right">Incumbents predicted to win</TableCell>
              <TableCell align="right">Avg geographic variation</TableCell>
              <TableCell align="right">Avg population variation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              // key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                {summaryData[stateValue]["District Plans Total"]}
              </TableCell>

              <TableCell align="right">{summaryData[stateValue]["Incumbents Total"]}</TableCell>
              <TableCell align="right">{summaryData[stateValue]["Incumbents Win"]}</TableCell>
              <TableCell align="right">{summaryData[stateValue]["Geo Var"]}</TableCell>
              <TableCell align="right">{summaryData[stateValue]["Pop Var"]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EnsembleSummary;
