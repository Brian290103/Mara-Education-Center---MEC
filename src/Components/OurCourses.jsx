import React from "react";
import { Link } from "react-router-dom";
import Course from "./Course";

const OurCourses = () => {
  const courses = [
    {
      cid: 1,
      name: "Tour and Travel Operations",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium.",
      rate: 5,
      ic: "faPlane"
    },
    {
      cid: 2,
      name: "Culinary Arts",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium.",
      rate: 4,
      ic: "faMortarPestle"
    },
    {
      cid: 3,
      name: "Front Office Operations",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium.",
      rate: 4,
      ic: "faBellConcierge"
    },
    {
      cid: 4,
      name: "Housekeeping and Laundry",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium.",
      rate: 4,
      ic: "faJugDetergent"
    },
    {
      cid: 5,
      name: "Computer Packages",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium.",
      rate: 4,
      ic: "faComputer"
    }
  ];

  return (
    <div className="my-5">
      <h1 className="display-5 text-center my-5">Our Courses</h1>
      <div className="row ">
        <div className="col-8">
          <p className="">In MEC, we offer the following awesome courses:</p>
        </div>
        <div className="col-4">
          <Link className="float-end text-reddish" to="/courses">
            Read More
          </Link>
        </div>
      </div>
      {/* News Section */}
      <div className="row">
        {courses.map((course, index) => {
          return <Course course={course} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OurCourses;
