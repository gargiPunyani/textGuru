import React from "react";
import Navbar from "./Navbar";
import { FaStar } from "react-icons/fa";
import "../Css/Pricing.css";
import PricingDetail from "../Pages/PricingDetail";
import Guarantee from "../Pages/Guarantee";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="row pricing">
            <h2>
              Get 5 Seconds Or Faster Delivery by Switching
              <br />
              to TextGuru DIAMOND Bulk SMS with 99.97% Delivery Confidence.
            </h2>
          </div>
          <div className="price">
            <div className="priceImage">
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721911532/pricing1_yvoado.svg"
                alt=""
              />
            </div>
            <div className="priceContent">
              <p>
                "I have been using Text Guru's service for the past many years.
                My experience with Text Guru has been good. Staff behavior is
                user friendly,ready to help at all times.
                <strong>
                  {" "}
                  I am using voice call service along with sms service. Overall
                  I am satisfied with the service."
                </strong>
              </p>
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <strong>- Principal - GYANODAYA VIDYALAYA</strong>
              </p>
            </div>
          </div>

          <div className="bulk-msg">
            <h3>Bulk SMS Pricing</h3>
          </div>
          <div className="container">
            <div className="row">
              <PricingDetail
                service="BRONZE"
                time="Validity 1 Year"
                smsService="100% Affordable"
                heading="Affordability Meets Reliability"
                item1=" 6 Alphabets Header Name"
                item2=" Secured Https API Available"
                item3=" Bulk SMS Working 24 Hours"
                item4=" We Offer a 14-Days Refund"
                item5=" English & 21+ Languages"
                item6=" Trans, Promo & OTP SMS"
                item7=" DLT & Must Be Activated"
                details="Your budget-friendly gateway to effective SMS marketing."
                para="They don't sleep so that we can make thousands of clients. Their team always be there to support them 24x7, all year and if you want, support would be handled by Team completely"
                btnName="Buy 500 Sms @ ₹1000"
                btnName2="Buy 100 Sms @ ₹1500"
                btnName3="Buy 1800 Sms @ ₹2300"
              />
              <PricingDetail
                service="SILVER"
                time="Validity 2 Year"
                smsService="100% FAST SMS"
                heading="Reasonable Pricing and Balance Value"
                item1=" 6 Alphabets Header Name"
                item2=" Secured Https API Available"
                item3=" Bulk SMS Working 24 Hours"
                item4=" We Offer a 14-Days Refund"
                item5=" English & 21+ Languages"
                item6=" Trans, Promo & OTP SMS"
                item7=" DLT & Must Be Activated"
                item8=" 100% Customer Satisfaction"
                details="Double the value, double the impact all at a price that makes sense."
                para="They don't sleep so that we can make thousands of clients. Their team always be there to support them 24x7, all year and if you want, support would be handled by Team completely"
                btnName="Buy 500 Sms @ ₹1000"
                btnName2="Buy 100 Sms @ ₹1500"
                btnName3="Buy 1800 Sms @ ₹2300"
              />

              <PricingDetail
                service="GOLD"
                time="Validity 3 Year"
                smsService="Call US For Price"
                heading="Gold Plan - Exclusivity on Demand"
                item1=" 6 Alphabets Header Name"
                item2=" Secured Https API Available"
                item3=" Bulk SMS Working 24 Hours"
                item4=" We Offer a 14-Days Refund"
                item5=" English & 21+ Languages"
                item6=" Trans, Promo & OTP SMS"
                item7="  Conversion Focus Templates"
                item8=" 100% Customer Satisfaction"
                details="Gold-standard service for those who seek nothing but the best, with a price that’s just a call away"
                para="Reliable service, honest price, very supportive customer service. We choose textguru as transactional sms provider 3 years back and very happy with their service. "
                btnName="Buy 500 Sms @ ₹1000"
                btnName2="Buy 100 Sms @ ₹1500"
                btnName3="Buy 1800 Sms @ ₹2300"
              />
              <PricingDetail
                service="DIAMOND"
                time="Validity 6 Year"
                smsService="Let's Talk"
                heading="GET FREE DLT EXPERT FOR YOUR DLT REG."
                item1=" 2-5 Seconds Delivery"
                item2=" Secured Https API Available"
                item3=" Bulk SMS Working 24 Hours"
                item11=" Live Video Call Support"
                item4=" We Offer a 14-Days Refund"
                item5=" English & 21+ Languages"
                item6=" Trans, Promo & OTP SMS"
                item7=" DLT & Must Be Activated"
                item8=" 100% Customer Satisfaction"
                item9=" Flexible Payment Plans"
                item10=" Free Google Ads Course"
                details="The ultimate SMS solution for the elite marketer - unparalleled service, unmatched speed, and a commitment to excellence."
                para="We are in Automobile services. I am using textguru services for the last 3 years. I am satisfied with their services. Text Guru is a good service provider in their field."
                btnName="Lets Talk"
              />
            </div>
            <div className="row refund">
              <div className="col-md-3">
                <p>
                  18% GST APPLY
                  <br />
                  WordPress Plugin Supported
                  <br />
                  <strong>Guarantee or Refund Policy:</strong> 4 Days Refund
                  Policy
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  18% GST APPLY
                  <br />
                  WordPress Plugin Supported
                  <br />
                  <strong>Hire A DLT Professional :</strong>
                  Free Worth Rs. 9,99/-
                  <br/>
                  <strong>Guarantee or Refund Policy:</strong> 15 Days Refund
                  Policy
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  18% GST APPLY
                  <br />
                  WordPress Plugin Supported
                  <br />
                  <strong>Free DLT Registration: :</strong> Hire A Free DLT
                  Professional In Just Rs. 2950/-<br/>
                  <strong>Guarantee or Refund Policy:</strong> 30 Days Refund
                  Policy
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  18% GST APPLY
                  <br />
                  WordPress Plugin Supported
                  <br />
                  <strong>
                    Buy 1 Lac SMS & Get Free Ebook [Erase Stress: Joyful Steps
                    Towards Peaceful Living] :
                  </strong>
                  Hire A Free DLT Professional In Just Rs. 2950/-
                  <strong>Guarantee or Refund Policy:</strong> 10 Days Refund
                  Policy
                </p>
              </div>
            </div>
          </div>
          <div className="row dltBox">
            <div className="col-md-3">
              <div className="docs">
                DLT Docs- Proprietor
              </div>
            </div >
            <div className="col-md-3">
              <div className="docs">
                DLT Docs- Partnership
              </div>
            </div> 
             <div className="col-md-3">
              <div className="docs">
                DLT Docs- Trust/School
              </div>
            </div>  
            <div className="col-md-3">
              <div className="docs">
                DLT Docs-Society
              </div>
            </div>
          </div>
        </div>
        <Guarantee/>
        <Footer/>
      </div>
    </div>
  );
};

export default Pricing;
