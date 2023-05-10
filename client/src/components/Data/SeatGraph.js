import React from "react";
import ReactApexChart from "react-apexcharts";

function SeatGraph({ stateValue, district22 }) {

  
  const seatGraphOptions1 = {
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
            options={seatGraphOptions1}
            series={[
              {
                name: "Dem",
                data: [district22.open_dem, district22.safe_dem],
              },
              {
                name: "Rep",
                data: [district22.open_rep, district22.safe_rep],
              },
            ]}
            type="bar"
            height="130"
      />
      <ReactApexChart
        options={seatGraphOptions}
        series={[
          {
            name: "Democrat",
            data: [district22.dem_split],
          },
          {
            name: "Republican",
            data: [district22.rep_split],
          }
        ] }
        type="bar"
        height="110"
      />
    </>
  );
}

export default SeatGraph;
