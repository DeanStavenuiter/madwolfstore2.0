import React from "react";

const CategoryHome = () => {
  return (
    <div>
      <h2 className="text-[28.4px]/[30px] font-black uppercase tracking-normal text-[#FFFFFF] md:text-[64px]/[64px]">
        Shop by category
      </h2>
      <p className="text-[14px] font-light tracking-normal mb-[25px]">
        <span className="font-bold">Quality</span>
        <span className="italic"> Products</span> in Every Category.
      </p>
      <div className="flex justify-start gap-2">
        {/* t-shirts */}
        <div className="flex gap-[7px] flex-col items-center justify-center">
          <div className="bg-[#1F1F1F] p-[15px] w-[70px] h-[70px] rounded-[100px]"></div>
          <h3 className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
            T-shirts
          </h3>
          <p className="text-[14px] font-light tracking-normal"></p>
        </div>
        {/* accessories */}
        <div className="flex gap-[7px] flex-col items-center justify-center">
          <div className="bg-[#1F1F1F] p-[15px] w-[70px] h-[70px] rounded-[100px]"></div>
          <h3 className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
            Accessories
          </h3>
          <p className="text-[14px] font-light tracking-normal"></p>
        </div>
        {/* sweaters */}
        <div className="flex gap-[7px] flex-col items-center justify-center">
          <div className="bg-[#1F1F1F] p-[15px] w-[70px] h-[70px] rounded-[100px]"></div>
          <h3 className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
            Sweaters
          </h3>
          <p className="text-[14px] font-light tracking-normal"></p>
        </div>
        {/* art */}
        <div className="flex gap-[7px] flex-col items-center justify-center">
          <div className="bg-[#1F1F1F] p-[15px] w-[70px] h-[70px] rounded-[100px]"></div>
          <h3 className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
            Art
          </h3>
          <p className="text-[14px] font-light tracking-normal"></p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
