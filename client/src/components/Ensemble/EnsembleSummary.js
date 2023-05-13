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
import ReactApexChart from "react-apexcharts";

function EnsembleSummary({
  stateValue,
  ensembleData,
  districtPlan,
  random1Data,
  random2Data,
  random3Data,
}) {
  const seatGraphOptionsTotal = {
    colors: ["#0015BC", "#FF0000"],
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "11px",
              fontWeight: 550,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
    },
    xaxis: {
      categories: ["Total Seats"],
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 30,
    },
  };

  const seatGraphOptions = {
    colors: ["#0015BC", "#FF0000"],
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "11px",
              fontWeight: 550,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
    },
    xaxis: {
      categories: ["Open", "Safe"],
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 30,
    },
  };

  function getOpenData(districtPlan) {
    let currData;
    if (districtPlan == 1) {
      currData = random1Data;
    } else if (districtPlan == 2) {
      currData = random2Data;
    } else if (districtPlan == 3) {
      currData = random3Data;
    }

    let res = [
      {
        name: "Dem",
        data: currData ? [currData.open_dem, currData.safe_dem] : [0, 0],
      },
      {
        name: "Rep",
        data: currData ? [currData.open_rep, currData.safe_rep] : [0, 0],
      },
    ];
    return res;
  }
  function getSplitData() {
    let currData;
    if (districtPlan == 1) {
      currData = random1Data;
    } else if (districtPlan == 2) {
      currData = random2Data;
    } else if (districtPlan == 3) {
      currData = random3Data;
    }

    let res = [
      {
        name: "Democrat",
        data: currData ? [currData.open_dem + currData.safe_dem] : [0],
      },
      {
        name: "Republican",
        data: currData ? [currData.open_rep + currData.safe_rep] : [0],
      },
    ];

    return res;
  }

  const useStyles = makeStyles({
    header: {
      color: "black",
      paddingLeft: "auto",
      paddingRight: "auto",
      lineHeight: "12px",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "13px",
      fontWeight: 550,
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
  });

  const classes = useStyles();

  return (
    <>
      {ensembleData && (
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
      )}

      <ReactApexChart
        options={seatGraphOptions}
        series={getOpenData(districtPlan)}
        type="bar"
        height="130"
      />

      <ReactApexChart
        options={seatGraphOptionsTotal}
        series={getSplitData(districtPlan)}
        type="bar"
        height="110"
      />
    </>
  );
}

export default EnsembleSummary;
