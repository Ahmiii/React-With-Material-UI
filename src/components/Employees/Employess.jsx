import React, { useState } from "react";
import PageHeader from "../PageHeader/pageHeader";
import EmployeeForm from "./EmployeesForm/EmployeeFrom";
import TableContainer from "../controls/Table";
import PeopleOutlineIcon from "@material-ui/icons/PeopleAltOutlined";
import {
  withStyles,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import * as EmployeesServices from "../../services/employee";

const styles = (theme) => ({
  paperContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
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

  const { TblContainer, TblHeader, TblPagination } = TableContainer(
    records,
    pageHeader
  );
  return (
    <div>
      <PageHeader title="hello" subtitle="hello" icon={<PeopleOutlineIcon />} />
      <Paper className={classes.paperContent}>
        {/* <EmployeeForm /> */}
        <TblContainer>
          <TblHeader />
          <TableBody>
            {records &&
              records.map((employee) => (
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
