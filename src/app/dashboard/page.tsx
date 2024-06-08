import React from "react";
import Menu from "../components/Menu";
import Starfield from "../components/Space";
import { redirect } from "next/navigation";
import getUserRole from "../library/functions/GetUserRole";
import SideMenuDashboard from "../components/SideMenuDashboard";

const page = async () => {
  const role = await getUserRole();

  console.log("ROLE ",role);
  if (role !== "wolf") {
    redirect("/");
  }

  return (
    <div className="">
      <Menu />
      <main className="flex min-h-screen">
        
        <Starfield
          starCount={1500}
          starColor={[255, 255, 255]}
          speedFactor={0.005}
          backgroundColor="black"
        />
        <SideMenuDashboard />
      </main>
    </div>
  );
};

export default page;
