import React, { useState } from "react";
import Textfiled from "../../controls/inputs";
import RadioButtons from "../../controls/RadioButton";
import SelectDepartment from "../../controls/select";
import CheckBox from "../../controls/checkBox";
import { withStyles, Grid } from "@material-ui/core";

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
  isPermenent: false,
};

const genderList = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const departments = [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Human Resource" },
  { id: "4", title: "Information Technology" },
  { id: "5", title: "Accounting" },
];

const EmployeeFrom = (props) => {
  const { classes } = props;
  const [values, setValues] = useState(initialValues);

  const HandleNameChange = (e) => {
    e.preventDefault();
    const changeName = { ...values };
    changeName.fullName = e.target.value;
    setValues(changeName);
    console.log(values);
  };

  const HandleEmailChange = (e) => {
    e.preventDefault();
    const changeEmail = { ...values };
    changeEmail.email = e.target.value;
    setValues(changeEmail);
  };
  const HandleGenderChange = (e) => {
    const changeGender = { ...values };
    changeGender.gender = e.target.value;
    setValues(changeGender);
  };
  const HandleDepartmentChange = (e) => {
    const changeDepartment = { ...values };
    changeDepartment.departmentId = e.target.value;
    setValues(changeDepartment);
  };
  const HandleIsPerminentChange = () => {
    const changeStatus = { ...values };
    const status = changeStatus.isPermenent;
    changeStatus.isPermenent = !status;
    setValues(changeStatus);
  };

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Textfiled
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={HandleNameChange}
          />
          <Textfiled
            label="Email"
            name="email"
            value={values.email}
            onChange={HandleEmailChange}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioButtons
            value={values.gender}
            genderList={genderList}
            onChange={HandleGenderChange}
          />
          <SelectDepartment
            label="Department"
            name="departmentId"
            value={values.departmentId}
            onChange={HandleDepartmentChange}
            departmentList={departments}
          />
          <CheckBox
            name="isPermenent"
            label="Permenent Employee"
            value={values.isPermenent}
            onChange={HandleIsPerminentChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(EmployeeFrom);
