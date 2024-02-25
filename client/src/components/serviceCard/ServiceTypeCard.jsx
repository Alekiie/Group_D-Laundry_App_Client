import React from "react";
import "./serviceTypeCard.css";
import { WashIron } from "../../assets/images";
// import { WashIron } from "../../assets/images";

const ServiceTypeCard = ({heading,text}) => {
  return (
    <div className="card">
     

      {/* Cards */}
      <div className="card_structure">
        {/* img */}
        <div className="card_img">
            <img src={WashIron} alt="" />
        </div>
        {/* Subheading */}
        <span className="card_subheading">{heading}</span>
        {/* Text */}
        <p className="card_text">{text}</p>
        {/* Button */}
        <button className="card_button">&gt;View Service</button>
      </div>
    </div>
  );
};

export default ServiceTypeCard;
