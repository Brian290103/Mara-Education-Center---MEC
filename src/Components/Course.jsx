import {
  faPlane,
  faStar,
  faMortarPestle,
  faBellConcierge,
  faJugDetergent,
  faComputer
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Course = ({ course }) => {
  const stars = [];
  const stars5 = [];

  const handleStars = ({ name, desc, ic, rate }) => {
    for (let i = 0; i < rate; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} />);
      // stars.push(<i class="fa-solid fa-star me-2"></i>);
    }
    for (let i = 0; i < 5; i++) {
      stars.push(<i class="fa-regular fa-star me-2"></i>);
    }

    // Only require 5 stars only
    for (let i = 0; i < 5; i++) {
      stars5.push(stars[i]);
    }
  };

  return (
    <div
      className="col-12 col-md-6 col-lg-4 my-3"
      style={{ height: "400px !important" }}
    >
      <div className="card border-0 bg-light shadow-lg h-100">
        <div className="card-body py-3 row">
          <div className="col-2">
            {course.ic === "faPlane" ? (
              <FontAwesomeIcon icon={faPlane} className="display-5" />
            ) : course.ic === "faMortarPestle" ? (
              <FontAwesomeIcon icon={faMortarPestle} className="display-5" />
            ) : course.ic === "faBellConcierge" ? (
              <FontAwesomeIcon icon={faBellConcierge} className="display-5" />
            ) : course.ic === "faJugDetergent" ? (
              <FontAwesomeIcon icon={faJugDetergent} className="display-5" />
            ) : course.ic === "faComputer" ? (
              <FontAwesomeIcon icon={faComputer} className="display-5" />
            ) : (
              ""
            )}
          </div>
          <div className="col-8">
            <div className="desc">
              <h1 className="fs-4">{course.name}</h1>
              <p className="">{course.desc}</p>
              <div className="">{stars5}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
