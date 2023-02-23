import React from "react";
import okIncumbent from "./../data/okIncumbent.json";
import tnIncumbent from "./../data/tnIncumbent.json";
import paIncumbent from "./../data/paIncumbent.json";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function SeatGraph({stateValue}) {
  // const [data, setData] = React.useState(
  //   [{"name":"Democrat","value": 0, "color": "blue"},
  //   {"name":"Republican","value": 0, "color": "red"},
  //   {"name":"Open","value":0, "color": "grey"}]);

  function getData()  {
    let incumbentData = {}

    switch (stateValue) {
      case "":
        return [{"name":"Democrat","value": 0, "color": "blue"},
        {"name":"Republican","value": 0, "color": "red"},
        {"name":"Open","value":0, "color": "grey"}];
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
    let arr = [0,0,0];
    incumbentData.forEach(element => {
        if (element.Party == "Rep") {
            arr[0] += 1
        }
        else if (element.Party = "Dem") {
            arr[1] += 1
        }
        else {
          arr[2] += 1
        }
      })
    return (
      [{"name":"Democrat","value": arr[0], "color": "blue"},
      {"name":"Republican","value": arr[1], "color": "red"},
      {"name":"Open","value": arr[2], "color": "grey"}]);
    
  };

  // const data = [{"name":"Democrat","value":9, "color": "blue"},{"name":"Republican","value":6, "color": "blue"},{"name":"Open","value":0, "color": "grey"}]

    return (
        <>
          {/* <h1>
            kdhjaslsdhfjklashdkfhajsldkf
          </h1> */}
          <ResponsiveContainer width="100%" height={300}>
          <BarChart 
            data={getData()}
            layout="vertical" barCategoryGap={1}
            margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
          <XAxis type="number" hide />
          <YAxis type="category" width={150} padding={{ left: 20 }} dataKey="name"/>
                
          <Bar 
              dataKey="value" 
              fill="black"
              // label={<CustomizedLabel />}
              />
        </BarChart>
      </ResponsiveContainer>
        </>
        
      );
}


export default SeatGraph;