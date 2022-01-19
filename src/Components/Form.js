import React from "react";
import { useState ,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEye);
// functional component using useState hook 
export default function AddForm() {
  const initvalues = { email: "", password: "" ,showPassword: false,};
  const [userValues, setUserValues] = useState(initvalues);
  const [formErrors, setFormErrors] = useState({});
  const changeData = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleClickShowPassword = ()=>{
    setUserValues({...userValues,showPassword: !userValues.showPassword})
}
const handleMouseDownPassword = (e)=>{
    e.preventDefault();
}

// validation 

  const validate = (values) => {
    const errors = {};
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);    if (!values.email) {
      errors.email = "Email is required !";
    }else if (!pattern.test(values.email)) {
      errors.email = "Email is invalid !";
    }
    if (!values.password) {
      errors.password = "Password is required ";
    } else if (values.password.length < 8 ) {
      errors.password = "Password must be more than 8 charachters ";
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
    <div className="offset-3 col-3 loginform mt-auto py-5   ">
        <h5 className="fs-2">Login Form</h5> 
        <form
        onSubmit={handleSubmit}
        className=""
        >
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={userValues.email}
            aria-describedby="emailHelp"
            onChange={changeData}
            name="email"
            />
        </div>
        <p className="text-danger">{formErrors.email}</p>
        <div className="form-group pass-wrapper">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
            type={userValues.showPassword ? "text" : "password"}
            className="form-control "
            value={userValues.password}
            onChange={changeData}
            id="exampleInputPassword1"
            name="password"
            />
            <FontAwesomeIcon onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword} className="iconsx" icon="eye" />
        </div>
        <p className="text-danger">{formErrors.password}</p>
        <button type="submit" className="btn btn-primary m-3">
            Submit
        </button>
        </form>
    </div>
  );
}
