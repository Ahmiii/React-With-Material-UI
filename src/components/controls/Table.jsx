import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  TablePagination,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: "#607d8b",
      backgroundColor: "#bcaaa4",
    },
  },
}));

const TableContainer = (records, columns) => {
  const pages = [5, 10, 25];
  const [page, setpage] = useState(0);
  const [rowsPerPage, setrowsPerPage] = useState(pages[page]);

  const classes = useStyles();
  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHeader = (props) => (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell key={col.id}>{col.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const HandlePageChange = (e, newPageIndex) => {
    setpage(newPageIndex);
  };

  const HandleRowsPerPageChange = (e) => {
    e.preventDefault();
    setrowsPerPage(e.target.value);
    setpage(0);
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      page={page}
      count={records.length}
      onChangePage={HandlePageChange}
      onChangeRowsPerPage={HandleRowsPerPageChange}
    />
  );

  const recordAfterPagination = () => {
    return records.slice(page * rowsPerPage, (1 + page) * rowsPerPage);
  };

  return {
    TblHeader,
    TblContainer,
    TblPagination,
    recordAfterPagination,
  };
};

export default TableContainer;
