import React from "react";
import {
  faCaretLeft,
  faCaretRight,
  faCertificate,
  faTree,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AwesomeFeatures = () => {
  return (
    <>
      <div className="col-sm-6 col-lg-4 my-2">
        <div className="card bg-green border-0 shadow-sm p-3">
          <div className="card-header  border-0 bg-transparent">
            <FontAwesomeIcon
              icon={faTree}
              className="text-white
                  display-2 "
            />
          </div>
          <div className="card-body">
            <h1 className="fs-5">Wonderful Learning Environment</h1>
            <p className="fst-italic">
              <FontAwesomeIcon icon={faCaretRight} className="me-2" /> Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. At dicta id
              incidunt veritatis explicabo blanditiis voluptate culpa, modi ipsa
              fuga.
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-lg-4 my-2">
        <div className="card bg-reddish border-0 shadow-sm p-3">
          <div className="card-header  border-0 bg-transparent">
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-white
                  display-2 "
            />
          </div>
          <div className="card-body text-white">
            <h1 className="fs-5">A Hotel School</h1>
            <p className="fst-italic">
              <FontAwesomeIcon icon={faCaretRight} className="me-2" /> Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. At dicta id
              incidunt veritatis explicabo blanditiis voluptate culpa, modi ipsa
              fuga.
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-lg-4 my-2">
        <div className="card bg-greyish border-0 shadow-sm p-3">
          <div className="card-header  border-0 bg-transparent">
            <FontAwesomeIcon
              icon={faCertificate}
              className="text-white
                  display-2 "
            />
          </div>
          <div className="card-body text-white">
            <h1 className="fs-5">Certification</h1>
            <p className="fst-italic">
              <FontAwesomeIcon icon={faCaretRight} className="me-2" /> Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. At dicta id
              incidunt veritatis explicabo blanditiis voluptate culpa, modi ipsa
              fuga.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwesomeFeatures;
