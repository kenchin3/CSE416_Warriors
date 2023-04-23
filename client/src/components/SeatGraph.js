import React from "react";
import okIncumbent from "./../data/okIncumbent.json";
import tnIncumbent from "./../data/tnIncumbent.json";
import paIncumbent from "./../data/paIncumbent.json";
import "./SeatGraph.css";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

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
    return [
      { name: "Democrat ", value: arr[0], fill: "blue" },
      { name: "Republican ", value: arr[1], fill: "red" },
      { name: "Open ", value: arr[2], fill: "grey" },
    ];
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={125}>
        <BarChart
          data={getData()}
          layout="vertical"
          barCategoryGap={3}
          margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
        >
          <XAxis type="number" />
          <YAxis
            type="category"
            width={150}
            padding={{ left: 30 }}
            dataKey="name"
          />

          <Bar dataKey="value" fill="fill" radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <Typography className="summaryInformation"></Typography>
      <div className="summaryInformationLocaiton">
        <div className="summaryInformationFont">
          <span style={{ fontWeight: 550 }}> Number of Districts: </span>{" "}
          {incumbentData.length}
        </div>
      </div>
    </>
  );
}

export default SeatGraph;
