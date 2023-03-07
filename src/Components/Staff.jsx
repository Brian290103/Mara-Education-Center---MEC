import React from "react";
import Logo from "../images/logo.jpg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Staff = ({ staff }) => {
  return (
    <div
      className="col-12 col-md-6 col-lg-4 my-3 mx-auto"
      style={{ width: 300 }}
    >
      <div className="card border-0 bg-light shadow-lg h-100 pt-3">
        <img
          src={Logo}
          alt="staff-img"
          className="rounded-circle mx-auto"
          width={130}
        />
        <div className="card-body py-3 row">
          <table className="table">
            <tr>
              <th className="ps-2">Name:</th>
              <td>{staff.name}</td>
            </tr>
            <tr>
              <th className="pe-3 ps-2">Occupation:</th>
              <td className="">{staff.work}</td>
            </tr>
            <tr>
              <th className="ps-2">Course:</th>
              <td>{staff.course}</td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center pt-3">
                {/* Facebook Email */}
                <Link className="text-reddish">
                  <FontAwesomeIcon icon={faUser} className="fs-5" />
                </Link>
                <Link className="text-reddish">
                  <FontAwesomeIcon icon={faUser} className="fs-5" />
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Staff;
