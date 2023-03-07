import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import SNews from "../Components/SNews";

const News = () => {
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
    },
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
    },
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
    <div className="News">
      <Header title={"News"} />
      <div className="container-md my-5">
        <h1 className="display-6">Ranked from the Latest</h1>
        <div className="row my-2">
          {news.map((news, index) => {
            return <SNews news={news} key={index} />;
          })}
        </div>
        <div className="row my-3">
          <nav aria-label="Standard pagination example" className="d-flex">
            <ul className="pagination ms-auto">
              <li className="page-item">
                <Link
                  className="page-link text-reddish fw-bold"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">«</span>
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link text-reddish fw-bold" href="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link text-reddish fw-bold" href="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link text-reddish fw-bold" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link text-reddish fw-bold"
                  href="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default News;
