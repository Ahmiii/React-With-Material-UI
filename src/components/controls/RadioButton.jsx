import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const RadioButton = (props) => {
  const { genderList, onChange, value } = props;
  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup row={true} name="gender" value={value} onChange={onChange}>
        {genderList.map((gender) => (
          <FormControlLabel
            key={gender.id}
            value={gender.id}
            control={<Radio />}
            label={gender.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
