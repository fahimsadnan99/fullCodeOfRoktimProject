import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomarQuto = () => {

      const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };
    
    return (
      <div className="text-center">
        <Slider {...settings}>
          <div>
            <div className="text-center">
              <div style={{ width: "700px", margin: "0 auto" }}>
                <div>
                  <div className="imgSlide">
                    <img
                      src="./img/img1.jpg"
                      alt="img"
                      className="img-fluid mx-auto"
                      style={{ width: "80px", borderRadius: "50%" }}
                    ></img>
                  </div>
                  <div className="qute my-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem molestias cupiditate eius? Quia fugit
                      molestias dignissimos tempora pariatur maxime consequatur.
                    </p>
                    <p style={{ color: "blue" }}>
                      <i>-Apon Group</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center">
              <div style={{ width: "700px", margin: "0 auto" }}>
                <div>
                  <div className="imgSlide">
                    <img
                      src="./img/img3.jpg"
                      alt="img"
                      className="img-fluid mx-auto"
                      style={{ width: "80px", borderRadius: "50%" }}
                    ></img>
                  </div>
                  <div className="qute my-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem molestias cupiditate eius? Quia fugit
                      molestias dignissimos tempora pariatur maxime consequatur.
                    </p>
                    <p style={{ color: "blue" }}>
                      <i>-Apon Group</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center">
              <div style={{ width: "700px", margin: "0 auto" }}>
                <div>
                  <div className="imgSlide">
                    <img
                      src="./img/img2.jpg"
                      alt="img"
                      className="img-fluid mx-auto"
                      style={{ width: "80px", borderRadius: "50%" }}
                    ></img>
                  </div>
                  <div className="qute my-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem molestias cupiditate eius? Quia fugit
                      molestias dignissimos tempora pariatur maxime consequatur.
                    </p>
                    <p style={{ color: "blue" }}>
                      <i>-Apon Group</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
}

export default CustomarQuto
