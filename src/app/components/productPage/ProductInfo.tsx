import { ProductProps } from "@/app/products/[id]/page";
import React from "react";
import SizeAndAddtoCartButton from "./sizeAndAddtoCartButton";


const ProductInfo: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="max-w-[33%]">
      <SizeAndAddtoCartButton product={product} />

      
    </div>
  );
};

export default ProductInfo;
