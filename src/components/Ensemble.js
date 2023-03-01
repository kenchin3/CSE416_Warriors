import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  FormControl,
  MenuItem,
  Select,
  Grid,
  Typography,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import EnsembleSummary from "./EnsembleSummary";
import DistrictPlanSummary from "./DistrictPlanSummary";
import "./Ensemble.css";

function Ensemble({ stateValue, setStateValue }) {
  const [districtPlan, setDistrictPlan] = React.useState(1);
  // const [ensembleData, setEnsembleData] = React.useState(paSeries);
  const paSeries = [
    {
      type: "boxPlot",
      name: "districts",
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
      name: "districts",
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
      name: "districts",
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
    }
  };

  const handleDistrictPlanChange = (event) => {
    setDistrictPlan(event.target.value);
  };

  const options = {
    chart: {
      type: "boxPlot",
      height: 350,
    },
    title: {
      text: stateValue.toUpperCase() + " District Plan Ensembles",
      align: "left",
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: "#5C4742",
          lower: "#A5978B",
        },
      },
    },
    legend: {
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
  };

  return (
    <>
      <Grid container spacing={1} component="span">
        <Grid item xs={6} md={6} component="span">
          <Paper className="paper1" elevation={10}>
            <FormControl className="form" size="small">
              <Select
                labelId="inputLabel"
                className="select"
                displayEmpty
                value={stateValue}
                onChange={handleStateChange}
              >
                <MenuItem value={""}>
                  <em>Select State</em>
                </MenuItem>
                <MenuItem value={"pa"}>Pennsylvania</MenuItem>
                <MenuItem value={"tn"}>Tennessee</MenuItem>
                <MenuItem value={"ok"}>Oklahoma</MenuItem>
              </Select>
            </FormControl>
          </Paper>

          <Paper className="paper2" elevation={10}>
            <FormControl className="paper2Content">
              <span className="paper22Ensemble">
                <RadioGroup
                  defaultValue="20"
                  name="radio-buttons-group"
                  row={true}
                // onChange={ }
                >
                  <span className="paper2HeaderEnsemble">
                    Variation Comparison:
                  </span>
                  <span className="paper2OptionsEnsemble">
                    <FormControlLabel
                      className="formControlLabelEnsemble"
                      value="Geometric Variation"
                      control={<Radio />}
                      label="Geometric"
                    />
                    <FormControlLabel
                      className="formControlLabelEnsemble"
                      value="Population Variation"
                      control={<Radio />}
                      label="Population"
                    />
                  </span>
                </RadioGroup>
              </span>
            </FormControl>
          </Paper>

          <EnsembleSummary stateValue={stateValue} />
          <Typography variant="p">Available SeaWulf Plans</Typography>
          <FormControl className="form" size="small">
            <Select
              labelId="inputLabel"
              className="select"
              displayEmpty
              value={districtPlan}
              onChange={handleDistrictPlanChange}
            >
              <MenuItem value={1}>Plan 1</MenuItem>
              <MenuItem value={2}>Plan 2</MenuItem>
              <MenuItem value={3}>Plan 3</MenuItem>
            </Select>
          </FormControl>
          <DistrictPlanSummary districtPlan={districtPlan} />
        </Grid>
        <Grid item xs={6} md={6}>
          <ReactApexChart
            options={options}
            series={getSeries()}
            type="boxPlot"
            height={350}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Ensemble;
