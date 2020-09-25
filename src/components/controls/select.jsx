import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const SelectDepartment = (props) => {
  const { label, name, value, onChange, departmentList, error } = props;
  return (
    <FormControl error={error ? true : false}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {departmentList.map((department) => (
          <MenuItem key={department.id} value={department.id}>
            {department.title}
          </MenuItem>
        ))}
      </Select>

      {error ? <FormHelperText>{error}</FormHelperText> : ""}
    </FormControl>
  );
};

export default SelectDepartment;
