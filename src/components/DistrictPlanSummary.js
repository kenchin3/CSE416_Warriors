import React from 'react';
import { TableContainer, Paper, TableHead, TableRow, TableBody, Table, TableCell } from '@mui/material';
function DistrictPlanSummary() {

    return (<>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Number of Districts: {10}</TableCell>
                        {/* <TableCell>10</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Incumbent</TableCell>
                        <TableCell align="left">Party</TableCell>
                        <TableCell align="left">Incumbent District Variation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        // key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >

                        <TableCell align="left">{"John Doe"}</TableCell>
                        <TableCell align="left">{"Republican"}</TableCell>
                        <TableCell align="left">{3}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    </>)
}

export default DistrictPlanSummary;