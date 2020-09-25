import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePicker = (props) => {
  const { label, name, value, onChange } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        name={name}
        format="MMM/dd/yyyy"
        value={value}
        onChange={(date) => {
          onChange(name, date);
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
