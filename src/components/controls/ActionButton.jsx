import React from "react";
import { Button, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    minWidth: "0px",
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
});

const ActionButton = (props) => {
  const { classes, onClick, children, color } = props;
  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default withStyles(styles)(ActionButton);
