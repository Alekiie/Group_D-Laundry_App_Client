import React, { useEffect, useState } from "react";
import "./slider.css";
import {Image1,Image2,Image3,Image4,Image5,Image6} from '../../assets/images'


const Slider = () => {
  const images = [Image1,Image2,Image3,Image4,Image5,Image6];
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index} >
            <img src={image} alt="" className="slider_image" />
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Slider;
