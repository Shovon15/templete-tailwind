import React from "react";
import { Outlet } from "react-router-dom";
import ScrollButton from "../Componants/Button/ScrollButton";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
