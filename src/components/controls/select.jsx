import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectDepartment = (props) => {
  const { label, name, value, onChange, departmentList } = props;
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {departmentList.map((department) => (
          <MenuItem key={department.id} value={department.id}>
            {department.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDepartment;
