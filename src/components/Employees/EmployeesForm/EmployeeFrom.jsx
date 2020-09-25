import React, { useState } from "react";
import {
  withStyles,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
});

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobileNumber: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPerminent: "false",
};

const EmployeeFrom = (props) => {
  const { classes } = props;
  const [values, setValues] = useState(initialValues);

  const HandleNameChange = (e) => {
    e.preventDefault();
    const changeName = { ...values };
    changeName.fullName = e.target.value;
    setValues(changeName);
  };

  const HandleEmailChange = (e) => {
    e.preventDefault();
    const changeEmail = { ...values };
    changeEmail.email = e.target.value;
    setValues(changeEmail);
  };
  const HandleGenderChange = (e) => {
    e.preventDefault();
    const changeGender = { ...values };
    changeGender.gender = e.target.value;
    setValues(changeGender);
  };

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={HandleNameChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={HandleEmailChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row={true}
              name="gender"
              value={values.gender}
              onChange={HandleGenderChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(EmployeeFrom);
