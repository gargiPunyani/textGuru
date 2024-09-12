import React from "react";
import "../Css/Home.css";

const HomeSec2 = () => {
  return (
    <div>
      <div className="container secondSection">
        <div className=" row">
          <div data-aos="zoom-out-down" className="col-md-6 secSectionImage">
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811929/home2_irbcdl.svg" alt="" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="col-md-6 secSection"
          >
            <h1>Fast Bulk SMS India: Discover 11 Reasons to Buy From Us!</h1>
            <div className="services">
              <p>
                Eager to boost your message's reach? Bulk sms4india is your
                powerhouse tool, and we're here to amplify your impact:
                <ul className="services">
                  <li>
                    <strong>Seamless DLT Compliance:</strong>
                    Our Hassle-Free Registration Process Simplifies Your
                    Compliance Needs.
                  </li>
                  <li>
                    <strong>Risk-Free Investment: </strong>
                    Our Money-Back Guarantee Ensures Your Satisfaction with Our
                    Service.
                  </li>
                  <li>
                    <strong>Reliable Performance:</strong>
                    Our 99.99% Server Uptime Guarantee Means You Can Count on
                    Us.
                  </li>
                  <li>
                    <strong>Transparent Invoicing:</strong>
                    We Guarantee Accurate GST Tax Invoices for Your Records.
                  </li>
                </ul>
              </p>
            </div>

            <button className="btn-price">Start Free Demo</button>
          </div>
        </div>
      </div>
      <div className="container fourthSection ">
        <div className="row">
          <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className="col-md-6 secSection"
          >
            <h1>Boost Business in 2023, Try SMS Gateway Service</h1>
            <div className="services">
              <p>
                Ready to revolutionize your communication strategy? Dive into
                the world of SMS broadcast and watch your engagement skyrocket:
                <ul>
                  <li>
                    <strong>Easy Integration: </strong>
                    Our Bulk SMS API Ensures Quick and Efficient Integration
                    with Your System.
                  </li>
                  <li>
                    <strong>Responsive Support: </strong>
                    Our Quick Customer Service is Here to Help You Whenever You
                    Need It.
                  </li>
                  <li>
                    <strong>Reliable Bulk SMS Service: </strong>
                    100% Trustworthy and Dependable for Your Messaging Needs.
                  </li>
                  <li>
                    <strong>Multiple Connectivity Options: </strong>
                    Multiple Routes with Direct Operator Connectivity.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className=" col-md-6"
          >
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811932/home3_bhhcs5.svg" alt="" />
          </div>
          <button className="btn-price">Try For Free</button>
        </div>
      </div>

      <div className="container fifthSection ">
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            className="col-md-6"
          >
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811933/home4_xxokbv.svg" alt="" />
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-offset="300"
            className="col-md-6 secSection"
          >
            <h1>Elevate Your Business in 2023 with SMS Marketing Services</h1>
            <div className="services">
              <p>
                Step into the spotlight with SMS Blast India, Transform your
                outreach and connect with your audience like never before!
                <ul>
                  <li>
                    <strong>Competitive Pricing: </strong>
                    Our Lowest Price Guarantee Ensures You Get the Best Value
                    for Your Money.
                  </li>
                  <li>
                    <strong>Satisfied Customers: </strong>
                    Our High Customer Recurrence Rate Speaks to Our Quality
                    Service.
                  </li>
                  <li>
                    <strong>Industry Expertise: </strong>
                    Our 17 Years of Experience in the Industry Ensure We
                    Understand Your Needs.
                  </li>
                </ul>
              </p>
            </div>

            <button className="btn-price">Start For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec2;
