import React from "react";
import "./about.css";
import { AboutImg } from "../../assets/images";

const About = () => {
  return (
    <>
      <div className="about">
        {/* Heading */}
        <h1 className="heading">About Us</h1>
        <div className="divide_about">
          {/* Image on the left */}
          <img src={AboutImg} alt="" />
          {/* About Text on the Right */}
          <div className="about_text">
            <p>
              CLz is the first Online Laundry Platform in DIU with the latest
              technology in washing, dry cleaning and laundry. Our services
              combine our expertise and experience acquired over a period of
              time to provide you with clean laundry in the shortest possible
              turnaround time. It has partnered up with the top laundry experts
              of the country and provides you with a free Pick-up and Delivery
              for your dirty laundry. With our Website, Mobile App or Hotline
              Number, you can just schedule an order and we will take it from
              there!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
