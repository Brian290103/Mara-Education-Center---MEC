import {
  faCaretDown,
  faCaretLeft,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../Components/Header";
import Map from "../Components/Map";

const Contact = () => {
  return (
    <div className="Contact">
      <Header title={"Contact"} />
      <div className="container-lg my-5">
        <h1 className="display-5 text-center">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="me-2 text-reddish d-none d-md-inline"
          />
          Contact Us For Any Queries
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="ms-2 text-reddish  d-none d-md-inline"
          />
        </h1>
        <div className="row my-5">
          <div className="col-lg-6 my-2">
            <form
              action=""
              className="shadow px-3 py-5 my-2 rounded-4 h-100 my-auto"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name Here"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email Here"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter Your Subject Here"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter Your Message Here"
                  id="message"
                  cols="30"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <input type="reset" className="btn btn-reddish w-100 py-2" />
                </div>
                <div className="col-6">
                  <input type="submit" className="btn btn-reddish w-100 py-2" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 my-2">
            <div className=" shadow px-3 py-5 my-2 rounded-4 h-100 my-auto d-flex flex-column">
              <h1 className="fs-3 fw-light">
                Get In Touch
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="ms-2 text-reddish"
                />
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="ms-2 text-reddish"
                />
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="ms-2 text-reddish"
                />
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="ms-2 text-reddish"
                />
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="ms-2 text-reddish"
                />
              </h1>
              <p className="mt-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia assumenda error, autem aliquid doloribus vero facere
                velit ipsa voluptatem deleniti corrupti ipsam hic enim ea?
              </p>
              <table className="table">
                <tr>
                  <th>Phone</th>
                  <td>+254 703 234 533</td>
                </tr>
                <tr>
                  <th>Phone (Manager)</th>
                  <td>+254 703 234 533</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    info@ <br /> maasaieducationcenter.com
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    P.O. Box 38, Lolgorian <br />
                    Narok, Kenya
                  </td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td>maasaieducationcenter.com</td>
                </tr>
              </table>
              <h1 className="fs-5 mt-auto mx-auto">
                The physical geographical map{" "}
                <FontAwesomeIcon icon={faCaretDown} className="ms-2" />
              </h1>
            </div>
          </div>
        </div>
        <div className="row my-2 ">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
