import React from "react";
import VideoPlayer from "./Videoplayer";
import { ProductProps } from "../../products/[id]/page";

const ProductContent: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex flex-wrap h-full w-full max-w-[66%] gap-4">
      <div className="max-w-[48%]">
        {product && <VideoPlayer product={product} />}
      </div>
      <div className="bg-[#1F1F1F] rounded-[5px] w-full max-w-[48%] h-full max-h-[475px]"></div>
      <div className="bg-[#1F1F1F] rounded-[5px] w-full max-w-[48%] h-full max-h-[475px]"></div>
      <div className="bg-[#1F1F1F] rounded-[5px] w-full max-w-[48%] h-full max-h-[475px]"></div>
    </div>
  );
};

export default ProductContent;
