import { useState, useEffect } from "react";
import "../App.css";

const Carousel = (prop) => {
  const imageArray = prop.imageArray;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const handleMouseHover = () => {
    setIsHover(!isHover);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHover, imageArray.length]);

  return (
    <div
      className="carousel_container"
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <div>
        {imageArray.map((image, index) => {
          return (
            <img
              src={image.src}
              alt={image.alt}
              className={
                "carousel_img " + (currentIndex === index ? "active" : "")
              }
              key={index}
            />
          );
        })}
      </div>
      <div className="control_dots_container">
        <ul>
          {imageArray.map((_, index) => {
            return (
              <li key={index}>
                <div
                  className={
                    "control_dots" +
                    (currentIndex === index ? " active_dot" : "")
                  }
                  onClick={() => setCurrentIndex(index)}
                >
                  {" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
