import React from "react";
import "../Css/WhyText.css";
import WhyTextDetails from "./WhyTextDetails";

const WhyTextGuru = () => {
  return (
    <div>
      <div className="whyTextguru">
        <h1>Why TextGuru Is the Best Choice for You?</h1>
      </div>
      <div>
        <div className="container ">
          <div className="row TextGuruoneSection">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-md-3 whyText"
            >
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721818864/why_textGuru_vztkdc.webp"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-md-8 textDetails"
            >
              <div>
                <WhyTextDetails
                  head="Genuine & Competitive Pricing"
                  details="With our low price guarantee, We provide genuine bulk SMS services in India."
                />
                <WhyTextDetails
                  head="99.99% Uptime Guaranteed"
                  details="In order to provide you with fast SMS services, All of our servers are hosted in Indian datacenters."
                />

                <WhyTextDetails
                  head="24*7 Customer Support"
                  details="Our team is available 24 hours a day, 7 days a week to assist you with getting your service running smoothly."
                />
              </div>

              <div>
                <WhyTextDetails
                  head="Super Fast SMS Delivery"
                  details="As part of our commitment to helping your business grow, We invested in technology to offer you fast bulk SMS services."
                />
                <WhyTextDetails
                  head="Adavnced API Integrations"
                  details="We offer advanced bulk SMS APIs for getting our services integrated with your software, app & website."
                />
                <WhyTextDetails
                  head="Honest & Trustworthy"
                  details="In just 2 to 5 seconds, We ensure that your OTP sms is delivered with our high quality fast bulk sms gateway.."
                />
              </div>
            </div>
          </div>
          <div className="homelastContent">
            <h3>Try Free Bulk SMS DEMO Get A Chance To Win 10,000 Bulk SMS</h3>
            <button className="btn-price">See Pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTextGuru;
