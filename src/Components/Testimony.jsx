import React from "react";
import Logo from "../images/logo.jpg";

const Testimony = ({ testp }) => {
  return (
    <div className=" my-3 mx-auto staff">
      <div className="card border-0 bg-light shadow-lg h-100 pt-3 px-3 rounded-5">
        <img
          src={Logo}
          alt="staff-img"
          className="rounded-circle mx-2"
          width={130}
        />
        <div className="card-body py-3 row">
          <p className="">{testp.remarks}</p>
          <h1 className="display-6">{testp.name}</h1>
          <h3 className="text-reddish">{testp.work}</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
