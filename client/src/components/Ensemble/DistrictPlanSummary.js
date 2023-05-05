import React from "react";
import ReactApexChart from "react-apexcharts";
import EnsembleSummary from "./EnsembleSummary";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
} from "@mui/material";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "./DistrictDataSummary.css";
function DistrictPlanSummeryTable({currData}) {
  return(
    <>
  { 
    currData &&
    currData.districts.map((row) => 
           <TableRow
           key={row.Name}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
           <TableCell
             align="center"
           >
             {row.district}
           </TableCell>
           <TableCell
             align="center"
           >
             { " "}
           </TableCell>
           <TableCell
             align="center"
           >
             {row.win_cand}
           </TableCell>
           <TableCell
             align="center"
           >
             {row.win_party}
           </TableCell>
           <TableCell
             align="center"
           >
             {row.geo_diff}
           </TableCell>
           <TableCell
             align="center"
           >
             {row.pop_diff}
           </TableCell>
           <TableCell
             align="center"
           >
             {row.dem_split}
           </TableCell>
           <TableCell
             align="center"
           >
             {row.rep_split}
           </TableCell>
           <TableCell
             align="center"
           >
             {row.safe_seat}
           </TableCell>
         </TableRow>
    
    
    )}
     </>
  )

}
function DistrictPlanSummary({  stateValue, districtPlan, ensembleData,districtEnsembleData  }) {
  const [random1Data, setrandom1Data] = React.useState();
  const [random2Data, setrandom2Data] = React.useState();
  const [random3Data, setrandom3Data] = React.useState();
  const [currData, setCurrData] = React.useState();

  React.useEffect(() => {
    if (districtEnsembleData) {
      setrandom1Data(districtEnsembleData[0].data);
      setrandom2Data(districtEnsembleData[1].data);
      setrandom3Data(districtEnsembleData[2].data);
      setCurrData(districtEnsembleData[0].data)
    }

  }, [districtEnsembleData]);

  React.useEffect(() => {
    if (districtPlan == 1) {setCurrData(random1Data) }
    else if (districtPlan == 2) {setCurrData(random2Data) }
    else if (districtPlan == 3) {setCurrData(random3Data) }

  }, [districtPlan]);

  function getOpenData(districtPlan) {
    let currData;
    if (districtPlan == 1) {currData=random1Data}
    else if (districtPlan == 2) {currData=random2Data}
    else if (districtPlan == 3) {currData=random3Data}
    
    let res =  [{
      name: 'Dem',
      data: currData ? [currData.open_Dem, currData.safe_Dem] : [0,0]
    }, {
      name: 'Rep',
      data: currData ? [currData.openRep, currData.safe_rep] : [0,0]
    }];
    return res;
  }
  function getSplitData() {
    let currData;
    if (districtPlan == 1) {currData=random1Data}
    else if (districtPlan == 2) {currData=random2Data}
    else if (districtPlan == 3) {currData=random3Data}

    let res = [
      {
        name: "Democrat",
        data: currData ? [currData.open_Dem + currData.safe_dem] : [0],
      },
      {
        name: "Republican",
        data: currData ? [currData.openRep+currData.safe_rep] : [0],
      },
      {
        name: "Open",
        data: [0],
      },
    ];
   
    return res;
  }

  const useStyles = makeStyles({
    header: {
      color: "black",
      paddingLeft: "40px",
      paddingRight: "40px",
      lineHeight: "18px",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "15px",
      fontWeight: 550,
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
  });

  const seatGraphOptions = {
    chart: {
      type: "bar",
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
              fontWeight: 550,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
    },
    xaxis: {
      categories: ["Open", "Safe"],
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

  const classes = useStyles();
  // return(<>
  // </>)
  return (
    <>
        <EnsembleSummary
            stateValue={stateValue}
            districtPlan={districtPlan}
            ensembleData={ensembleData}
            districtEnsembleData={districtEnsembleData} 
          />
     <ReactApexChart
        options={seatGraphOptions}
        series={getOpenData(districtPlan)}
        type="bar"
        height="110"
      />

    <ReactApexChart
        options={seatGraphOptions}
        series={getSplitData(districtPlan)}
        type="bar"
        height="110"
      />
     
      <div className="districtDataSummaryFont">
        <span style={{ fontWeight: 550, fontSize: 15 }}>
          {" "}
          Number of Districts:{" "}
        </span>
        {random1Data ? random1Data.districts.length : 0}
        <br />
        <br />
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header} align="center">
                District
              </TableCell>
              <TableCell className={classes.header} align="center">
                Incumbent
              </TableCell>
              <TableCell className={classes.header} align="center">
                Winner
              </TableCell>
              <TableCell className={classes.header} align="center">
                Winner Party
              </TableCell>
              <TableCell className={classes.header} align="center">
                Geometric Difference
              </TableCell>
              <TableCell className={classes.header} align="center">
                Population Difference
              </TableCell>
              <TableCell className={classes.header} align="center">
                Dem Votes
              </TableCell>
              <TableCell className={classes.header} align="center">
                Rep Votes
              </TableCell>
              <TableCell className={classes.header} align="center">
                Safe Seat
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(districtPlan == 1) && <DistrictPlanSummeryTable currData={random1Data}></DistrictPlanSummeryTable>}
          {(districtPlan == 2) && <DistrictPlanSummeryTable currData={random2Data}></DistrictPlanSummeryTable>}
          {(districtPlan == 3) && <DistrictPlanSummeryTable currData={random3Data}></DistrictPlanSummeryTable>}
         </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DistrictPlanSummary;
