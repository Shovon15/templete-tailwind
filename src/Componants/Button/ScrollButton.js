import React, { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollPosition";

const ScrollButton = () => {
  const { scrollPosition } = useContext(ScrollContext);
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-5 right-5 bg-indigo-600 text-white 
rounded-full px-3 py-2  hover:bg-indigo-400
  transition ease-in-out   ${scrollPosition > 100 ? "block " : "hidden"}`}
    >
      <ion-icon name="arrow-up-outline" style={{ fontSize: "25px" }}></ion-icon>
    </button>
  );
};

export default ScrollButton;
