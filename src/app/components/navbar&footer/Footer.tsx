import Image from "next/image";
import Link from "next/link";
import React from "react";
import MW from "./MW";

const Footer = () => {
  return (
    <div className=" w-full bg-[#1c1c1c] h-full mt-[225px] pt-[100px] pb-[25px]">
      <div className="flex justify-center">
        <div className="relative w-full max-w-screen-xl pt-[97px]">
          <h2 className="absolute top-0 text-[129px] font-black uppercase tracking-normal text-[#FFFFFF] opacity-5">
            madwolf
          </h2>
          <div className="mt-[15px] ml-[4px] flex flex-row justify-between gap-[25px]">
            <div className="flex flex-col max-w-[256px] w-full">
              <h3 className="mb-[45px] flex justify-start text-[31px] font-semibold tracking-normal text-white">
                Madwolf
              </h3>
              <p className="text-[15px]/[35px] font-normal tracking-normal text-white">
                With Madwolf we focus on quality garments with tastefull
                designs. All our designs are handmade.
              </p>
            </div>
            <div className="flex flex-col max-w-[256px] w-full">
              <h3 className="mb-[45px] flex justify-start text-[31px] font-semibold tracking-normal text-white">
                Products
              </h3>
              <ul className="text-[15px]/[35px] font-normal tracking-normal text-white">
                <li>
                  <Link href={""}>Art</Link>
                </li>
                <li>
                  <Link href={""}>T-shirts</Link>
                </li>
                <li>
                  <Link href={""}>Sweaters</Link>
                </li>
                <li>
                  <Link href={""}>Accesories</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col max-w-[256px] w-full">
              <h3 className="mb-[45px] flex justify-start text-[31px] font-semibold tracking-normal text-white">
                About us
              </h3>
              <ul className="text-[15px]/[35px] font-normal tracking-normal text-white">
                <li>
                  <Link href={""}>Cookies</Link>
                </li>
                <li>
                  <Link href={""}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={""}>Terms of Use</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col max-w-[256px] w-full">
              <h3 className="mb-[45px] flex justify-start text-[31px] font-semibold tracking-normal text-white">
                Questions
              </h3>
              <ul className="text-[15px]/[35px] font-normal tracking-normal text-white">
                <li>
                  <Link href={""}>Orders</Link>
                </li>
                <li>
                  <Link href={""}>Returning</Link>
                </li>
                <li>
                  <Link href={""}>Sending and Receiving</Link>
                </li>
                <li>
                  <Link href={""}>Product Information</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col max-w-[256px] w-full">
              <h3 className="mb-[45px] flex justify-start text-[31px] font-semibold tracking-normal text-white">
                Contact
              </h3>
              <ul>
                <li>
                  <Link href={"mailto:info@madwolfstore.com"}>
                    info@madwolfstore.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[35px]">
        <span>This website is build by Dean Donovan</span>
      </div>
    </div>
  );
};

export default Footer;