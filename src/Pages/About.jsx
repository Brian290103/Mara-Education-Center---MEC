import {
  faCaretLeft,
  faCaretRight,
  faCertificate,
  faTree,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AwesomeFeatures from "../Components/AwesomeFeatures";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import AboutImage from "../images/slider1.jpg";

const About = () => {
  return (
    <div className="About">
      <Header title={"About"} />
      <div className="container-lg my-5">
        <div className="row  h-100 my-5">
          <div className="col-md-6 my-2">
            <div className="row h-100">
              <div className="col-6">
                <div className="row h-50">
                  <img
                    src={AboutImage}
                    alt="about"
                    className="w-100 h-100 pb-3 rounded-4"
                  />
                </div>
                <div className="row h-50">
                  <div className="col-6"></div>
                  <div className="col-6">
                    <div className="row h-100">
                      <img
                        src={AboutImage}
                        alt="about"
                        className="w-100 h-100  rounded-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src={AboutImage}
                  alt="about"
                  className="w-100 h-100  rounded-4"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <h1 className="display-6">
              Welcome to Maasai Education Center,{" "}
              <span className="fs-4 text-reddish"> the Style Hotel School</span>
            </h1>
            <p className="">
              <FontAwesomeIcon
                icon={faCaretRight}
                className="text-reddish me-2"
              />{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              doloremque vitae ipsa reiciendis aliquam perferendis amet
              laboriosam omnis repellat suscipit saepe blanditiis, debitis est
              excepturi provident praesentium consequatur quas numquam!
            </p>
            <h1 className="fs-4 text-reddish">Mission</h1>
            <p className="">
              <FontAwesomeIcon
                icon={faCaretRight}
                className="text-reddish me-2"
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              culpa.
            </p>

            <h1 className="fs-4 text-reddish">Vision</h1>
            <p className="">
              <FontAwesomeIcon
                icon={faCaretRight}
                className="text-reddish me-2"
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              culpa.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <h1 className="display-4 text-center">
            {" "}
            <FontAwesomeIcon
              icon={faCaretRight}
              className="text-reddish me-2"
            />{" "}
            Our History
            <FontAwesomeIcon icon={faCaretLeft} className="text-reddish ms-2" />
          </h1>
          <div className="row history mx-auto lh-lg">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              veritatis, nihil dolore ipsam nulla soluta sit labore corrupti
              libero totam. Doloribus iure praesentium illo voluptatum ipsam
              ipsum magnam, quasi fugiat mollitia deserunt! Explicabo ipsam, hic
              iusto nesciunt nostrum non molestias quam iure distinctio ullam
              sint, adipisci ut, provident tempora tempore. A illum aliquam,
              facere maxime adipisci aliquid labore eius quia provident
              veritatis sint harum totam. Dolores cumque harum minima, labore
              commodi tempore asperiores distinctio maiores aliquid. Animi et
              cupiditate, soluta perspiciatis, aperiam totam illum atque dicta
              ipsum vel corrupti doloribus necessitatibus, eligendi facilis hic?
              Pariatur eos reiciendis facere? Eligendi, dolorem!
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              dicta quasi ex, mollitia laborum quaerat dolorem quo sed neque
              iste minima eveniet! Tenetur ab deleniti possimus architecto
              laborum nostrum, rerum a quisquam reiciendis, at id autem ratione
              impedit. Quasi sit unde temporibus dolores veritatis, enim esse
              perferendis ipsum consectetur mollitia itaque animi ratione odit
              reprehenderit necessitatibus obcaecati! Provident pariatur
              accusantium quia voluptatibus nihil, animi ducimus eos corrupti
              exercitationem quae assumenda, sequi velit voluptatum eaque
              delectus consectetur sint, a cupiditate ut! Est saepe laborum,
              illum hic enim, porro molestias cupiditate blanditiis quasi
              consequuntur commodi corporis distinctio pariatur fugiat debitis
              odit eius.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              dicta quasi ex, mollitia laborum quaerat dolorem quo sed neque
              iste minima eveniet! Tenetur ab deleniti possimus architecto
              laborum nostrum, rerum a quisquam reiciendis, at id autem ratione
              impedit. Quasi sit unde temporibus dolores veritatis, enim esse
              perferendis ipsum consectetur mollitia itaque animi ratione odit
              reprehenderit necessitatibus obcaecati! Provident pariatur
              accusantium quia voluptatibus nihil, animi ducimus eos corrupti
              exercitationem quae assumenda, sequi velit voluptatum eaque
              delectus consectetur sint, a cupiditate ut! Est saepe laborum,
              illum hic enim, porro molestias cupiditate blanditiis quasi
              consequuntur commodi corporis distinctio pariatur fugiat debitis
              odit eius.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              dicta quasi ex, mollitia laborum quaerat dolorem quo sed neque
              iste minima eveniet! Tenetur ab deleniti possimus architecto
              laborum nostrum, rerum a quisquam reiciendis, at id autem ratione
              impedit. Quasi sit unde temporibus dolores veritatis, enim esse
              perferendis ipsum consectetur mollitia itaque animi ratione odit
              reprehenderit necessitatibus obcaecati! Provident pariatur
              accusantium quia voluptatibus nihil, animi ducimus eos corrupti
              exercitationem quae assumenda, sequi velit voluptatum eaque
              delectus consectetur sint, a cupiditate ut! Est saepe laborum,
              illum hic enim, porro molestias cupiditate blanditiis quasi
              consequuntur commodi corporis distinctio pariatur fugiat debitis
              odit eius.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <h1 className="display-6 text-center">
            {" "}
            <FontAwesomeIcon
              icon={faCaretRight}
              className="text-reddish me-2"
            />{" "}
            Awesome Features
            <FontAwesomeIcon icon={faCaretLeft} className="text-reddish ms-2" />
          </h1>
          <div className="row my-5 mx-auto">
            <AwesomeFeatures />
          </div>
          <div className="row my-3 mx-auto">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
