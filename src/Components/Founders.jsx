import React from "react";
import { Link } from "react-router-dom";
import Founder from "../images/slider3.webp";

const Founders = () => {
  return (
    <div className="my-5">
      <h1 className="display-5 text-center my-5">Our Beloved Founders</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <h1 className="display-6 mb-3 mt-2">Mariska and Andri</h1>
          </div>
          <p className="">
            <b>Mariska</b> and <b>Adri</b> lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta incidunt laborum error,
            explicabo iusto sit non excepturi ad perspiciatis eos ipsum nesciunt
            esse tenetur, recusandae in nulla natus repudiandae vero vitae,
            facere fugit minus! Vero veritatis reiciendis odio natus voluptatum
            magni sequi dolores nisi officiis. Numquam porro sint sapiente
            veritatis cumque, quam nihil unde illo accusantium totam quos
            perferendis, molestias placeat. Necessitatibus illo repudiandae enim
            reprehenderit culpa corporis consectetur corrupti exercitationem
            porro. Minima, aliquam quam laborum blanditiis reiciendis autem
            obcaecati voluptatum eveniet quas magni nemo, sit harum, praesentium
            illum corrupti ea amet! Excepturi dolore quod perferendis iste
            sequi, dolorum commodi.
          </p>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <img src={Founder} alt="About Us" className="w-100 rounded-4" />
        </div>
      </div>
    </div>
  );
};

export default Founders;
