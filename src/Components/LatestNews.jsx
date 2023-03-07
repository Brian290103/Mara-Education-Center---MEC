import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import SNews from "./SNews";

const LatestNews = () => {
  const news = [
    {
      nid: 1,
      title: "January Intake in Progress",
      decr: "Come all and join us as we begin this education course this year.",
      date: "12/01/2022",
      image: "../images/slider1.jpg"
    },
    {
      nid: 2,
      title: "Arrival of our Managers",
      decr: "Mariska and Adri will be Joining us this month.",
      date: "1/02/2023",
      image: "../images/slider1.jpg"
    },
    {
      nid: 3,
      title: "Graduation of our students",
      decr: "Our 27th graduation will begin on 23/Dec/2023",
      date: "1/02/2023",
      image: "../images/slider1.jpg"
    },
    {
      nid: 4,
      title: "Beginning of our Exams",
      decr: "This term exams will begin on 23/Mar/2023",
      date: "1/02/2023",
      image: "../images/slider1.jpg"
    }
  ];
  return (
    <div className="my-5">
      <h1 className="display-5 text-center my-5">Our Latest news</h1>
      <div className="row ">
        <div className="col-8">
          <p className="">
            Welcome All to Maasai Education Center. the Style Hotel School
          </p>
        </div>
        <div className="col-4">
          <Link className="btn btn-reddish float-end" to="/news">
            See All
          </Link>{" "}
        </div>
      </div>
      {/* News Section */}
      <div className="row">
        {news.map((news, index) => {
          return <SNews news={news} key={index} />;
        })}
      </div>
    </div>
  );
};

export default LatestNews;
