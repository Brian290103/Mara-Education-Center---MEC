import {
  faBed,
  faCoffee,
  faEnvelope,
  faSchool
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Social = () => {
  const Facebook = "https://www.facebook.com";
  const Youtube = "https://www.twittter.com";
  const Instagram = "https://www.instagram.com";
  const Email = "info@maraeducationcenter.com";
  return (
    <div className="Social">
      <nav className="navbar-light bg-light social">
        <div
          className="container-lg
        "
        >
          <div className="row">
            <div className="col-6 col-md-3  ">
              <ul className="navbar-nav d-flex flex-row justify-content-center">
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5"
                    aria-current="page"
                    to={Facebook}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  fs-5"
                    aria-current="page"
                    to={Instagram}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  fs-5"
                    aria-current="page"
                    to={Youtube}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  fs-5"
                    aria-current="page"
                    to={Email}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-5   d-md-block d-none">
              <Marquee
                gradient={false}
                direction="left"
                speed={90}
                pauseOnHover
                className="fs-3 fw-light text-reddish"
              >
                Maasai Education Center
              </Marquee>
            </div>
            <div className="col-6 col-md-3  ">
              <ul className="navbar-nav d-flex flex-row justify-content-center">
                <li className="nav-item border-end pe-2 me-0 border-danger">
                  <Link
                    className="nav-link  d-flex"
                    aria-current="page"
                    to="/home"
                  >
                    <FontAwesomeIcon icon={faSchool} className="my-auto me-2" />
                    <marquee className="my-auto">
                      Maasai Education Center
                    </marquee>
                  </Link>
                </li>
                <li className="nav-item border-start ps-2 ms-0 border-danger">
                  <Link
                    className="nav-link  d-flex "
                    aria-current="page"
                    to="/home"
                  >
                    <FontAwesomeIcon icon={faBed} className="my-auto me-2" />
                    <marquee className="my-auto">Oreteti Mara Lodge</marquee>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Social;
