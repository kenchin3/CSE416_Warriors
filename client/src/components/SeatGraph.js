import React from "react";
import ReactApexChart from "react-apexcharts";

function SeatGraph({ stateValue, incumbentData }) {
  function getData() {
    let arr = [0, 0, 0];
    incumbentData.forEach((element) => {
      if (element.electionResult === "Open") {
        arr[2] += 1;
      } else if (element.party === "REP") {
        arr[1] += 1;
      } else {
        arr[0] += 1;
      }
    });
    let res = [
      {
        name: "Democrat",
        data: [arr[0]],
      },
      {
        name: "Republican",
        data: [arr[1]],
      },
      {
        name: "Open",
        data: [arr[2]],
      },
    ];
    return res;
  }

  const seatGraphOptions = {
    chart: {
      type: "bar",
      // height: 120,
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
              fontWeight: 700,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
    },
    xaxis: {
      categories: [stateValue.toUpperCase()],
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
        options={seatGraphOptions}
        series={getData()}
        type="bar"
        height="110"
      />
    </>
  );
}

export default SeatGraph;
