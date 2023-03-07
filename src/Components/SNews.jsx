import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import News from "../images/slider1.jpg";

const SNews = ({ news }) => {
  return (
    <div className="col-sm-6 col-lg-3 my-2">
      <div className="card border-0 shadow p-2">
        <img src={News} alt="news" className="rounded-2" />
        <div className="card-body p-1">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.decr}</p>
          <p className="card-text text-reddish">
            <FontAwesomeIcon icon={faCalendar} className="me-2" />
            {news.date}
          </p>
          <Link className="text-reddish float-end" to="/news:/nid">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SNews;
