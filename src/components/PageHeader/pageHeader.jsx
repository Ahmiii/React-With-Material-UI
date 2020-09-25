import React from "react";
import { Card, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    display: "flex",
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "blue",
    borderRadius: "10px",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
  },
});

const pageHeader = (props) => {
  const { title, subtitle, icon, classes } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(pageHeader);
