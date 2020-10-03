import React, { useState } from "react";
import PageHeader from "../PageHeader/pageHeader";
import EmployeeForm from "./EmployeesForm/EmployeeFrom";
import TableContainer from "../controls/Table";
import PeopleOutlineIcon from "@material-ui/icons/PeopleAltOutlined";
import Controls from "../controls/controls";

import {
  withStyles,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";

import * as EmployeesServices from "../../services/employee";

const styles = (theme) => ({
  paperContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  inputSize: {
    width: "75%",
  },
});
const pageHeader = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address" },
  { id: "mobileNumber", label: "Mobile Number" },
  { id: "department", label: "Department" },
];

const Employess = (props) => {
  const { classes } = props;

  const [records, setrecords] = useState(EmployeesServices.getAllEmployees());
  const [filter, setfilter] = useState({
    filterOperation: (items) => {
      return items;
    },
  });

  const filterRecords = (e) => {
    let target = e.target;
    setfilter({
      filterOperation: (items) => {
        if (target.value === "") {
          return items;
        } else {
          return items.filter((item) =>
            item.fullName.toLowerCase().includes(target.value)
          );
        }
      },
    });
  };

  const {
    TblContainer,
    TblHeader,
    TblPagination,
    sortedrecordAfterPagination,
  } = TableContainer(records, pageHeader, filter);

  return (
    <div>
      <PageHeader title="hello" subtitle="hello" icon={<PeopleOutlineIcon />} />
      <Paper className={classes.paperContent}>
        <EmployeeForm />
        <Toolbar>
          <Controls.Input
            className={classes.inputSize}
            label="Searc Employees"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={filterRecords}
          />
        </Toolbar>
        <TblContainer>
          <TblHeader />
          <TableBody>
            {sortedrecordAfterPagination() &&
              sortedrecordAfterPagination().map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.fullName}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.mobileNumber}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Employess);
