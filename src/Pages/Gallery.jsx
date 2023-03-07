import React, { useState } from "react";
import Header from "../Components/Header";
import img1 from "../images/logo.jpg";
import img2 from "../images/lodge1Img.webp";
import img3 from "../images/logoLodge.webp";
import img4 from "../images/slider1.jpg";
import img5 from "../images/slider2.webp";
import img6 from "../images/slider3.webp";

const Gallery = () => {
  let data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 }
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    // console.log(imgSrc);
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="Gallery">
      <Header title={"Gallery"} />
      <div className={model ? "viewImage  open" : "viewImage"}>
        <img src={tempImgSrc} alt="" />
      </div>
      <div className="images my-5">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={`${item.imgSrc} `} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
