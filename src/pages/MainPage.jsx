//import { useState } from "react";
import Carousel from "../components/Carousel";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.png";
import "../App.css";

const MainPage = () => {
  const IMAGES = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
  ];

  return (
    <div>
      <div className="mainpage_image_container">
        <Carousel imageArray={IMAGES} />
      </div>
    </div>
  );
};

export default MainPage;
