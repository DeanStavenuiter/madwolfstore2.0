import React from "react";
import Menu from "@/app/components/Menu";
import Starfield from "@/app/components/Space";
import SideMenuDashboard from "@/app/components/SideMenuDashboard";
import getSession from "@/app/library/getSession";
const page = async () => {
  const session = getSession();
  
  return (
    <div className="">
      <Menu />
      <main className="flex flex-row min-h-screen">
        <SideMenuDashboard />
        <Starfield
          starCount={1500}
          starColor={[255, 255, 255]}
          speedFactor={0.005}
          backgroundColor="black"
        />
      </main>
    </div>
  );
};

export default page;
