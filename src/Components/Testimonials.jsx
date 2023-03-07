import React from "react";
import Testimony from "./Testimony";

const Testimonials = () => {
  const testimonyParent = [
    {
      testId: 1,
      name: "Jane Doe",
      work: "Farmer",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus temporibus velit tenetur atque facere debitis perferendis? Voluptatibus ipsa excepturi ut natus dignissimos beatae exercitationem corporis tempora, et, reprehenderit reiciendis dolorem.",
      image: "../images/logo.jpg"
    },
    {
      testId: 2,
      name: "John Doe",
      work: "Nurse",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus temporibus velit tenetur atque facere debitis perferendis? Voluptatibus ipsa excepturi ut natus dignissimos beatae exercitationem corporis tempora, et, reprehenderit reiciendis dolorem.",
      image: "../images/logo.jpg"
    }
  ];
  const testimonyAlumni = [
    {
      testId: 1,
      name: "Jane Doe",
      work: "Chef",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus temporibus velit tenetur atque facere debitis perferendis? Voluptatibus ipsa excepturi ut natus dignissimos beatae exercitationem corporis tempora, et, reprehenderit reiciendis dolorem.",
      image: "../images/logo.jpg"
    },
    {
      testId: 2,
      name: "John Doe",
      work: "Tour Guide",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus temporibus velit tenetur atque facere debitis perferendis? Voluptatibus ipsa excepturi ut natus dignissimos beatae exercitationem corporis tempora, et, reprehenderit reiciendis dolorem.",
      image: "../images/logo.jpg"
    }
  ];
  return (
    <div className="Testimonials my-5">
      <h1 className="display-5 text-center my-5">Testimonials</h1>
      <p className="">
        Lets see what our <b>parents</b> and <b>alumni</b> have to say about our
        school:
      </p>
      <h1 className="fs-3 my-2">Parents</h1>
      {/* Staff Section */}
      <div className="row">
        {testimonyParent.map((test, index) => {
          return <Testimony testp={test} key={index} />;
        })}
      </div>
      <h1 className="fs-3 my-2">Alumni</h1>
      {/* Staff Section */}
      <div className="row">
        {testimonyAlumni.map((test, index) => {
          return <Testimony testp={test} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
