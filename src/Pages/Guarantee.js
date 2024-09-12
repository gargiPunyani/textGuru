import React from 'react'
import "../Css/Guarantee.css"

const Guarantee = () => {
  return (
    <div>
        <div className='container'>
            <div className="row smsGuarantee">
                <div className='col-md-3 guarantee'>
                    <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721981110/pricing2_dfms6w.png' alt=''/>
                </div>
                <div className='col-md-7 guaranteeOwner'>
                    <h4>Our 100% No-Risk Money Back Guarantee!</h4>
                    <p>We're looking forward to having you experience TextGuru Bulk SMS Service. In the next 30 days, feel free to contact us if TextGuru Bulk SMS Service doesn't fit your needs.<br/>
                    If you are not satisfied with our service, we will refund 100% of your money. We don't ask any questions.
                    </p>
                    <p className='thanks'>
                        Thanks
                    </p>
                    <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721981124/pricing3_rudkw7.png" alt=''/>
                    <p className='thanks'>
                    Sushil Kanda<br/>
                    Founder & CEO, www.TextGuru.In
                    </p>
                </div>
            </div>
            <div className='paymentMethod'>
                <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721987130/payment_pmayoj.webp' alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Guarantee