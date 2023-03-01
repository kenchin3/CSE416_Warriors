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

function EnsembleSummary({ stateValue }) {
  const [summaryData, setSummaryData] = React.useState({
    pa: {
      "District Plans Total": 300,
      "Incumbents Total": 17,
      "Incumbents Win": 14,
      "Geo Var": 1.43,
      "Pop Var": 0.79,
    },
    ok: {
      "District Plans Total": 1000,
      "Incumbents Total": 5,
      "Incumbents Win": 5,
      "Geo Var": 1.2,
      "Pop Var": 0.45,
    },
    tn: {
      "District Plans Total": 13,
      "Incumbents Total": 12,
      "Incumbents Win": 11,
      "Geo Var": 1.31,
      "Pop Var": 0.67,
    },
    "": {
      "District Plans Total": 0,
      "Incumbents Total": 0,
      "Incumbents Win": 0,
      "Geo Var": 0,
      "Pop Var": 0,
    },
  });
  return (
    <>
      <TableContainer component={Paper} className="tableContainerES">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCellHeaderES" align="center">
                Number of District Plans
              </TableCell>
              <TableCell className="tableCellHeaderES" align="center">
                Number of Incumbents
              </TableCell>
              <TableCell className="tableCellHeaderES" align="center">
                Incumbents Predicted to Win
              </TableCell>
              <TableCell className="tableCellHeaderES" align="center">
                Average Geographic Pariation
              </TableCell>
              <TableCell className="tableCellHeaderES" align="center">
                Average population variation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              // key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="tableCellES"
                align="center"
                component="th"
                scope="row"
              >
                {summaryData[stateValue]["District Plans Total"]}
              </TableCell>

              <TableCell className="tableCellES" align="center">
                {summaryData[stateValue]["Incumbents Total"]}
              </TableCell>
              <TableCell className="tableCellES" align="center">
                {summaryData[stateValue]["Incumbents Win"]}
              </TableCell>
              <TableCell className="tableCellES" align="center">
                {summaryData[stateValue]["Geo Var"]}
              </TableCell>
              <TableCell className="tableCellES" align="center">
                {summaryData[stateValue]["Pop Var"]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EnsembleSummary;
