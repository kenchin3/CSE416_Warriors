import React from "react";
import ReactApexChart from "react-apexcharts";
import EnsembleSummary from "./EnsembleSummary";
import DistrictEnsembleData from "./DistrictEnsembleData";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
  TablePagination,
} from "@mui/material";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "./DistrictDataSummary.css";

function DistrictPlanSummaryTable({ currData, setDistrict }) {
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(5);

  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  console.log("cd: " + JSON.stringify(currData));

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }
  return (
    <>
      <TableBody>
        {currData &&
          currData.districts.slice(pg * rpg, pg * rpg + rpg).map((row) => (
            <TableRow
              key={row.district}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => {
                setDistrict(parseInt(row.district) - 1);
              }}
            >
              <TableCell align="center">{row.district}</TableCell>
              <TableCell align="center"> </TableCell>
              <TableCell align="center">{row.win_cand}</TableCell>
              <TableCell align="center">{row.win_party}</TableCell>
              <TableCell align="center">{row.geo_var}</TableCell>
              <TableCell align="center">{row.pop_var}</TableCell>
              {/* <TableCell
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
           </TableCell> */}
            </TableRow>
          ))}
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            count={currData ? Object.keys(currData).length : 0}
            rowsPerPage={rpg}
            page={pg}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableBody>
    </>
  );
}
function DistrictPlanSummary({
  district,
  setDistrict,
  stateValue,
  districtPlan,
  ensembleData,
  districtEnsembleData,
}) {
  const [random1Data, setrandom1Data] = React.useState();
  const [random2Data, setrandom2Data] = React.useState();
  const [random3Data, setrandom3Data] = React.useState();
  const [currData, setCurrData] = React.useState();

  React.useEffect(() => {
    if (districtEnsembleData) {
      console.log("test: " + JSON.stringify(districtEnsembleData));
      setrandom1Data(districtEnsembleData[0].data);
      setrandom2Data(districtEnsembleData[1].data);
      setrandom3Data(districtEnsembleData[2].data);
      setCurrData(districtEnsembleData[0].data);
    }
  }, [districtEnsembleData]);

  function getOpenData(districtPlan) {
    let currData;
    if (districtPlan == 1) {
      currData = random1Data;
    } else if (districtPlan == 2) {
      currData = random2Data;
    } else if (districtPlan == 3) {
      currData = random3Data;
    }

    let res = [
      {
        name: "Dem",
        data: currData ? [currData.open_Dem, currData.safe_Dem] : [0, 0],
      },
      {
        name: "Rep",
        data: currData ? [currData.openRep, currData.safe_rep] : [0, 0],
      },
    ];
    return res;
  }
  function getSplitData() {
    let currData;
    if (districtPlan == 1) {
      currData = random1Data;
    } else if (districtPlan == 2) {
      currData = random2Data;
    } else if (districtPlan == 3) {
      currData = random3Data;
    }

    let res = [
      {
        name: "Democrat",
        data: currData ? [currData.open_Dem + currData.safe_dem] : [0],
      },
      {
        name: "Republican",
        data: currData ? [currData.openRep + currData.safe_rep] : [0],
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
    colors: ["#0015BC", "#FF0000", "grey"],
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
                Geometric Variance
              </TableCell>
              <TableCell className={classes.header} align="center">
                Population Variance
              </TableCell>
              {/* <TableCell className={classes.header} align="center">
                Dem Votes
              </TableCell>
              <TableCell className={classes.header} align="center">
                Rep Votes
              </TableCell>
              <TableCell className={classes.header} align="center">
                Safe Seat
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {districtPlan == 1 && (
              <DistrictPlanSummaryTable
                currData={random1Data}
                setDistrict={setDistrict}
              ></DistrictPlanSummaryTable>
            )}
            {districtPlan == 2 && (
              <DistrictPlanSummaryTable
                currData={random2Data}
                setDistrict={setDistrict}
              ></DistrictPlanSummaryTable>
            )}
            {districtPlan == 3 && (
              <DistrictPlanSummaryTable
                currData={random3Data}
                setDistrict={setDistrict}
              ></DistrictPlanSummaryTable>
            )}
          </TableBody>
        </Table>

        {districtPlan == 1 && (
          <DistrictEnsembleData
            district={district}
            setDistrict={setDistrict}
            stateValue={stateValue}
            districtEnsembleData={random1Data}
          />
        )}
        {districtPlan == 2 && (
          <DistrictEnsembleData
            district={district}
            setDistrict={setDistrict}
            stateValue={stateValue}
            districtEnsembleData={random2Data}
          />
        )}
        {districtPlan == 3 && (
          <DistrictEnsembleData
            district={district}
            setDistrict={setDistrict}
            stateValue={stateValue}
            districtEnsembleData={random3Data}
          />
        )}
      </TableContainer>
    </>
  );
}

export default DistrictPlanSummary;
