import React from "react";
import TopBar from "@/app/components/navbar&footer/TopBar";
import Navbar from "@/app/components/navbar&footer/Navbar";

const Menu = () => {
  return (
    <div className="z-40 w-[100vw] fixed">
      <TopBar />
      <Navbar />
    </div>
  );
};

export default Menu;
