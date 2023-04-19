import React from "react";
// import okDistrictData from "./../data/okDistrictData.json";
// import tnDistrictData from "./../data/tnDistrictData.json";
// import paDistrictData from "./../data/paDistrictData.json";
// import "./DistrictData.css";
import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

function DistrictData({ district, setDistrict, stateValue }) {
  const [districtData, setdistrictData] = React.useState();

  React.useEffect(() => {
    axios.get("http://localhost:8080/states/" + stateValue).then((res) => {
      setdistrictData(res.data);
      console.log(JSON.stringify(res.data));
    });
  }, []);

  return (
    <div className="districtDataLocation">
      {district !== -1 && (
        <div className="districtDataFont">
          <span style={{ fontWeight: 550, fontSize: 15 }}> District: </span>
          {districtData[district - 1]["district"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Winner: </span>
          {districtData[district - 1]["winner"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2020 Population:{" "}
          </span>
          {districtData[district - 1]["pop2020"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Population:{" "}
          </span>
          {districtData[district - 1]["pop2022"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2020 Geographic Area:{" "}
          </span>{" "}
          {districtData[district - 1]["area2020"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Geographic Area:{" "}
          </span>{" "}
          {districtData[district - 1]["area2022"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      )}
    </div>
    // <>
    //   {stateValue && districtData && (
    //     <TableContainer component={Paper}>
    //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //         <TableHead>
    //           <TableRow>
    //             <TableCell>District</TableCell>
    //             <TableCell className="tableCellHeader" align="center">
    //               Winner
    //             </TableCell>
    //             <TableCell className="tableCellHeader" align="center">
    //               Population 2020
    //             </TableCell>
    //             <TableCell className="tableCellHeader" align="center">
    //               Population 2022
    //             </TableCell>
    //             <TableCell className="tableCellHeader" align="center">
    //               Geographic Area 2020
    //             </TableCell>
    //             <TableCell className="tableCellHeader" align="center">
    //               Geographic Area 2022
    //             </TableCell>
    //           </TableRow>
    //         </TableHead>
    //         {district !== -1 && (
    //           <TableBody>
    //             <TableRow
    //               // key={row.name}
    //               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //             >
    //               <TableCell className="tableCell" component="th" scope="row">
    //                 {districtData[district]["District"]}
    //               </TableCell>

    //               <TableCell className="tableCell" align="center">
    //                 {districtData[district]["Winner"]}
    //               </TableCell>
    //               <TableCell className="tableCell" align="center">
    //                 {districtData[district]["Pop 2020"]}
    //               </TableCell>
    //               <TableCell className="tableCell" align="center">
    //                 {districtData[district]["Pop 2022"]}
    //               </TableCell>
    //               <TableCell className="tableCell" align="center">
    //                 {districtData[district]["Area 2020"]}
    //               </TableCell>
    //               <TableCell className="tableCell" align="center">
    //                 {districtData[district]["Area 2022"]}
    //               </TableCell>
    //             </TableRow>
    //           </TableBody>
    //         )}
    //       </Table>
    //     </TableContainer>
    //   )}
    // </>
  );
}

export default DistrictData;
