import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom'

import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Services from "../services/Services";
const Home = () => {
  return (
    <>
      <div className="home">
        {/* Text side */}
        <div className="home-text-side">
          <h3 className="sub-heading">
            Best
            <span className="diff-color">
              {" "}
              Wash & Iron service <br />
            </span>
            in your Doorstep
          </h3>
          <p className="home-text-side-body-text">
            CLZ is the first Online Laundry Platform in Kenya with the latest
            technology in washing, dry cleaning and laundry. Our services
            combine our expertise and experience acquired over a period of time
            to provide you with clean laundry in the shortest possible
            turnaround time.
          </p>
          <Link to="/services">
            <button className="home-text-side-button">View Services</button>
          </Link>
        </div>
        {/*Animated Images Side Images side */}
        <div className="home-image-side">
          <Slider />
          {/* <img src={Image1} alt="" /> */}
        </div>
      </div>
      <About />
      <Services />
    </>
  );
};

export default Home;
