import React from "react";
import { Link } from "react-router-dom";
import About from "../images/slider1.jpg";

const AboutUs = () => {
  return (
    <div className="my-5">
      <h1 className="display-5 text-center my-5">About US</h1>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center my-3">
          <img src={About} alt="About Us" className="w-100 rounded-4" />
        </div>
        <div className="col-md-6 my-3">
          <div className="row">
            <div className="col-8">
              <h1 className="fs-4 mb-3 mt-2">About MEC</h1>
            </div>
            <div className="col-4 d-flex">
              <Link className="text-reddish mt-auto mb-3 ms-auto" to="/about">
                Read More
              </Link>
            </div>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            provident magnam voluptate non, facere impedit alias aspernatur
            harum nobis veritatis?
          </p>
          <div className="row">
            <div className="col-6 col-lg-4 my-2 d-flex flex-column align-items-center">
              <h1 className="">30</h1>
              <span className="">Graduations</span>
            </div>
            <div className="col-6 col-lg-4 my-2 d-flex flex-column align-items-center">
              <h1 className="">300</h1>
              <span className="">Graduates</span>
            </div>
            <div className="col-6 col-lg-4 my-2 d-flex flex-column align-items-center">
              <h1 className="">10</h1>
              <span className="text-center">Certificate Courses</span>
            </div>
            <div className="col-6 col-lg-4 my-2 d-flex flex-column align-items-center">
              <h1 className="">10</h1>
              <span className="">Teaching Staff</span>
            </div>
            <div className="col-6 col-lg-4 my-2 d-flex flex-column align-items-center">
              <h1 className="">15</h1>
              <span className="text-center">Non-Teaching Staff</span>
            </div>
            <div className="col-6 col-lg-4 my-2 d-flex flex-column align-items-center">
              <h1 className="">50</h1>
              <span className="">Current Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
