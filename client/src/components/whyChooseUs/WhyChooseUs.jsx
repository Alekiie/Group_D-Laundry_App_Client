import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import WhyCard from "../WhyCard/WhyCard";

const WhyChooseUs = () => {
  return (
    <div className="cards">
      <h3 className="heading">Why CHoose Us?</h3>
      <WhyCard
        icon={<CiDeliveryTruck style={{ fill: "red" }} />}
        sub_heading="Free Pickup & Delivery"
        text="Doorstep Pickup and Your clothes will be delivered at your
        doorstep on time and as fresh as daisy."
      />
      <WhyCard
        icon={<CiDeliveryTruck style={{ fill: "red" }} />}
        sub_heading="Free Pickup & Delivery"
        text="Doorstep Pickup and Your clothes will be delivered at your
        doorstep on time and as fresh as daisy."
      />
    </div>
  );
};

export default WhyChooseUs;
