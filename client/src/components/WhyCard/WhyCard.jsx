import React from "react";
import "./whyCard.css";
const WhyCard = ({ icon, sub_heading, text }) => {
  return (
    <div className="why_card">
      {/* Icon */}
      <div className="icon">{icon}</div>
      {/* subheading */}
      <h6 className="sub_heading">{sub_heading}</h6>
      {/* some text */}
      <p className="text">{text}</p>
    </div>
  );
};

export default WhyCard;
