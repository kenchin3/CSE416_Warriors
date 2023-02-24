import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FormControl, MenuItem, Select, Grid } from '@mui/material';
import EnsembleSummary from './EnsembleSummary';
import DistrictPlanSummary from './DistrictPlanSummary';

function Ensemble({ stateValue, setStateValue }) {
    const [districtPlan, setDistrictPlan] = React.useState(1);

    const handleDistrictPlanChange = (event) => {
        setDistrictPlan(event.target.value)
    }
    const series = [
        {
            type: 'boxPlot',
            data: [
                {
                    x: '1',
                    y: [54, 66, 69, 75, 88]
                },
                {
                    x: '2',
                    y: [43, 65, 69, 76, 81]
                },
                {
                    x: '3',
                    y: [31, 39, 45, 51, 59]
                },
                {
                    x: '4',
                    y: [39, 46, 55, 65, 71]
                },
                {
                    x: '5',
                    y: [29, 31, 35, 39, 44]
                },
                {
                    x: '6',
                    y: [41, 49, 58, 61, 67]
                },
                {
                    x: '7',
                    y: [54, 59, 66, 71, 88]
                }
            ]
        }
    ]

    const options = {
        chart: {
            type: 'boxPlot',
            height: 350
        },
        title: {
            text: 'Basic BoxPlot Chart',
            align: 'left'
        },
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: '#5C4742',
                    lower: '#A5978B'
                }
            }
        }
    }
    const handleStateChange = (event) => {
        setStateValue(event.target.value);
    };

    return (
        <>
            <h1>
                ensemble
            </h1>

            <Grid container spacing={1} component="span">
                <Grid item xs={6} md={6} component="span">
                    <FormControl className="form" size="small">
                        <Select
                            labelId="inputLabel"
                            className="select"
                            displayEmpty
                            value={stateValue}
                            onChange={handleStateChange}
                        >
                            <MenuItem value={stateValue}>
                                <em>Select State</em>
                            </MenuItem>
                            <MenuItem value={"pa"}>Pennsylvania</MenuItem>
                            <MenuItem value={"tn"}>Tennessee</MenuItem>
                            <MenuItem value={"ok"}>Oklahoma</MenuItem>
                        </Select>
                    </FormControl>

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

                    <EnsembleSummary />
                    <DistrictPlanSummary />
                </Grid>
                <Grid item xs={6} md={6}>
                    {/* <div id="chart"> */}
                    <ReactApexChart options={options} series={series} type="boxPlot" height={350} />
                    {/* </div> */}
                </Grid>
            </Grid>





        </>

    )




}

export default Ensemble;