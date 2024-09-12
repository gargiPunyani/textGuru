import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import "../Css/Footer.css"

const Footer = () => {
  return (
    <div>
    <div className='container-fluid footer'>
        <div className='container'>

            <div className='row '>
                <div className='col-lg-3'>
                    <h5>
                        Contact Info
                    </h5>
                    <ul>
                        <li>
                        TextGuru.in
                        </li>
                        <li>DOUBLEM TECHNOLOGIES</li>
                        <li>
                        Address: 91-E, Calibre Plaza, Opp Bhadaur House, Ludhiana, 141008.
                        </li>
                        <li>
                            <FaPhoneAlt className='icon'/>082840 47608
                        </li>
                        <li>
                            <FaEnvelope className='icon'/>E-mail: info@textguru.in
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h5>
                        Get Details
                    </h5>
                    <ul>
                        <li>
                        Reseller Bulk SMS
                        </li>
                        <li>
                        Affiliate Program
                        </li>
                        <li>
                        Press
                        </li>
                        <li>
                        Terms of Services
                        </li>
                        <li>
                        Refund Policy
                        </li>
                        <li>
                        Invest in TextGuru
                        </li>
                        <li>
                        TextGuru Promise
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h5>
                        Location Services
                    </h5>
                    <ul>
                        <li>
                        Bulk SMS Service In Navi Mumbai
                        </li>
                        <li>
                        Bulk SMS Service In New Delhi
                        </li>
                        <li>
                        Bulk SMS Service In Bangalore
                        </li>
                        <li>
                        Bulk SMS Service In Gurgaon
                        </li>
                        <li>
                        Bulk SMS Service In Hyderabad
                        </li>
                        <li>
                        Bulk SMS Service In Ludhiana
                        </li>
                        <li>
                        Bulk SMS Service for CA
                        </li>
                        <li>
                            Bulk SMS Service for Startups
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h5>
                        Our Mission
                    </h5>
                    <p>
                    Since 2006, TextGuru.in has been providing powerful cloud-based bulk SMS service to Thousands Of Happy Customers in India.
                    </p>
                    <p>
                    We make it easy for everyone to send OTP SMS, Transactional Bulk SMS, and Promotional Bulk SMS in India.
                    </p>
                    <p>
                    We aim to scale your brand with Premium Bulk SMS Services as part of our brand mission
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <h5>
                    OUR BANK DETAILS
                    </h5>
                    <p>
                    <ul>
                        <li>
                        DOUBLEM TECHNOLOGIES
                        </li>
                        <li>
                            <strong>A/C Number:</strong>
                            01123395841
                        </li>
                        <li>
                            <strong>Bank:</strong>
                            ICICI Bank LTD.
                        </li>
                        <li>
                            <strong>IFSC NO:</strong>
                            ICIC001122
                        </li>
                        <li>
                            <strong>UPI id:</strong>
                            abc@icici
                        </li>
                    </ul>
                    </p>
                </div>
                <div className='col-md-3'>
                    <h5>
                    DLT HELP
                    </h5>
                    <ul>
                        <li>
                        Free DLT Training & Webinar
                        </li>
                        <li>
                        DLT Registration On MTNL AS SP
                        </li>
                        <li>
                        DLT Registration On MTNL AS PC
                        </li>
                        <li>
                        MSME-Udyam Registration
                        </li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h5>
                    INTEGRATIONS
                    </h5>
                    <ul>
                        <li>
                        Hitech Billing Software
                        </li>
                        <li>
                        Royal POS
                        </li>
                        <li>
                        Pabbly
                        </li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h5>
                        News & Media
                    </h5>
                    <ul>
                        <li>
                            The Hindustan Express
                        </li>
                        <li>
                            Yes Punjab 
                            </li>
                            <li>
                                Times Now
                            </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className='footerCopyright'>
            
                <div className='copyrightImage'>
                    <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721891294/logo2_obibkf.png' alt=''/>
                </div>
                <div className='copyrightDetails'>
                    <p>
                    &copy; @ 2006 - 2024 www.TextGuru.in. All rights reserved.
                    </p>
                    <p>
                    Each trademark is owned by its respective owner.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Footer