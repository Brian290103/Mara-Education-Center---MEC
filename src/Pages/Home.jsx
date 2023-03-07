import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import CarouselSlider from "../Components/CarouselSlider";
import LatestNews from "../Components/LatestNews";
import AboutUs from "../Components/AboutUs";
import OurCourses from "../Components/OurCourses";
import OretetiMaraLodge from "../Components/OretetiMaraLodge";
import Founders from "../Components/Founders";
import Staffs from "../Components/Staffs";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <>
      <CarouselSlider />
      <div className="container-md">
        <LatestNews />
        <AboutUs />
        <OurCourses />
        <OretetiMaraLodge />
        <Founders />
        <Staffs />
        <Testimonials />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
