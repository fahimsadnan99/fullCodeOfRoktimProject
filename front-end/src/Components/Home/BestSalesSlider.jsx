import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

const BestSalesSlider = ({array}) => {
   const settings = {
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     pauseOnHover: true,

     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
          
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };
    return (
      <div className="bestSlider">
        <Slider {...settings}>
         
            {array &&
              array.map((item) => {
                return (
                  <div className="sliderItem">
                    <Card item={item}></Card>
                  </div>
                ); 
              })}
         
        </Slider>
      </div>
    );
}

export default BestSalesSlider

