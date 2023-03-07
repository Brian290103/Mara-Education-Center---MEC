import {
  faCalendar,
  faClock,
  faUserClock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

const Footer = () => {
  return (
    <div className="Footer mt-5 p-3">
      <div className="row my-2">
        <div className="col-md-3 d-flex flex-column align-items-center mt-2">
          <img
            src={Logo}
            alt="MEC-Logo"
            width={80}
            className="rounded-circle me-2"
          />
          <span className="mt-2 fs-4">Maasai Education Center</span>
          <p className="mb-2">Follow us on social media</p>
          <div className="row">
            <ul className="nav social d-flex w-auto">
              <li className="sitem">
                <Link className="slink">
                  <FontAwesomeIcon icon={faClock} className="text-white fs-3" />
                </Link>
              </li>
              <li className="sitem">
                <Link className="slink">
                  <FontAwesomeIcon icon={faClock} className="text-white fs-3" />
                </Link>
              </li>
              <li className="sitem">
                <Link className="slink">
                  <FontAwesomeIcon icon={faClock} className="text-white fs-3" />
                </Link>
              </li>
              <li className="sitem">
                <Link className="slink">
                  <FontAwesomeIcon icon={faClock} className="text-white fs-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 d-flex flex-column align-items-center mt-2">
          <span className="fs-4 mb-3">Quick Links</span>
          <ul className="nav flex-column">
            <li className="">
              <Link className="nav-link text-white fw-light py-0">
                Maasai Education Center
              </Link>
            </li>
            <li className="">
              <Link className="nav-link text-white fw-light py-0">
                Oreteti Mara Lodge
              </Link>
            </li>
            <li className="">
              <Link className="nav-link text-white fw-light py-0">Gallery</Link>
            </li>
            <li className="">
              <Link className="nav-link text-white fw-light py-0">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-1 d-flex flex-column align-items-center mt-2">
          <span className="fs-4 mb-3">Pages</span>
          <ul className="nav flex-column">
            <li className="">
              <Link className="nav-link text-white fw-light py-0">Home </Link>
            </li>
            <li className="">
              <Link className="nav-link text-white fw-light py-0">About </Link>
            </li>
            <li className="">
              <Link className="nav-link text-white fw-light py-0">Gallery</Link>
            </li>
            <li className="">
              <Link className="nav-link text-white fw-light py-0">
                Contact US
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 d-flex flex-column align-items-center mt-2">
          <span className="fs-4 mb-3">Latest News</span>
          <ul className="nav flex-column">
            <li className="">
              <div className="row text-white fw-light py-0">
                <div className="col-4">
                  <img
                    src={Logo}
                    alt="news one"
                    width={100}
                    height={80}
                    className="rounded-3"
                  />
                </div>
                <div className="col-8">
                  <span className="fw-bold">New Intake Available</span>{" "}
                  <p className="fw-light">Lorem ipsum dolor sit amet.</p>{" "}
                  <small className="">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-white me-2 fs-5"
                    />
                    25/Dec/2023
                  </small>
                </div>
              </div>
              <div className="row text-white fw-light py-0">
                <div className="col-4">
                  <img
                    src={Logo}
                    alt="news one"
                    width={100}
                    height={80}
                    className="rounded-3"
                  />
                </div>
                <div className="col-8 ">
                  <span className="fw-bold">New Intake Available</span>{" "}
                  <p className="fw-light">Lorem ipsum dolor sit amet.</p>{" "}
                  <small className="">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-white me-2 fs-5"
                    />
                    25/Dec/2023
                  </small>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-md-3 d-flex flex-column align-items-center mt-2">
          <span className="fs-4 mb-3">Contact Info.</span>
          <ul className="nav flex-column">
            <li className="">
              <b>Address: </b> P.O. 83, Lolgorian
            </li>
            <li className="">
              <b>Phone:</b> +254 789 654 434{" "}
            </li>
            <li className="">
              <b>Phone:</b> +254 789 654 434{" "}
            </li>
            <li className="">
              <b>Email:</b> info@maraeducationcenter.com{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="row border-top my-2 py-3">
        <span className="text-center">
          &copy; Maasai Education Center 2023, Inc. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
