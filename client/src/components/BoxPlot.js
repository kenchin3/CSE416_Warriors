import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Ensemble/Ensemble.css";

function BoxPlot({ stateValue, setStateValue, bWData}) {

  const options = {
    chart: {
      type: "boxPlot",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    title: {
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

  return (
    <>
      {bWData && (
        <ReactApexChart
          options={options}
          series={bWData}
          type="boxPlot"
          height={250}
        />
      )}
    </>
  );
}

export default BoxPlot;
