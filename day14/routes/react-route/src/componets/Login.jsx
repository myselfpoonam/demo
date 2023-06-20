import React, { useEffect, useState } from "react";
//  import img from './assets/images/img.jpg'

import { Link } from "react-router-dom";

const Login = (props) => {
  const initalValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initalValues);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({ formValues });
    setFormError(validate(formValues));
    setSubmit(true);

    console.log(formValues);
    try {
      const response = await fetch("https://rest-api-bjno.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        alert(data.message);
      }
      console.log(data);
      localStorage.setItem("message", data.message);
    } catch (error) {}
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && submit) {
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    if (!values?.email) {
      errors.email = "Email is Required";
    }
    if (!values?.password) {
      errors.password = "Password is required";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 character";
    }
    return errors;
  };
  return (
    <>
      <div className="names">
        <h1>LOGIN PAGE</h1>
      </div>
      <header>
        <nav>
          <ul>
            <li style={{ color: "black" }}>
              <Link to="/register" style={{ color: "white" }}>
                Register
              </Link>
            </li>
            <li style={{ color: "black" }}>
              <Link to="/login" style={{ color: "white" }}>
                {" "}
                Login
              </Link>
            </li>
            <li style={{ color: "black" }}>
              <Link to="/users" style={{ color: "white" }}>
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main">
        <div className="img">{/* <img src={img} alt='mnj'/>  */}</div>
        <form>
          <div className="content">
            <div className="title">
              <h1>
                Chat<span>app</span>
              </h1>
              <p>Login to your account</p>
            </div>
            <div className="input">
              <input
                type="email"
                name="email"
                className="email"
                placeholder="Email"
                onChange={handleChange}
                values={formValues.email}
              />
              <br />
              <span>{formError.email}</span>
              <br />
              <input
                type="password"
                name="password"
                className="password"
                placeholder="************"
                onChange={handleChange}
                values={formValues.password}
              />
              <br />
              <span>{formError.password}</span>
            </div>
            <div className="remember">
              <input type="checkbox" className="check" />
              <span>Remember me</span>
              <p>
                <a href="#"></a>Forget password?
              </p>
            </div>
            <div className="btn">
              <button className="login" onClick={handleSubmit}>
                Login
              </button>
              <p>
                Don't have an account{" "}
                <button
                  type="button"
                  onClick={() => props.onFormSwitch("register")}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
