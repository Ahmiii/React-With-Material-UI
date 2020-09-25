import React from "react";
import PageHeader from "../PageHeader/pageHeader";
import EmployeeForm from "./EmployeesForm/EmployeeFrom";
import PeopleOutlineIcon from "@material-ui/icons/PeopleAltOutlined";
import { withStyles, Paper } from "@material-ui/core";

const styles = (theme) => ({
  paperContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
});

const Employess = (props) => {
  const { classes } = props;
  return (
    <div>
      <PageHeader title="hello" subtitle="hello" icon={<PeopleOutlineIcon />} />
      <Paper className={classes.paperContent}>
        <EmployeeForm />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Employess);
