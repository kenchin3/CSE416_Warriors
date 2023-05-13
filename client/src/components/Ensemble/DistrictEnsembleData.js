import React from "react";
import ReactApexChart from "react-apexcharts";

function districtEnsembleData({ district, districtEnsembleData }) {
  var barOptions = {
    title: {
      text: "Demographic Change",
      align: "middle",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: "#F15B46",
            },
            {
              from: -45,
              to: 0,
              color: "#FEB019",
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: "Percent Change",
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(3);
        },
      },
    },
    xaxis: {
      categories: ["White", "Black", "Hispanic", "Asian"],
      labels: {
        rotate: -90,
      },
    },
  };

  var pieOptions = {
    title: {
      text: "Simulated Election Results",
      align: "middle",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    colors: ["#FF0000", "#0015BC"],
    labels: ["Republican", "Democratic"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      <div>
        {district !== -1 && districtEnsembleData && (
          <div className="districtDataFont">
            <span style={{ fontWeight: 550, fontSize: 15 }}> District: </span>
            {parseInt(
              districtEnsembleData.districts[district]["district"]
            )}{" "}
            <br />
            <span style={{ fontWeight: 550, fontSize: 15 }}>
              {" "}
              Projected Winner:{" "}
            </span>
            {districtEnsembleData.districts[district]["win_cand"]} <br />
            <span style={{ fontWeight: 550, fontSize: 15 }}>
              {" "}
              Winner Party:{" "}
            </span>
            {districtEnsembleData.districts[district]["win_party"]} <br />
            <span style={{ fontWeight: 550, fontSize: 15 }}> Safe Seat: </span>
            {districtEnsembleData.districts[district]["safe_seat"]}
            {}
            <br />
          </div>
        )}
      </div>
      {district !== -1 && districtEnsembleData && (
        <ReactApexChart
          options={barOptions}
          series={[
            {
              name: "Percent Change",
              data: [
                districtEnsembleData.districts[district]["wht_diff"],
                districtEnsembleData.districts[district]["blk_diff"],
                districtEnsembleData.districts[district]["hsp_diff"],
                districtEnsembleData.districts[district]["asn_diff"],
              ],
            },
          ]}
          type="bar"
          height="400"
          width="400"
        />
      )}
      {district !== -1 && districtEnsembleData && (
        <ReactApexChart
          options={pieOptions}
          series={[
            districtEnsembleData.districts[district]["rep_split"],
            districtEnsembleData.districts[district]["dem_split"],
          ]}
          type="pie"
          height="400"
          width="400"
        />
      )}
    </>
  );
}

export default districtEnsembleData;
