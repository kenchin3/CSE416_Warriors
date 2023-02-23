import React from 'react';
import okDistrictData from "./../data/okDistrictData.json";
import tnDistrictData from "./../data/tnDistrictData.json";
import paDistrictData from "./../data/paDistrictData.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DistrictData({district, stateValue}) {
    const [districtData, setdistrictData] = React.useState(null);
    React.useEffect(() => {
        switch (stateValue) {
            case "":
                setdistrictData(null);
                break
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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>District</TableCell>
                    <TableCell align="right">Winner</TableCell>
                    <TableCell align="right">Population 2020</TableCell>
                    <TableCell align="right">Population 2022</TableCell>
                    <TableCell align="right">Geographic Area 2020</TableCell>
                    <TableCell align="right">Geographic Area 2022</TableCell>
                </TableRow>
                </TableHead>
                {districtData && <TableBody>
                    <TableRow
                    // key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                    {districtData[district]["District"]}
                    </TableCell>
                    {/* <TableCell align="right">{districtData[0]["District"]}</TableCell> */}
                    <TableCell align="right">{districtData[district]["Winner"]}</TableCell>
                    <TableCell align="right">{districtData[district]["Pop 2020"]}</TableCell>
                    <TableCell align="right">{districtData[district]["Pop 2022"]}</TableCell>
                    <TableCell align="right">{districtData[district]["Area 2020"]}</TableCell>
                    <TableCell align="right">{districtData[district]["Area 2022"]}</TableCell>
                    </TableRow>
                </TableBody>
                }
            </Table>
    </TableContainer>
        </>
    )
}

export default DistrictData