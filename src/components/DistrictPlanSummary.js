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
function DistrictPlanSummary({ districtPlan }) {
  // const [planNumber, setPlanNumber] = React.useState(1)

  const [districtIncumbentData, setDistrictIncumbentData] = React.useState({
    1: [
      {
        Name: "Joe Smith",
        Party: "Republican",
        "Geo Var": 0.1,
        "Pop Var": 0.3
      },
      {
        Name: "Michael Lee",
        Party: "Democrat",
        "Geo Var": 0.4,
        "Pop Var": 0.3
      },
      {
        Name: "Francesca Preston",
        Party: "Republican",
        "Geo Var": 0.2,
        "Pop Var": 0.3
      },
    ],
    2: [
      {
        Name: "Jay Lincoln",
        Party: "Republican",
        "Geo Var": 0.67,
        "Pop Var": 0.3
      },
      {
        Name: "Michael Karp",
        Party: "Republican",
        "Geo Var": 0.42,
        "Pop Var": 0.3
      },
      {
        Name: "Jared Goodwin",
        Party: "Republican",
        "Geo Var": 0.17,
        "Pop Var": 0.3
      },
    ],
    3: [
      {
        Name: "Ali Key",
        Party: "Democrat",
        "Geo Var": 0.33,
        "Pop Var": 0.3
      },
      {
        Name: "Norah Mcgrath",
        Party: "Democrat",
        "Geo Var": 0.82,
        "Pop Var": 0.3
      },
      {
        Name: "Jacoby Davenport",
        Party: "Democrat",
        "Geo Var": 1.34,
        "Pop Var": 0.3
      },
    ],
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                Number of Districts:{" "}
                {districtIncumbentData[districtPlan].length}
              </TableCell>
              {/* <TableCell>10</TableCell> */}
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="left">Incumbent</TableCell>
              <TableCell align="left">Party</TableCell>
              <TableCell align="left">Geo Var</TableCell>
              <TableCell align="left">Pop Var</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {districtIncumbentData[districtPlan].map((row) => (
              // console.log(row)
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.Name}</TableCell>
                <TableCell align="left">{row.Party}</TableCell>
                <TableCell align="left">{row["Geo Var"]}</TableCell>
                <TableCell align="left">{row["Pop Var"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DistrictPlanSummary;
