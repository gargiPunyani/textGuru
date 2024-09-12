import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";


const SlickComponent = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
      };
  return (
    <div>
      <h2>
        More than 51,647 happy customers who searched TextGuru.In for Lowest
        Bulk SMS Service pricing In India.
      </h2>
      <div>
        <div className="slider-container">
          <Slider {...settings}>
           
                <div>
                  <img
                    src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811819/newSlider_u5r8mr.webp"
                    alt=""
                  />
                  <h5>TextGuru</h5>
                  <p>
                    “They don't sleep so that we can make thousands of clients. Their team always be there to support them 24x7, all year and if you want, support would be handled by Team completely.”</p>
                  <p>
                    <strong>-- Shivraj Bharti</strong>
                  </p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
            </div>
            <div>
                  <img
                    src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811819/newSlider_u5r8mr.webp"
                    alt=""
                  />
                  <h5>TextGuru</h5>
                  <p>
                    “They don't sleep so that we can make thousands of clients. Their team always be there to support them 24x7, all year and if you want, support would be handled by Team completely.”</p>
                  <p>
                    <strong>-- Shivraj Bharti</strong>
                  </p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
            </div> <div>
                  <img
                    src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1721811819/newSlider_u5r8mr.webp"
                    alt=""
                  />
                  <h5>TextGuru</h5>
                  <p>
                    “They don't sleep so that we can make thousands of clients. Their team always be there to support them 24x7, all year and if you want, support would be handled by Team completely.”</p>
                  <p>
                    <strong>-- Shivraj Bharti</strong>
                  </p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlickComponent;
