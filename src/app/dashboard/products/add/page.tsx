import Menu from "@/app/components/navbar&footer/Menu";
import SideMenuDashboard from "@/app/components/SideMenuDashboard";
import Starfield from "@/app/components/Space";
import ProductForm from "@/app/components/ProductForm";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Menu />
      <main className="flex min-h-screen w-full">
        <Starfield
          starCount={1500}
          starColor={[255, 255, 255]}
          speedFactor={0.005}
          backgroundColor="black"
        />
        <div>
          <SideMenuDashboard />
          <div className="flex-1 flex items-center justify-center ">
            {/* <div className="absolute top-[95px] right-[15px] flex justify-end w-full"></div> */}
            <div className="flex pt-[110px] pl-[30px] w-full h-full ">
              <div className="ml-[260px] flex items-start flex-col w-full ">
                <div className="flex justify-between max-w-[781px] w-full">
                  <div className="uppercase justify-center items-center flex font-bold">
                    <h1>New Product</h1>
                  </div>
                </div>
                <ProductForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
