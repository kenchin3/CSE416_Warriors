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
import makeStyles from "@material-ui/core/styles/makeStyles";
import "./DistrictPlanSummary.css";
function DistrictPlanSummary({ districtPlan }) {
  const [districtIncumbentData, setDistrictIncumbentData] = React.useState({
    1: [
      {
        Name: "Joe Smith",
        Party: "Republican",
        "Geo Var": 0.1,
        "Pop Var": 0.3,
      },
      {
        Name: "Michael Lee",
        Party: "Democrat",
        "Geo Var": 0.4,
        "Pop Var": 0.3,
      },
      {
        Name: "Francesca Preston",
        Party: "Republican",
        "Geo Var": 0.2,
        "Pop Var": 0.3,
      },
    ],
    2: [
      {
        Name: "Jay Lincoln",
        Party: "Republican",
        "Geo Var": 0.67,
        "Pop Var": 0.3,
      },
      {
        Name: "Michael Karp",
        Party: "Republican",
        "Geo Var": 0.42,
        "Pop Var": 0.3,
      },
      {
        Name: "Jared Goodwin",
        Party: "Republican",
        "Geo Var": 0.17,
        "Pop Var": 0.3,
      },
    ],
    3: [
      {
        Name: "Ali Key",
        Party: "Democrat",
        "Geo Var": 0.33,
        "Pop Var": 0.3,
      },
      {
        Name: "Norah Mcgrath",
        Party: "Democrat",
        "Geo Var": 0.82,
        "Pop Var": 0.3,
      },
      {
        Name: "Jacoby Davenport",
        Party: "Democrat",
        "Geo Var": 1.34,
        "Pop Var": 0.3,
      },
    ],
  });

  const useStyles = makeStyles({
    header: {
      color: "black",
      paddingLeft: "40px",
      paddingRight: "40px",
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
      <div className="districtDataSummaryFont">
        <span style={{ fontWeight: 550, fontSize: 15 }}>
          {" "}
          Number of Districts:{" "}
        </span>
        {districtIncumbentData[districtPlan].length}
        <br />
        <br />
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} align="left">
                Incumbent
              </TableCell>
              <TableCell className={classes.header} align="left">
                Party
              </TableCell>
              <TableCell className={classes.header} align="left">
                Geo Var
              </TableCell>
              <TableCell className={classes.header} align="left">
                Pop Var
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {districtIncumbentData[districtPlan].map((row) => (
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{
                    color: row.Party === "Republican" ? "#D70040" : "blue",
                  }}
                  align="left"
                >
                  {row.Name}
                </TableCell>
                <TableCell
                  style={{
                    color: row.Party === "Republican" ? "#D70040" : "blue",
                  }}
                  align="left"
                >
                  {row.Party}
                </TableCell>
                <TableCell
                  style={{
                    color: row.Party === "Republican" ? "#D70040" : "blue",
                  }}
                  align="left"
                >
                  {row["Geo Var"]}
                </TableCell>
                <TableCell
                  style={{
                    color: row.Party === "Republican" ? "#D70040" : "blue",
                  }}
                  align="left"
                >
                  {row["Pop Var"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DistrictPlanSummary;
