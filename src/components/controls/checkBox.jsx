import React from "react";
import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";

const checkBox = (props) => {
  const { label, name, value, onChange } = props;
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color="primary"
            checked={value}
            onChange={onChange}
          />
        }
        label={label}
      >
        {" "}
      </FormControlLabel>
    </FormControl>
  );
};

export default checkBox;
