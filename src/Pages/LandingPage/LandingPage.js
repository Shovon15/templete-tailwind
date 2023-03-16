import React from "react";
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Feature from "./Feature/Feature";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Brand />
      <Feature />
    </div>
  );
};

export default LandingPage;
