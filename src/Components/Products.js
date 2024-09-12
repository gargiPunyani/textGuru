import React from 'react'
import ProductDetails from '../Pages/ProductDetails'
import Navbar from './Navbar'
import Slike from '../Pages/Slike'
import { Link } from 'react-router-dom'
import "../Css/Product.css"

const Products = () => {
    const Pagesstring = {
        at: 'at'
    }
  return (
    <div className='container-fluid'>
        <Navbar/>
        <div className='container'>
        <div>
            <ProductDetails
            heading="Premium Bulk SMS Service To Grow Your Business. Call 082840 47608"
            para="Bulk SMS: TextGuru.In is a leading Bulk SMS Service Provider in India which helps businesses to send Bulk SMS to their clients for SMS Advertising with Bulk SMS Software"
            list1="Promo SMS in Any Pincode"
            list2="Authentic Database For Better Response"
            list3="Get SenderID in 6 Alphabets"
            list4="English & 21+ Languages"
            img="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811929/home2_irbcdl.svg"
            />
        </div>
        <div>
        <ProductDetails
            heading="Send Geofencing Bulk SMS in Any Pincode In India"
            para="Geofencing Bulk SMS Service India: Unlock targeted marketing success! Geofencing combined with bulk SMS offers precise, impactful reach to your desired audience. Elevate your strategy now!"
            list1="Promo SMS in Any Pincode"
            list2="Authentic Database For Better Response"
            list3="Get SenderID in 6 Alphabets"
            list4="English & 21+ Languages"
            img="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811933/home4_xxokbv.svg"
            />
        </div>
        <div className='product'>
            <h3>
                Best Bulk SMS Service India
            </h3>
        </div>
        <Slike/>
    </div>
    <div >
        <h4>
            Bulk SMS
        </h4>
        <p>
            The word bulk sms refers to a bundle of electronically transferable space, which can carry at least 160 Characters in each one of its. Bulk sms service has overrun the traditional marketing strategies with its unique spreading characteristics in the public. It will be interesting to understand that the phone ratio of our country has increased many folds compared to the last ten years. The success of the Group SMS was in its extreme reach and the ease of access. One in every three person reads sms regularly and sends replies in our country. It will be interesting to know that unlike other countries; about 83% of the Indian mobile users have not registered in the ndnc registry database.
            </p>
            <p>
            Bulk sms in India has reached second position in an advertisement, campaigning in all media after tele commercials. The average number of bulk sms delivered each day has reached 18% of all sent sms to India. SMS contests and sms voting have triple folded in the last five years. SMS messaging is a powerful marketing tool, which can launch the details of a company�s products and services to a large demography.
            </p>
    </div>
    <div> 
        <h3>
        The Game-Changing Role of GeoFencing Bulk SMS in India
        </h3>
        <p>
        In the bustling streets of India, where technology and tradition intertwine, a new era of communication is emerging. Geofencing bulk SMS, a technology that combines the precision of location-based services with the ubiquity of text messaging, is transforming how businesses and organizations reach their audience. This article delves into the significance of this technology in the Indian context, exploring its impact on marketing, public services, and beyond.
        </p>
        <h3>
        The Geofencing Advantage
        </h3>
        <p>At its core, geofencing allows businesses to create virtual perimeters in specific geographic areas. When a mobile user enters or exits this area, they can receive tailored SMS messages. This technology's power lies in its precision and relevance - messages are sent to people who are most likely to be interested based on their location.

        </p>
        <p>
        Beyond commercial use, geofencing bulk SMS has significant potential in public services. Government agencies can send alerts about local emergencies, health advisories, or community events. During the COVID-19 pandemic, this technology was instrumental in disseminating timely information to specific areas under lockdown or where vaccination drives were taking place.
        </p>
        <h3>
            Conclusion
        </h3>
        <p>
        Geofencing bulk SMS represents a significant leap forward in how India communicates. By marrying the simplicity of SMS with the sophistication of location-based technology, it offers a powerful tool for businesses and authorities alike. As this technology evolves, it promises to become an even more integral part of India's digital landscape, changing the way we think about connectivity and community outreach.
        </p>
        <p>
        In this rapidly evolving digital era, India is not just keeping pace but setting new benchmarks. Geofencing bulk SMS is a shining example of this, marking a new chapter in the nation's journey towards technological empowerment.
        </p>
    </div>
    <div className='broadcast'>
        <h4>
        Want To Broadcast Bulk SMS in Your City?
        </h4>
        <h5>
        Ready? - Try our service at NO COST 👇
        </h5>
        <Link className='link' to="">Try Free Demo</Link>
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

export default Products