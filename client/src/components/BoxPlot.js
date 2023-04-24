import React from "react";
import ReactApexChart from "react-apexcharts";
//import "./Ensemble.css";

function BoxPlot({ stateValue, setStateValue, ensembleData }) {
  const [boxPlotData, setboxPlotData] = React.useState();
  React.useEffect(() => {
    if (ensembleData) {
      let data = ensembleData.boxAndWhiskers[0]["data"];
      let d = [];
      for (let i = 0; i < data.length; i++) {
        let row = { x: i.toString(), y: data[i] };
        d.push(row);
      }
      let bW = [{ type: "boxPlot", name: "Ensemble", data: d }];
      setboxPlotData(bW);
    }
  }, [ensembleData]);

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
      {boxPlotData && (
        <ReactApexChart
          options={options}
          series={boxPlotData}
          type="boxPlot"
          height={250}
        />
      )}
    </>
  );
}

export default BoxPlot;
