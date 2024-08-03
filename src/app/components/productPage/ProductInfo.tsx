import { ProductProps } from "@/app/products/[id]/page";
import React from "react";
import SizeAndAddtoCartButton from "./sizeAndAddtoCartButton";
import Link from "next/link";
import Image from "next/image";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const ProductInfo: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="w-full md:max-w-[33%]">
      <div className="mb-2 font-semibold">
        <Link href="/" className="flex items-center gap-3 text-xl">
          <Image
            src={"/logo/logo_wit.webp"}
            height={35}
            width={35}
            alt="Madwolf logo"
            priority
          />
          Madwolf
        </Link>
      </div>
      <h2 className="mb-4 text-[28.4px]/[30px] font-black uppercase tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900 md:text-[64px]/[64px] ">
        <AnimatedShinyText>{product.name}</AnimatedShinyText>
      </h2>
      <SizeAndAddtoCartButton product={product} />
    </div>
  );
};

export default ProductInfo;
