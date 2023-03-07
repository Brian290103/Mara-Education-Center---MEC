import React from "react";
import Logo from "../images/logoLodge.webp";
import Lodge1 from "../images/lodge1Img.webp";
import { Link } from "react-router-dom";

const OretetiMaraLodge = () => {
  return (
    <div className="OretetiMaraLodge">
      <div className="container lodge my-3">
        <h1 className="display-3 mt-5 text-center">Oreteti Mara Lodge</h1>
        <div className="intro d-flex flex-column">
          <small className="text-center fs-4 mb-3">
            Doing Well by Doing Good
          </small>
          <p className="text-center">
            Set like a shining star in the authentic forest of <b>Oloirien</b>{" "}
            (wild olive tree) – Kenya, on the top of the Oloololo escarpment,
            located near Lolgorian and with a 10 minutes drive from “the big
            five” wildlife in the magnificent Maasai Mara, our lodges are
            wrapped around by native trees meeting the sweeping bush grass in
            the seasonal path of the awe-inspiring Great Migration, the Oreteti
            Mara Lodge reflects the spirit of ancient Maasai land.
          </p>
          <p className="text-center">
            Maasai Mara, a remarkable National Game Reserve which many safari
            travellers deem the finest game reserve on the continent of Africa!
          </p>
          <img src={Logo} alt="logo" className="mx-auto w-50" />
        </div>
        <div className="row r2">
          <Link
            to="https://oretetimaralodge.com/rooms"
            target="blank"
            className="col-12 col-lg-6 my-2 "
          >
            <div className="card border-0 position-relative shadow-lg p-2 rounded-3">
              <img src={Lodge1} alt="logo" className="rounded-3" />
              <h1 className="title position-absolute bottom-0 text-white display-6 mx-2">
                Rooms
              </h1>
            </div>
          </Link>
          <Link
            to="https://oretetimaralodge.com/services-sliders"
            target="blank"
            className="col-12 col-lg-6 my-2"
          >
            <div className="card border-0 position-relative  shadow-lg p-2 rounded-3">
              <img src={Lodge1} alt="logo" className="rounded-3" />
              <h1 className="title position-absolute  bottom-0 text-white display-6 mx-2">
                Experience Our Excursions
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OretetiMaraLodge;
