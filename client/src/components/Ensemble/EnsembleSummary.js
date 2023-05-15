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
import Grid from "@mui/material/Grid";

function EnsembleSummary({
  stateValue,
  ensembleData,
  districtPlan,
  random1Data,
  random2Data,
  random3Data,
  district22,
}) {
  const seatGraphOptions2022 = {
    title: {
      text: "2022 Safe Seats",
      align: "left",
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        fontFamily: "Helvetica",
        color: "#000000",
      },
    },
    colors: ["#0015BC", "#FF0000", "grey"],
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

  const seatGraphOptions2022Total = {
    title: {
      text: "2022 Party Split",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        fontFamily: "Helvetica",
        color: "#263238",
      },
    },
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

  const seatGraphOptionsTotal = {
    title: {
      text: "District Plan " + districtPlan + " Party Split",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        fontFamily: "Helvetica",
        color: "#263238",
      },
    },
    colors: ["#0015BC", "#FF0000"],
    title: {
      text: "Republican/Democratic Splits",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        fontFamily: "Helvetica",
        color: "#263238",
      },
    },
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
    title: {
<<<<<<< HEAD
      text: "Safe Seats",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
=======
      text: "District Plan " + districtPlan + " Safe Seats",
      align: "left",
      offsetX: 0,
      offsetY: 0,
>>>>>>> 7bb8ab4c0f2bc6009acd257c56e4640ccb0cacf1
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        fontFamily: "Helvetica",
<<<<<<< HEAD
        color: "#263238",
=======
        color: "#000000",
>>>>>>> 7bb8ab4c0f2bc6009acd257c56e4640ccb0cacf1
      },
    },
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
                  Average Population Variation
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
<<<<<<< HEAD
                  {"5,000"}
=======
                  {"2,000"}
>>>>>>> 7bb8ab4c0f2bc6009acd257c56e4640ccb0cacf1
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
      <div className="ensembleSummaryFiller" />
      <Grid container spacing={0} component="span">
        <Grid item xs={6} component="span">
          <ReactApexChart
            options={seatGraphOptions}
            series={getOpenData(districtPlan)}
            type="bar"
            height="140"
          />
        </Grid>
        <Grid item xs={6} component="span">
          <ReactApexChart
            options={seatGraphOptionsTotal}
            series={getSplitData(districtPlan)}
            type="bar"
            height="130"
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} component="span">
        <Grid item xs={6} component="span">
          <ReactApexChart
            options={seatGraphOptions2022}
            series={[
              {
                name: "Democrat",
                data: [district22.open_dem, district22.safe_dem],
              },
              {
                name: "Republican",
                data: [district22.open_rep, district22.safe_rep],
              },
            ]}
            type="bar"
            height="140"
          />
        </Grid>
        <Grid item xs={6} component="span">
          <ReactApexChart
            options={seatGraphOptions2022Total}
            series={[
              {
                name: "Democrat",
                data: [district22.dem_split],
              },
              {
                name: "Republican",
                data: [district22.rep_split],
              },
            ]}
            type="bar"
            height="130"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default EnsembleSummary;
