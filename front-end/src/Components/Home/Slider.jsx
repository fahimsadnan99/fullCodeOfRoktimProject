import React from 'react'

const Slider = () => {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/banner1.jpeg"
              className="d-block img-fluid sliderImg"
              alt="img1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/banner3.jpeg"
              className="d-block img-fluid sliderImg"
              alt="img3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/banner2.jpeg"
              className="d-block img-fluid sliderImg"
              alt="img5"
            />
          </div>
          <div className="carousel-item">
            <img src="./img/banner4.jpeg" className="d-block img-fluid  sliderImg" alt="img2" />
          </div>
        </div>
        
      </div>
    );
}

export default Slider
