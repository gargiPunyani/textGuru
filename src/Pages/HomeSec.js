import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import "../Css/Home.css"
import Aos from 'aos'
import "aos/dist/aos.css"


const HomeSec = () => {
     useEffect(()=>{
        Aos.init()

     },[])
    return (
        <div>
            <div className='container secondSection'>
                <div className='row'>
                    <div data-aos="fade-right"
                    data-aos-duration="2000"
                    className='col-md-6 secSection'>
                        <h1>
                            Need Speed? Upgrade to Fast Bulk SMS Service India Today
                        </h1>
                       
                        <p>
                            <strong>SMS Bulk Service:  </strong>
                            Boost Your Business with Our Best Bulk SMS Services in India. Get OTP SMS, Transactional SMS, Promotional SMS, Enterprise Bulk SMS, Bulk SMS API & Gateway.
                        </p>
                        <div className='offers'>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                Trans, Promo & OTP Bulk SMS
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                We Offer a secure HTTPs API
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                Get SenderID in 6 Alphabets
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                English & 21+ Languages
                            </li>
                        </ul>
                        </div>
                        <div className='homeButton'>
                            <button className='btn-price'>See Pricing</button>
                            <button className='btn-price'>Start For Free</button>

                            <div className='review'>
                                <p>
                                    <strong>  4.9/5 </strong>
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    Rating On Google
                                </p>

                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left"
                    data-aos-duration="2000"
                     className='col-md-6 secSection2'>
                        <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811908/home1_bvcys2.webp' alt=''/>
                    </div>
                </div>
                <div className='thirdSection'>
                    <p>
                        <strong>
                            Powering Up SMS Marketing in India, Since 2006
                        </strong>
                    </p>              
                </div>


            </div>
        </div>
    )
}

export default HomeSec