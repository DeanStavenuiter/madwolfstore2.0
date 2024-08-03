import React from "react";
import VideoPlayer from "./Videoplayer";
import { ProductProps } from "../../products/[id]/page";

const ProductContent: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex-col w-full md:max-w-[66%] gap-4 md:h-[966px] mb-[98px] flex">
      <div className="flex flex-row gap-4 ">
        <div className="flex justify-center md:max-w-[48%] w-full">
          {product && <VideoPlayer product={product} />}
        </div>
        <div className="bg-[#1F1F1F] hidden md:flex rounded-[5px] w-full max-w-[48%] h-full"></div>
      </div>
      <div className="hidden md:flex gap-4 flex-row h-full">
        <div className="bg-[#1F1F1F] rounded-[5px] w-full max-w-[48%] h-full"></div>
        <div className="bg-[#1F1F1F] rounded-[5px] w-full max-w-[48%] h-full"></div>
      </div>
    </div>
  );
};

export default ProductContent;
