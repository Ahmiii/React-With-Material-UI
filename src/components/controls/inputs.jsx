import React from "react";
import { TextField } from "@material-ui/core";

const inputs = (props) => {
  return (
    <TextField
      variant="outlined"
      label={props.label}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default inputs;
