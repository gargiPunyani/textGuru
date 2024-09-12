import React from "react";
import "../Css/Home.css";
import Navbar from "./Navbar";
import Slike from "../Pages/Slike";
import HomeSec from "../Pages/HomeSec";
import HomeSec2 from "../Pages/HomeSec2";
import Question from "../Pages/Question";
import WhyTextGuru from "../Pages/WhyTextGuru";
import Benefits from "../Pages/Benefits";
import Footer from "./Footer";
// import SlickComponent from '../Pages/SlickComponent'

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="firstSection">
        <p>
          <strong>
            Our Mission:
            <span>
              <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811896/handshake_it5sjr.svg" alt=""/>
            </span>
            Rapid Delivery, Competitive Pricing & Unparalleled Efficiency in
            Messaging.
          </strong>
        </p>
      </div>
      <Navbar />
      <HomeSec />
      <div className="slike container">
        <Slike />
      </div>
      <HomeSec2 />
      <Question />
      <WhyTextGuru />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
