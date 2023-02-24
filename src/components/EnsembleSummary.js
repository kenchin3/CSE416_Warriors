import React from 'react';
import { TableContainer, Paper, TableHead, TableRow, TableBody, Table, TableCell } from '@mui/material';
function EnsembleSummary() {

    return (<>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>District</TableCell>
                        <TableCell align="right">Number of District Plans</TableCell>
                        <TableCell align="right">Number of Incumbents</TableCell>
                        <TableCell align="right">Incumbents predicted to win</TableCell>
                        <TableCell align="right">Avg geographic variation</TableCell>
                        <TableCell align="right">Avg population variation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        // key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {10}
                        </TableCell>

                        <TableCell align="right">{10}</TableCell>
                        <TableCell align="right">{10}</TableCell>
                        <TableCell align="right">{3}</TableCell>
                        <TableCell align="right">{0.1}</TableCell>
                        <TableCell align="right">{0.2}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    </>)
}

export default EnsembleSummary;