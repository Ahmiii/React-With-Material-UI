import React from "react";
import { withStyles } from "@material-ui/core";

const style = {
  sideMenue: {
    flex: 0.3,
    display: "flex",
    flexDirection: "column",
    left: "0px",
    position: "absolute",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
};

const SideBar = (props) => {
  const { classes } = props;

  return <div className={classes.sideMenue}></div>;
};

export default withStyles(style)(SideBar);
