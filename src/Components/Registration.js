import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEye);

// functional component using useState hook 
export default function Register() {
  const initvalues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    showPassword: false,
  };


  const [userValues, setUserValues] = useState(initvalues);
  const [formErrors, setFormErrors] = useState({});

// Linked the data 
  const changeData = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };
// for password eye icon (show and hide )
  const handleClickShowPassword = ()=>{
      setUserValues({...userValues,showPassword: !userValues.showPassword})
  }
  const handleMouseDownPassword = (e)=>{
      e.preventDefault();
  }

// validation for the form
  const validate = (values) => {
    const errors = {};
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const pattern1 = new RegExp("/^S*$/");
    const patternpass = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    );
    if (!values.name) {
      errors.name = "Name is Required";
    }
    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!pattern.test(values.email)) {
      errors.email = "Email is invalid !";
    }
    if (!values.username) {
      errors.username = "UserName is required";
    } else if (!pattern1.test(values.name)) {
      errors.username = "UserName must contain no spaces ";
    }

    if (!values.password) {
      errors.password = "Password is required ";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 charachters ";
    } else if (!patternpass.test(values.password)) {
      errors.password =
        "Password must contains at least one lowercase,one uppercase and one special character ";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Unmatched Password";
    }

    return errors;
  };

// handling the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(userValues));
  };

// rendering information
  return (
    <div className="offset-3 col-3 loginform">
      <h5 className="fs-2">Registration Form</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="NameExample" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="NameExample"
            aria-describedby="emailHelp"
            name="name"
            onChange={changeData}
            value={userValues.name}
          />
        </div>
        <p className="text-danger">{formErrors.name}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={userValues.email}
            onChange={changeData}
          />
        </div>
        <p className="text-danger">{formErrors.email}</p>
        <div className="mb-3">
          <label htmlFor="UserNameExample" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="UserNameExample"
            aria-describedby="emailHelp"
            name="username"
            value={userValues.username}
            onChange={changeData}
          />
        </div>
        <p className="text-danger">{formErrors.username}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <div className="pass-wrapper">
            <input
              type={userValues.showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword"
              name="password"
              value={userValues.password}
              onChange={changeData}
            />
            <FontAwesomeIcon onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword} className="icons" icon="eye" />
          </div>
        </div>
        <p className="text-danger">{formErrors.password}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <div className="pass-wrapper">
            <input
              type={userValues.showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              name="confirmpassword"
              value={userValues.confirmpassword}
              onChange={changeData}
            />
            <FontAwesomeIcon onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword} className="icons" icon="eye" />
          </div>
        </div>
        <p className="text-danger" s>
          {formErrors.confirmpassword}
        </p>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
