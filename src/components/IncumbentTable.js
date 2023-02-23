import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import okIncumbent from "./../data/okIncumbent.json";
import tnIncumbent from "./../data/tnIncumbent.json";
import paIncumbent from "./../data/paIncumbent.json";
import TablePagination from "@material-ui/core/TablePagination";

function IncumbentTable({ stateValue }) {
  const [incumbentData, setIncumbentData] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("ho1");

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

  console.log("ho12");
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
              <TableRow
                key={row.District}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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

      {/* <TableBody>
            {incumbentData.map((row) =>
              row
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
            )}
          </TableBody> */}

      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </>
  );
}

export default IncumbentTable;
