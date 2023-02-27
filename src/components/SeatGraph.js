import React from "react";
import okIncumbent from "./../data/okIncumbent.json";
import tnIncumbent from "./../data/tnIncumbent.json";
import paIncumbent from "./../data/paIncumbent.json";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SeatGraph({ stateValue, rowSize }) {
  function getData() {
    let incumbentData = {};

    switch (stateValue) {
      case "":
        return [
          { name: "Democrat", value: 0, color: "blue" },
          { name: "Republican", value: 0, color: "red" },
          { name: "Open", value: 0, color: "grey" },
        ];
      case "pa":
        incumbentData = paIncumbent.data;
        break;
      case "tn":
        incumbentData = tnIncumbent.data;
        break;
      case "ok":
        incumbentData = okIncumbent.data;
        break;
    }
    let arr = [0, 0, 0];
    incumbentData.forEach((element) => {
      if (element.Win == "Open") {
        arr[2] += 1;
      } else if (element.Party == "Rep") {
        arr[1] += 1;
      } else {
        arr[0] += 1;
      }
    });
    return [
      { name: "Democrat", value: arr[0], fill: "blue" },
      { name: "Republican", value: arr[1], fill: "red" },
      { name: "Open", value: arr[2], fill: "grey" },
    ];
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
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

          <Bar
            dataKey="value"
            fill="fill"
            radius={[0, 10, 10, 0]}
            // label={<CustomizedLabel />}
          />
        </BarChart>
      </ResponsiveContainer>
      <span className="summaryInformation">Number of Districts: {rowSize}</span>
    </>
  );
}

export default SeatGraph;
