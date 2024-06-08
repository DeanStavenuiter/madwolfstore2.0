import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import { User } from "../typescript/types";

const Menu = () => {
  return (
    <div className="z-40 w-[100vw] fixed">
      <TopBar />
      <Navbar />
    </div>
  );
};

export default Menu;
