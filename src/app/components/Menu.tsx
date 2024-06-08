import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Menu = () => {
  return (
    <div className="z-40 w-[100vw] fixed">
      <TopBar />
      <Navbar />
    </div>
  );
};

export default Menu;
