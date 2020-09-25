import React from "react";
import { withStyles, Button } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(0.5),
    "& .MuiButton-label": {
      textTransform: "capitalize",
    },
  },
});

const Buttons = (props) => {
  const { text, size, color, variant, onClick, classes, ...other } = props;
  return (
    <Button
      className={classes.root}
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other}
    >
      {text}
    </Button>
  );
};

export default withStyles(styles)(Buttons);
