import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import okIncumbent from "./../data/okIncumbent.json";
import tnIncumbent from "./../data/tnIncumbent.json";
import paIncumbent from "./../data/paIncumbent.json";
import Chart from "react-apexcharts";


function IncumbentTable({ stateValue, district, setDistrict }) {
    const [incumbentData, setIncumbentData] = React.useState([]);
    
    

    React.useEffect(() => {
        switch (stateValue) {
            case "":
                setIncumbentData([]);
            case "pa":
                setIncumbentData(paIncumbent.data);
                break;
            case "tn":
                setIncumbentData(tnIncumbent.data);
                break;
            case "ok":
                setIncumbentData(okIncumbent.data);
                break;
        }

    });

    const handleClick = (event) => {
        console.log(event.target.innerText)
        setDistrict(event.target.innerText - 1);
    }
    function makeData() {
        let arr = [0]
        // incumbentData.forEach(element => {
        //     if (element.Party == "Rep") {
        //         arr[0] += 1
        //     }
        //     else if (element.Party = "Dem") {
        //         arr[1] += 1
        //     }
        // });
        // let 
        // console.log(arr)
        return arr
    }
    const series = 
    [{
        data: makeData()
      }]
    
    

    const options = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val, opt) {
                return val !== 0 ? val : ''
              }
        },
        xaxis: {
          categories: ['Repblican', 'Democrats'],
        }
      }
    
    
      
   
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>District</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Party</TableCell>
                            <TableCell align="right">Election Result&nbsp;(2022)</TableCell>
                            <TableCell align="right">Geographic Var</TableCell>
                            <TableCell align="right">Population Var</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {incumbentData.map((row) => (
                            // console.log(row)
                            <TableRow
                                key={row.District}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                district={row.District}
                            >
                                <TableCell component="th" scope="row"
                                    onClick = {handleClick}>
                                    {row.District}
                                </TableCell>
                                <TableCell align="right" >{row.Name}</TableCell>
                                <TableCell align="right">{row.Party}</TableCell>
                                <TableCell align="right">{row.Win}</TableCell>
                                <TableCell align="right">{row["Pop Variation"]}</TableCell>
                                <TableCell align="right">{row["Geo Variation"]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            { (stateValue != "") && <Chart options={options} series={series} type="bar" height={350} />}
        </>
    )

}

export default IncumbentTable;