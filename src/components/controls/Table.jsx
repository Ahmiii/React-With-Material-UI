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
  const pages = ["5", "10", "25"];
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

  const TblPagination = () => (
    <TablePagination
      component="div"
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      page={page}
      count={records.length}
    />
  );

  return {
    TblHeader,
    TblContainer,
    TblPagination,
  };
};

export default TableContainer;
