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


function IncumbentTable({ stateValue }) {
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
                            >
                                <TableCell component="th" scope="row">
                                    {row.District}
                                </TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">{row.Party}</TableCell>
                                <TableCell align="right">{row.Win}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default IncumbentTable;