import React from "react";
import "./services.css";
import ServiceTypeCard from "../../components/serviceCard/ServiceTypeCard";
import { WashIron } from "../../assets/images";

const Services = () => {
  return (
    <div className="services">
      {/* Heading */}
      <h1 className="heading">Services</h1>
      {/* Cards with their props */}
      <ServiceTypeCard
        image={WashIron}
        heading="Wash and Iron"
        text="All your regular wear garments
         will be washed, steam ironed and 
         neatly packed for delivery."
      />
      <ServiceTypeCard
        image={WashIron}
        heading="Wash & Fold"
        text="Just in case you choose not to use our steam ironing services
         we will wash and fold them for you."
      />
      <ServiceTypeCard
        image={WashIron}
        heading="Iron & Fold"
        text="Get back your dirty clothes. Your clothes we will ironed 
        and pressed to look the best for you."
      />
      <ServiceTypeCard
        image={WashIron}
        heading="Dry Cleaning"
        text="All your sensitive and special garments will be individually 
        treated for any stains and dry cleaned."
      />
      <ServiceTypeCard
        image={WashIron}
        heading="Emergency Service"
        text="You can use our emergency service to receive services easily and 
        quickly in our machines using very safe."
      />
      <ServiceTypeCard
        image={WashIron}
        heading="Subscription Based"
        text="You can get Best Price, Quality Service, Doorstep Pickup & 
        Delivery Service, Hygiene & Fresh Laundry"
      />
    </div>
  );
};

export default Services;
