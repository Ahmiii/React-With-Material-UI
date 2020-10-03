import React from "react";
import { TextField } from "@material-ui/core";

const inputs = (props) => {
  const { label, name, value, onChange, error, ...others } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...others}
      error={error ? true : false}
      helperText={error ? error : ""}
    />
  );
};

export default inputs;
