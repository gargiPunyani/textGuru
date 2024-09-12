import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "../Css/Slike.css"


const Slike = () => {
  var settings={
    
    
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true
  }
  
  return (
    <div>
        <div className="slider-container">
      <Slider {...settings}>
        <div className='slide'>
          <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811933/slider1_fi1hrr.webp' alt='' />
        </div>
        <div className='slide'>
          <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811934/slider2_wrznza.webp' alt=''/>       
          </div>
        <div className='slide'>
          <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811934/slider3_ywporr.webp' alt=''/>       
          </div>
        <div className='slide'>
          <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811935/slider4_x5m8k8.webp' alt=''/>
        </div>
        <div className='slide'>
          <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811935/slider5_a1lxz1.png' alt=''/>
        </div>
        <div className='slide'>
          <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811936/slider6_umrchn.webp' alt=''/>
        </div>
        <div className='slide'>
          <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811937/slider7_vi1cqa.webp' alt=''/>
        </div>


      </Slider>
    </div>

    </div>
  )
}

export default Slike