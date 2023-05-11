import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Ensemble/Ensemble.css";
import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function BoxPlot({ stateValue, setStateValue, ensembleData}) {
  const [bWFilter, setbWFilter] = React.useState("geometric");
  const [geoBW, setgeoBW] = React.useState();
  const [popBW, setpopBW] = React.useState();

  React.useEffect(() => {

    if (ensembleData) {
      let data = ensembleData.boxAndWhiskers[0]["data"];
      let d = [];
      for (let i = 0; i < data.length; i++) {
        let row = { x: i.toString(), y: data[i] };
        d.push(row);
      }

      data = ensembleData.boxAndWhiskers[0]["dots22"];
      let dots = [];
      for (let i = 0; i < data.length; i++) {
        let row = { x: i.toString(), y: data[i] };
        dots.push(row);
      }
      let bW = [
        { type: "boxPlot", name: "Ensemble", data: d },
        { type: "scatter", name: "2022 Incumbents", data: dots },
      ];
      // console.log(bW);
      setgeoBW(bW);
    }
  }, [ensembleData]);

  
  React.useEffect(() => {

    if (ensembleData) {
        let data = ensembleData.boxAndWhiskers[1]["data"];
            let d = [];
            for (let i = 0; i < data.length; i++) {
              let row = { x: i.toString(), y: data[i] };
              d.push(row);
            }
            data = ensembleData.boxAndWhiskers[0]["dots22"];
            let dots = [];
            for (let i = 0; i < data.length; i++) {
              let row = { x: i.toString(), y: data[i] };
              dots.push(row);
            }
            let bW = [
              { type: "boxPlot", name: "Ensemble", data: d },
              { type: "scatter", name: "2022 Incumbents", data: dots },
            ];
            setpopBW(bW);
      }
    }, [ensembleData]);

  const handleBWFilter = (event) => {
    setbWFilter(event.target.value);
  };


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
    yaxis: {
      title: {
        text: 'Variation',
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(3);
        }
      }
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
    <FormControl className="paper2ContentEnsemble">
          <span className="paper2InsideEnsemble">
            <RadioGroup
              defaultValue="geometric"
              name="radio-buttons-group"
              row={true}
              onChange={handleBWFilter}
            >
              <span className="paper2HeaderEnsemble">
                Variation Comparison:
              </span>
              <span className="paper2OptionsEnsemble">
                <FormControlLabel
                  className="formControlLabelEnsemble"
                  value="geometric"
                  control={<Radio />}
                  label="geometric"
                />
                <FormControlLabel
                  className="formControlLabelEnsemble"
                  value="population"
                  control={<Radio />}
                  label="population"
                />
              </span>
            </RadioGroup>
          </span>
        </FormControl>

      {geoBW && bWFilter == "geometric" && (
        <ReactApexChart
          options={options}
          series={geoBW}
          type="boxPlot"
          height={250}
        />
      )}

      {popBW && bWFilter == "population" && (
        <ReactApexChart
          options={options}
          series={popBW}
          type="boxPlot"
          height={250}
        />
      )}
    </>
  );
}

export default BoxPlot;
