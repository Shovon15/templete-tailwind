import React from "react";
import AISection from "./AISection/AISection";
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Campaign from "./Campaign/Campaign";
import Feature from "./Feature/Feature";
import GridSection from "./GridSection/GridSection";
import Management from "./Management/Management";
import Optimization from "./Optimization/Optimization";
import OurCustomer from "./OurCustomer/OurCustomer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Brand />
      <Feature />
      <Optimization />
      <Campaign />
      <Management />
      <GridSection />
      <OurCustomer />
      <AISection />
    </div>
  );
};

export default LandingPage;
