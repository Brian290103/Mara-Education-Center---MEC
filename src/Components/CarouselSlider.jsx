import React from "react";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.webp";
import slider3 from "../images/slider3.webp";

const CarouselSlider = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active  "
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=" "
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=" "
        ></button>
      </div>
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100">
          <div className="dummy"></div>
          <img src={slider1} alt="slider1" className="h-100 w-100" />
          <div className="container">
            <div className="carousel-caption text-center">
              <h1 className="display-2">Maasai Education Center</h1>
              <p className="fs-3  fw-light d-none d-sm-block">
                the Style Hotel School
              </p>
              <div className="btn btn-lg btn-reddish">
                Enroll Now <i className="fa-regular fa-bookmark ms-2"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item h-100">
          <div className="dummy"></div>
          <img src={slider2} alt="slider1" className="h-100 w-100" />
          <div className="container">
            <div className="carousel-caption text-center">
              <h1 className="display-2">Mara Lodge</h1>
              <p className="fs-3 fw-light">the Style Hotel School</p>
              <div className="btn btn-lg btn-reddish">Book Now</div>
            </div>
          </div>
        </div>
        <div className="carousel-item h-100">
          <div className="dummy"></div>
          <img src={slider3} alt="slider1" className="h-100 w-100" />
          <div className="container">
            <div className="carousel-caption text-center">
              <h1 className="display-2">All Are Welcomed</h1>
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next "
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSlider;
