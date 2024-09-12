import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import "../Css/Signup.css"
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Fire'
import { SignupSchema } from '../Pages/SignupSchema';

const initialValues = {
    name: "",
    phone: "",
    email: "",
    password:""
  };

export const Signup = () => {

    const { values, errors, handleBlur, handleChange, touched, handleSubmit,resetForm}= useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: (values)=>{
          console.log(values,'vad')
          const {email, password}  = values
          createUserWithEmailAndPassword(auth,email, password)
          resetForm()
          alert("User Created Successfully")
        },
        })
     console.log(errors);
  return (
    <div>
        <Navbar/>
        <div className="container-fluid signup">
        <div>
          <div className="signupFormStart">
            <div>
              <h1>SignUp</h1>
            </div>
            <div>
              <p>
                Already have an account?
                <Link className="link" to="/login">
                Signin
                </Link>
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit}
              className="form">
              <div className="signupInput">
                  <label htmlFor="name" className="input-label">
                    Name
                  </label>
                  <br />
                  <input
                    type="String"
                    placeholder="Enter Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  /><br/>
                  {errors.name &&touched.name? (
                    <span className='form-error'>{errors.name} </span>):null}
                </div>
                <div className="signupInput">
                  <label htmlFor="name" className="input-label">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="String"
                    placeholder="Enter Phone "
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  /><br/>
                  {errors.phone &&touched.phone? (
                    <span className='form-error'>{errors.phone} </span>):null}
                </div>
                <div className="signupInput">
                  <label htmlFor="name" className="input-label">
                    Email-id
                  </label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Email-id"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  /><br/>
                  {errors.email &&touched.email? (
                    <span className='form-error'>{errors.email} </span>):null}
                </div>
                <div className="signupInput">
                  <label htmlFor="name" className="input-label">
                    Password
                  </label>
                  <br />
                  <input
                    type="String"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  /><br/>
                  {errors.password &&touched.password? (
                    <span className='form-error'>{errors.password} </span>):null}
                </div>
                <div className="createAccountBtn">
                  <button className="btnCreateAccount" type="submit">
                   Create Account
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
  )
}
