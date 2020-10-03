import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  TablePagination,
  TableSortLabel,
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

const TableContainer = (records, columns, filter) => {
  const pages = [5, 10, 25];
  const [page, setpage] = useState(0);
  const [rowsPerPage, setrowsPerPage] = useState(pages[page]);
  const [order, setorder] = useState("desc");
  const [orderBy, setOrderBy] = useState();

  const classes = useStyles();
  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const SortTheCol = (colId) => {
    const Asc = orderBy === colId && order === "asc";
    setOrderBy(colId);
    setorder(Asc ? "desc" : "asc");
  };
  const TblHeader = (props) => (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell
            key={col.id}
            sortDirection={orderBy === col.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === col.id}
              direction={orderBy === col.id ? order : "asc"}
              onClick={() => SortTheCol(col.id)}
            >
              {col.label}
            </TableSortLabel>
          </TableCell>
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

  const sortTable = (array, compatator) => {
    const stablizeArray = array.map((val, index) => [val, index]);

    stablizeArray.sort((a, b) => {
      const order = compatator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stablizeArray.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    console.log(order, orderBy);
    return order === "desc"
      ? (a, b) => descendingCompetator(a, b, orderBy)
      : (a, b) => -descendingCompetator(a, b, orderBy);
  };

  const descendingCompetator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedrecordAfterPagination = () => {
    return sortTable(
      filter.filterOperation(records),
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, (1 + page) * rowsPerPage);
  };

  return {
    TblHeader,
    TblContainer,
    TblPagination,
    sortedrecordAfterPagination,
  };
};

export default TableContainer;
