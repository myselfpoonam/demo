import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  // const [data,setData]=useState([])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);

    const registerdata = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      Confirmpassword: formValues.cpassword,
    };
    fetch(" https://rest-api-bjno.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // fetch("https://jsonplaceholder.typicode.com/todos" )
    // .then(response=>response.json())
    // .then (json=>console.log(json))
  };

  //   useEffect(()=>{
  //  fetch('https://rest-api-bjno.onrender.com/users')
  //  .then((res=>res.json().then((data)=>{
  //  setData(data)
  //  })),[])
  //   })

  //    }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && submit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!values.password.length > 10) {
      errors.password = "Password must be less than 10 character";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm password is required!";
    } else if (
      values.cpassword === "" ||
      values.cpassword !== values.password
    ) {
      errors.cpassword = "password doesnt match";
    }
    return errors;
  };

  return (
    <>
      <div className="names">
        <h2>REGISTER PAGE</h2>
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
      {useEffect(() => {
        if (Object.keys(formErrors).length === 0 && submit) {
          alert("Register from successfully!!!!!");
        }
      }, [formErrors])}

      <div>
        <div className="main1">
          <form onSubmit={handleSubmit}>
            <div className="content1">
              <div className="title1">
                <h1>
                  Chatapp<span> Registration</span>
                </h1>
                <p>Registration to your account</p>
              </div>
              <div className="input1">
                <input
                  type="name"
                  name="firstName"
                  onChange={handleChange}
                  values={formValues.firstName}
                  className="firstname"
                  placeholder="Your firstname"
                />
                <br />
                <span>{formErrors.firstName}</span>
                <br />
                <input
                  type="name"
                  name="lastName"
                  onChange={handleChange}
                  values={formValues.lastName}
                  className="lastname"
                  placeholder="Your lastname"
                />
                <br />
                <span>{formErrors.lastName}</span>
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="email"
                  values={formValues.email}
                  placeholder="Email"
                />
                <br />
                <span>{formErrors.email}</span>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="password"
                  values={formValues.password}
                  placeholder="Password"
                />
                <br />
                <span>{formErrors.password}</span>
                <br />
                <input
                  type="password"
                  name="cpassword"
                  onChange={handleChange}
                  className="password"
                  values={formValues.cpassword}
                  placeholder="Confirm Password"
                />
                <br />
                <span>{formErrors.cpassword}</span>
                <br />
              </div>

              <div className="btn1">
                <button>Registation</button>

                <button onClick={() => props.onFormSwitch("login")}>
                  Log In{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
