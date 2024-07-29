import Menu from "@/app/components/Menu";
import SideMenuDashboard from "@/app/components/SideMenuDashboard";
import Starfield from "@/app/components/Space";
import Link from "next/link";
import React from "react";
import ProductTable from "@/app/components/ProductTable";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="">
      <Menu />
      <main className="flex min-h-screen w-full">
        <Starfield
          starCount={1500}
          starColor={[255, 255, 255]}
          speedFactor={0.005}
          backgroundColor="black"
        />
        <SideMenuDashboard />
        <div className="flex-1 flex items-center justify-center ">
          {/* <div className="absolute top-[95px] right-[15px] flex justify-end w-full"></div> */}
          <div className="flex pt-[110px] pl-[30px] w-full h-full ">
            <div className="ml-[260px] flex items-start flex-col w-full ">
              <div className="flex justify-between max-w-[781px] w-full">
                <div className="uppercase justify-center items-center flex font-bold">
                  <h1>Products</h1>
                </div>
                <Link href="/dashboard/products/add">
                  <Button className="bg-white text-black hover:bg-[#efefef] hover:text-[#393939] font-[500]">Add product</Button>
                </Link>
              </div>

              <ProductTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
