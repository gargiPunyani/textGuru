import React from "react";
import Navbar from "./Navbar";
import {
  FaBriefcase,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import "../Css/Contact.css";
import Footer from "./Footer";
import { useFormik } from "formik";
import { contactSchema } from "../Pages/ContactSchema";

const initialValues = {
  name: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      resetForm();
      alert("Message Successfully Submitted, Our Team will connect you soon");
      console.log("Submitted values:", values);
    },
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row ContactPage">
          <div className="col-md-6">
            <div className="row contact1">
              <div className="col-md-5 contactbox">
                <h3>
                  <FaLocationDot className="contactIcon" />
                </h3>
                <h4>Ludhiana Office</h4>
                <p>
                  HO : 91-E, Calibre Plaza, Opp Bhadaur House, Ludhiana. 141008.
                  Punjab. INDIA.
                </p>
              </div>
              <div className="col-md-5 contactbox">
                <h3>
                  <FaPhone className="contactIcon" />
                </h3>
                <h4>Contact On</h4>
                <p>82840498710 (Sales)</p>
                <p>82840498701 (Help)</p>
              </div>
              <div className="col-md-5 contactbox">
                <h3>
                  <FaEnvelope className="contactIcon" />
                </h3>
                <h4>Email Us</h4>
                <p>
                  info@textguru.in
                  <br />
                  textguru.in@gmail.com
                </p>
              </div>
              <div className="col-md-5 contactbox">
                <h3>
                  <FaBriefcase className="contactIcon" />
                </h3>
                <h4>Banglore Office</h4>
                <p>
                  HO : 91-E, Calibre Plaza, Opp Bhadaur House, Banglore. 530008.
                  Punjab. INDIA.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 contact">
            <div>
              <h3>Contact Us</h3>
            </div>
            <div className="contactForm">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                  />
                  <br />
                  {errors.name && touched.name ? (
                    <span className="form-error">{errors.name}</span>
                  ) : null}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Contact Number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                  />
                  <br />
                  {errors.phone && touched.phone ? (
                    <span className="form-error">{errors.phone}</span>
                  ) : null}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Message"
                    name="message"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                  />
                  <br />
                  {errors.message && touched.message ? (
                    <span className="form-error">{errors.message}</span>
                  ) : null}
                </div>
                <div>
                  <button className="Submit" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
