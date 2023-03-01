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
        "District Variation": 0.1,
      },
      {
        Name: "Michael Lee",
        Party: "Democrat",
        "District Variation": 0.4,
      },
      {
        Name: "Francesca Preston",
        Party: "Republican",
        "District Variation": 0.2,
      },
    ],
    2: [
      {
        Name: "Jay Lincoln",
        Party: "Republican",
        "District Variation": 0.67,
      },
      {
        Name: "Michael Karp",
        Party: "Republican",
        "District Variation": 0.42,
      },
      {
        Name: "Jared Goodwin",
        Party: "Republican",
        "District Variation": 0.17,
      },
    ],
    3: [
      {
        Name: "Ali Key",
        Party: "Democrat",
        "District Variation": 0.33,
      },
      {
        Name: "Norah Mcgrath",
        Party: "Democrat",
        "District Variation": 0.82,
      },
      {
        Name: "Jacoby Davenport",
        Party: "Democrat",
        "District Variation": 1.34,
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
              <TableCell align="left">Incumbent District Variation</TableCell>
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
                <TableCell align="left">{row["District Variation"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DistrictPlanSummary;
