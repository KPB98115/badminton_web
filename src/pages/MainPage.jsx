//import { useState } from "react"
import Carousel from "../components/Carousel";
import image1 from "../assets/images/cover_image_01.jpeg";
import image2 from "../assets/images/cover_image_02.jpeg";
import image3 from "../assets/images/cover_image_03.jpeg";
import image4 from "../assets/images/cover_image_04.jpeg";
import image5 from "../assets/images/cover_image_05.jpeg";
import image6 from "../assets/images/cover_image_06.jpeg";
import image7 from "../assets/images/cover_image_07.jpeg";
import image8 from "../assets/images/cover_image_08.jpeg";
import "../App.css";

const MainPage = () => {
    const IMAGES = [
        { src: image1, alt: "Image 1" },
        { src: image2, alt: "Image 2" },
        { src: image3, alt: "Image 3" },
        { src: image4, alt: "Image 4" },
        { src: image5, alt: "Image 5" },
        { src: image6, alt: "Image 6" },
        { src: image7, alt: "Image 7" },
        { src: image8, alt: "Image 8" },
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
