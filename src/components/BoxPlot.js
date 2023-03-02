import React from "react";
import ReactApexChart from "react-apexcharts";
import EnsembleSummary from "./EnsembleSummary";
import DistrictPlanSummary from "./DistrictPlanSummary";
import "./Ensemble.css";

function BoxPlot({ stateValue, setStateValue }) {
  const paSeries = [
    {
      type: "boxPlot",
      name: "Ensemble",
      data: [
        {
          x: "1",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "2",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "3",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "4",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "5",
          y: [29, 31, 35, 39, 44],
        },
        {
          x: "6",
          y: [41, 49, 58, 61, 67],
        },
        {
          x: "7",
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
    {
      name: "2022 Incumbents",
      type: "scatter",
      data: [
        {
          x: "1",
          y: 32,
        },
        {
          x: "2",
          y: 25,
        },
        {
          x: "3",
          y: 64,
        },
        {
          x: "4",
          y: 27,
        },
        {
          x: "5",
          y: 78,
        },
        {
          x: "6",
          y: 15,
        },
        {
          x: "7",
          y: 19,
        },
      ],
    },
  ];

  const okSeries = [
    {
      type: "boxPlot",
      name: "Ensemble",
      data: [
        {
          x: "1",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "2",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "3",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "4",
          y: [29, 31, 35, 39, 44],
        },
        {
          x: "5",
          y: [54, 59, 66, 71, 88],
        },
        {
          x: "6",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "7",
          y: [41, 49, 58, 61, 67],
        },
      ],
    },
    {
      name: "2022 Incumbents",
      type: "scatter",
      data: [
        {
          x: "1",
          y: 23,
        },
        {
          x: "2",
          y: 72,
        },
        {
          x: "3",
          y: 94,
        },
        {
          x: "4",
          y: 17,
        },
        {
          x: "5",
          y: 43,
        },
        {
          x: "6",
          y: 83,
        },
        {
          x: "7",
          y: 70,
        },
      ],
    },
  ];

  const tnSeries = [
    {
      type: "boxPlot",
      name: "Ensemble",
      data: [
        {
          x: "1",
          y: [34, 56, 66, 69, 88],
        },
        {
          x: "2",
          y: [14, 29, 33, 51, 59],
        },
        {
          x: "3",
          y: [34, 46, 50, 75, 83],
        },
        {
          x: "4",
          y: [19, 25, 31, 34, 44],
        },
        {
          x: "5",
          y: [44, 53, 62, 76, 81],
        },
        {
          x: "6",
          y: [33, 43, 46, 55, 63],
        },
        {
          x: "7",
          y: [13, 34, 44, 54, 62],
        },
      ],
    },
    {
      name: "2022 Incumbents",
      type: "scatter",
      data: [
        {
          x: "1",
          y: 13,
        },
        {
          x: "2",
          y: 10,
        },
        {
          x: "3",
          y: 91,
        },
        {
          x: "4",
          y: 15,
        },
        {
          x: "5",
          y: 23,
        },
        {
          x: "6",
          y: 85,
        },
        {
          x: "7",
          y: 87,
        },
      ],
    },
  ];

  const options = {
    chart: {
      type: "boxPlot",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    title: {
      // text: stateValue.toUpperCase() + " District Plan Ensembles",
      align: "left",
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: "#055C9D",
          lower: "#0E86D4",
        },
      },
    },
    legend: {
      labels: {
        colors: ["brown", "red"],
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: true,
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
        options={options}
        series={getSeries()}
        type="boxPlot"
        height={300}
      />
    </>
  );
}

export default BoxPlot;
