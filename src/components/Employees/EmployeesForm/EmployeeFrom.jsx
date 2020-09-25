import React, { useState } from "react";
import Textfiled from "../../controls/inputs";
import RadioButtons from "../../controls/RadioButton";
import SelectDepartment from "../../controls/select";
import CheckBox from "../../controls/checkBox";
import DatePicker from "../../controls/DatePicker";
import Button from "../../controls/Buttons";
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
  const [Errors, setErrors] = useState({});

  const validate = () => {
    const temp = {};
    temp.fullName = values.fullName ? "" : "This field is required";
    temp.email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
      values.email
    )
      ? ""
      : "This email is not valid";
    temp.mobileNumber =
      values.mobileNumber.length > 9
        ? ""
        : "Mobile number should be grater than 9";
    temp.departmentId =
      values.departmentId.length != 0 ? "" : "This field is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

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
  const HandleDateChange = (name, value) => {
    const changeDate = { ...values };
    changeDate.hireDate = value;
    setValues(changeDate);
    console.log(values);
  };
  const HandleNumberChange = (e) => {
    e.preventDefault();
    const changeNumber = { ...values };
    changeNumber.mobileNumber = e.target.value;
    setValues(changeNumber);
  };
  const HandleCityChange = (e) => {
    e.preventDefault();
    const changeCity = { ...values };
    changeCity.city = e.target.value;
    setValues(changeCity);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("form submitted");
    }
  };

  return (
    <form className={classes.root} onSubmit={HandleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Textfiled
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={HandleNameChange}
            error={Errors.fullName}
          />
          <Textfiled
            label="Email"
            name="email"
            value={values.email}
            onChange={HandleEmailChange}
            error={Errors.email}
          />

          <Textfiled
            label="Mobile"
            name="mobileNumber"
            value={values.mobileNumber}
            onChange={HandleNumberChange}
            error={Errors.mobileNumber}
          />
          <Textfiled
            label="City"
            name="city"
            value={values.city}
            onChange={HandleCityChange}
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
            error={Errors.departmentId}
          />
          <DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={HandleDateChange}
          />
          <CheckBox
            name="isPermenent"
            label="Permenent Employee"
            value={values.isPermenent}
            onChange={HandleIsPerminentChange}
          />
          <div>
            <Button type="submit" text="submit" onClick={HandleSubmit} />
            <Button text="reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(EmployeeFrom);
