import React from "react";
import okDistrictData from "./../data/okDistrictData.json";
import tnDistrictData from "./../data/tnDistrictData.json";
import paDistrictData from "./../data/paDistrictData.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DistrictData({ district, setDistrict, stateValue }) {
  const [districtData, setdistrictData] = React.useState(paDistrictData.data);
  React.useEffect(() => {
    switch (stateValue) {
      case "pa":
        setdistrictData(paDistrictData.data);
        break;
      case "tn":
        setdistrictData(tnDistrictData.data);
        break;
      case "ok":
        setdistrictData(okDistrictData.data);
        break;
    }
  });
  return (
    <>
      {stateValue && districtData && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>District</TableCell>
                <TableCell className="tableCellHeader" align="center">
                  Winner
                </TableCell>
                <TableCell className="tableCellHeader" align="center">
                  Population 2020
                </TableCell>
                <TableCell className="tableCellHeader" align="center">
                  Population 2022
                </TableCell>
                <TableCell className="tableCellHeader" align="center">
                  Geographic Area 2020
                </TableCell>
                <TableCell className="tableCellHeader" align="center">
                  Geographic Area 2022
                </TableCell>
              </TableRow>
            </TableHead>
            {district !== -1 && (
              <TableBody>
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="tableCell" component="th" scope="row">
                    {districtData[district]["District"]}
                  </TableCell>

                  <TableCell className="tableCell" align="center">
                    {districtData[district]["Winner"]}
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    {districtData[district]["Pop 2020"]}
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    {districtData[district]["Pop 2022"]}
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    {districtData[district]["Area 2020"]}
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    {districtData[district]["Area 2022"]}
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default DistrictData;
