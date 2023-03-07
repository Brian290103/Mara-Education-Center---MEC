import React from "react";
import Staff from "./Staff";

const Staffs = () => {
  const staff = [
    {
      id: 1,
      name: "John Doe",
      work: "Manager",
      course: "Management",
      img: "../images/logo.jpg"
    },
    {
      id: 2,
      name: "Jane Doe",
      work: "Instructor",
      course: "Tour and Traveling",
      img: "../images/logo.jpg"
    },
    {
      id: 3,
      name: "John Doe",
      work: "Instructor",
      course: "Culinary Arts",
      img: "../images/logo.jpg"
    }
  ];
  return (
    <div className="my-5">
      <h1 className="display-5 text-center my-5">Our Staffs</h1>
      <p className="">
        In MEC, we have qualified staff in their various areas of expertise to
        help manage the school better. They include:
      </p>
      {/* Staff Section */}
      <div className="row">
        {staff.map((staff, index) => {
          return <Staff staff={staff} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Staffs;
