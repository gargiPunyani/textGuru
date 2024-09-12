import React from 'react'
import Navbar from './Navbar'
import HomeSec from '../Pages/HomeSec'
import HomeSec2 from '../Pages/HomeSec2'
import Question from '../Pages/Question'
import WhyTextGuru from '../Pages/WhyTextGuru'
import Benefits from '../Pages/Benefits'
import Footer from './Footer'

const About = () => {
  return (
    <div>
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
      <HomeSec2 />
      <Question />
      <WhyTextGuru />
      <Benefits />
      <Footer />
    </div>
    </div>
  )
}

export default About