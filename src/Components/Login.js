import React from "react";
import "../Css/Login.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../Pages/LoginSchema";
import { auth } from "../Fire";
import { signInWithEmailAndPassword } from "firebase/auth";

const initialValues = {
   email:"",
   password:""
  };

const Login = () => {
    const {
        values, errors, handleBlur, handleChange, handleSubmit, touched, resetForm } = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values) => {
          const {email, password}  = values
          signInWithEmailAndPassword(auth,email, password)
          resetForm()
          alert("Logged in Successfully")
          
        },
      });
      console.log(errors)
  return (
    <div>
      <Navbar />
      <div className="container-fluid login">
        <div>
          <div className="formStart">
            <div>
              <h1>Sign In</h1>
            </div>
            <div>
              <p>
                New to Site??
                <Link className="link" to="/signup">
                Create Account
                </Link>
              </p>
            </div>
            <div>
              <form  onSubmit={handleSubmit} 
              className="form">
                <div className="loginInput">
                  <label htmlFor="name" className="input-label">
                    Email-id
                  </label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                  />
                   <br />
                  {errors.email && touched.email ? (
                    <span className="form-error">{errors.email}</span>
                  ) : null}
                </div>
                <div className="loginInput">
                  <label htmlFor="name" className="input-label">
                    Password
                  </label>
                  <br />
                  <input
                    type="String"
                    placeholder="Enter Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                  />
                   <br />
                  {errors.password && touched.password ? (
                    <span className="form-error">{errors.password}</span>
                  ) : null}
                </div>
                <div className="createAccountBtn">
                  <button className="btnCreateAccount" type="submit">
                    Login Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="loginFooter">
        <p>
        &copy; Copyright @ 2006-2023 www.TextGuru.in
        </p>
      </div>
    </div>
  );
};

export default Login;
