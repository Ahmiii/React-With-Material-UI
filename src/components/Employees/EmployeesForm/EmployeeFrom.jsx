import React, { useState } from "react";
import Textfiled from "../../controls/inputs";
import RadioButtons from "../../controls/RadioButton";
import SelectDepartment from "../../controls/select";
import CheckBox from "../../controls/checkBox";
import DatePicker from "../../controls/DatePicker";
import Button from "../../controls/Buttons";
import * as employeeServices from "../../../services/employee";
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

  const validate = (fieldValue = values) => {
    const temp = { ...Errors };
    console.log(fieldValue);
    console.log(temp);
    if ("fullName" in fieldValue) {
      console.log("hello");
      temp.fullName = fieldValue.fullName ? "" : "This field is required";
    }
    if ("email" in fieldValue)
      temp.email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
        fieldValue.email
      )
        ? ""
        : "This email is not valid";
    if ("mobileNumber" in fieldValue)
      temp.mobileNumber =
        fieldValue.mobileNumber.length > 9
          ? ""
          : "Mobile number should be grater than 9";
    if ("departmentId" in fieldValue)
      temp.departmentId =
        fieldValue.departmentId.length !== 0 ? "" : "This field is required";

    setErrors({ ...temp });
    if (fieldValue === values)
      return Object.values(temp).every((x) => x === "");
  };

  const HandleNameChange = (e) => {
    e.preventDefault();
    const changeName = { ...values };
    changeName.fullName = e.target.value;
    setValues(changeName);
    if (e) {
      validate(changeName);
    }
  };

  const HandleEmailChange = (e) => {
    e.preventDefault();
    const changeEmail = { ...values };
    changeEmail.email = e.target.value;
    setValues(changeEmail);
    if (e) {
      validate(changeEmail);
    }
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
    if (e) {
      validate(changeDepartment);
    }
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
    if (e) {
      validate(changeNumber);
    }
  };
  const HandleCityChange = (e) => {
    e.preventDefault();
    const changeCity = { ...values };
    changeCity.city = e.target.value;
    setValues(changeCity);
    if (e) {
      validate(changeCity);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeServices.insertEmployee(values);
      setValues(initialValues);
    }
  };

  const HandleRest = () => {
    setValues(initialValues);
    setErrors({});
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
            <Button text="reset" color="default" onClick={HandleRest} />
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(EmployeeFrom);
