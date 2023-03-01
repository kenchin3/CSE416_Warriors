import React from "react";
import {
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    TableBody,
    Table,
    TableCell,
} from "@mui/material";
function DistrictPlanSummary() {

    const [districtIncumbentData, setDistrictIncumbentData] = React.useState([
        {
            Name: "Joe Smith",
            Party: "Republican",
            "District Variation": 0.1
        },
        {
            Name: "Michael Lee",
            Party: "Democrat",
            "District Variation": 0.4
        }
    ])

    // React.useEffect(() => {
    //     setDistrictIncumbentData([
    //         {
    //             Name: "Joe Smith",
    //             Party: "Republican",
    //             "District Variation": 0.1
    //         },
    //         {
    //             Name: "Michael Lee",
    //             Party: "Democrat",
    //             "District Variation": 0.4
    //         }
    //     ])
    // })
    return (<>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Number of Districts: {districtIncumbentData.length}</TableCell>
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
                    {districtIncumbentData.map((row) => (
                        // console.log(row)
                        < TableRow
                            key={row.Name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{row.Name}</TableCell>
                            <TableCell align="left">{row.Party}</TableCell>
                            <TableCell align="left">{row["District Variation"]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </>)
}

export default DistrictPlanSummary;
