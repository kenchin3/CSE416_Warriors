import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@mui/material/Paper";

function DistrictData({
  district,
  setDistrict,
  stateValue,
  incumbentTableData,
}) {
  const [districtData, setdistrictData] = React.useState();

  React.useEffect(() => {
    if (incumbentTableData) {
      setdistrictData(incumbentTableData);
    }
  }, [incumbentTableData]);

  const useStyles = makeStyles({
    header: {
      color: "black",
      paddingLeft: "auto",
      paddingRight: "auto",
      lineHeight: "13px",
      fontSize: "13px",
      fontWeight: 550,
      fontFamily: ["Helvetica"],
    },
    content: {
      color: "black",
      paddingLeft: "auto",
      paddingRight: "auto",
      lineHeight: "13px",
      fontSize: "13px",
      fontWeight: 400,
      fontFamily: ["Helvetica"],
    },
  });

  const classes = useStyles();

  return (
    <div>
      {district !== -1 && districtData && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.header} align="left">
                  District
                </TableCell>
                <TableCell className={classes.header} align="left">
                  DemoCratic Candidate
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Republican Candidate
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Population Difference
                </TableCell>
                <TableCell className={classes.header} align="left">
                  2022 Population
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Geographic Difference
                </TableCell>
                <TableCell className={classes.header} align="left">
                  2022 Geographic Area
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.content} align="left">
                  {districtData[district - 1]["district"]}
                </TableCell>
                <TableCell className={classes.content} align="left">
                  {incumbentTableData[district - 1]["dem_cand"]}
                </TableCell>
                <TableCell className={classes.content} align="left">
                  {incumbentTableData[district - 1]["rep_cand"]}
                </TableCell>
                <TableCell className={classes.content} align="left">
                  {incumbentTableData[district - 1]["popDiff"]}
                </TableCell>
                <TableCell className={classes.content} align="left">
                  {incumbentTableData[district - 1]["population"]}
                </TableCell>
                <TableCell className={classes.content} align="left">
                  {parseFloat(
                    incumbentTableData[district - 1]["geoDiff"]
                  ).toFixed(3)}
                </TableCell>
                <TableCell className={classes.content} align="left">
                  {incumbentTableData[district - 1]["area"]}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default DistrictData;
