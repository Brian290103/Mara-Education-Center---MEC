import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="header position-relative bg-reddish"
      style={{ height: "calc( 50vh - 122px )" }}
    >
      <h1
        className="display-6 position-absolute top-50  center-50 w-100 text-white "
        style={{ zIndex: 99 }}
      >
        {`${title}/`}
      </h1>
    </div>
  );
};

export default Header;
