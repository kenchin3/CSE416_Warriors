import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Ensemble.css";

function BarGraph({ stateValue, setStateValue }) {
  const okSeries = {
    series: [
      {
        data: [6, 8, 14, 12, 13, 11, 10, 13, 11, 7],
      },
    ],
    options: {
      chart: {
        height: 100,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [
          "[0-10)",
          "[10-20)",
          "[20-30)",
          "[30-40)",
          "[40-50)",
          "[50-60)",
          "[60-70)",
          "[70-80)",
          "[80-90)",
          "[90-100)",
        ],
      },
    },
  };

  const tnSeries = {
    series: [
      {
        data: [11, 10, 9, 8, 9, 13, 8, 11, 10, 11],
      },
    ],
    options: {
      chart: {
        height: 100,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [
          "[0-10)",
          "[10-20)",
          "[20-30)",
          "[30-40)",
          "[40-50)",
          "[50-60)",
          "[60-70)",
          "[70-80)",
          "[80-90)",
          "[90-100)",
        ],
      },
    },
  };
  const paSeries = {
    series: [
      {
        data: [11, 13, 9, 7, 8, 12, 10, 11, 10, 9],
      },
    ],
    options: {
      chart: {
        height: 100,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [
          "[0-10)",
          "[10-20)",
          "[20-30)",
          "[30-40)",
          "[40-50)",
          "[50-60)",
          "[60-70)",
          "[70-80)",
          "[80-90)",
          "[90-100)",
        ],
      },
    },
  };

  function getSeries() {
    switch (stateValue) {
      case "":
        return paSeries;
      case "pa":
        return paSeries;
      case "tn":
        return tnSeries;
      case "ok":
        return okSeries;
      default:
        return null;
    }
  }

  return (
    <>
      <ReactApexChart
        options={getSeries().options}
        series={getSeries().series}
        type="bar"
        height={100}
      />
    </>
  );
}

export default BarGraph;
