import {
  faClose,
  faPencil,
  faPencilRuler,
  faPenRuler,
  faSchool,
  faSchoolCircleCheck,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import Social from "./Social";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 60) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  return (
    <div className="Navigation">
      <Social />
      <nav
        className={`${
          isFixed
            ? "navbar navbar-expand-md bg-reddish position-fixed top-0 right-0 left-0"
            : "navbar navbar-expand-md bg-reddish"
        }`}
      >
        <div className="container-fluid h-100">
          <Link className="navbar-brand text-white h-100" to="/">
            <img
              src={Logo}
              alt="MEC Logo"
              className="h-100 rounded-circle me-2"
            />
            <span>MEC</span>
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="btn d-md-none btn-light"
            type="button"
            // data-bs-toggle="offcanvas"
            // data-bs-target="#offcanvasRight"
            // aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas */}

          <div
            className={`${
              isOpen
                ? "offcanvas offcanvas-end bg-reddish navigation-offcanvas visible"
                : "offcanvas offcanvas-end bg-reddish navigation-offcanvas "
            }`}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header d-none">
              <h5 id="offcanvasRightLabel">Maasai Education Center</h5>
              <button
                type="button"
                className="btn-close text-reset bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={() => setIsOpen(false)}
                      >
                        Maasai Education Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={() => setIsOpen(false)}
                      >
                        Oreteti Mara Lodge{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/news"
                    onClick={() => setIsOpen(false)}
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/gallery"
                    onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button
                className="btn close-btn d-md-none d-inline-block m-2"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className="text-white display-6"
                />
              </button>
              <button className="btn btn-outline-reddish px-4 d-none d-lg-block">
                Enrol <FontAwesomeIcon icon={faPencil} className="ms-3" />
              </button>
            </div>
          </div>
          {/* Offcanvas */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
