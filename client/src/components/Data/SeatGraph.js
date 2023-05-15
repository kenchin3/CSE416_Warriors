import React from "react";
import ReactApexChart from "react-apexcharts";

function SeatGraph({ stateValue, district22 }) {
  const seatGraphOptions2022 = {
    title: {
      text: "Safe Seats",
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
<<<<<<< HEAD
      text: "Republican/Democratic Splits",
=======
      text: "Party Split",
>>>>>>> 7bb8ab4c0f2bc6009acd257c56e4640ccb0cacf1
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

  return (
    <>
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
        height="150"
      />
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
        height="135"
      />
    </>
  );
}

export default SeatGraph;
