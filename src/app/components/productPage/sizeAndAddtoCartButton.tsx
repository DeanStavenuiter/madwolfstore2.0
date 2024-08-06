"use client";
import React, { useState } from "react";
import PriceTag from "./PriceTag";
import { ProductProps } from "@/app/products/[id]/page";
import SelectSizeButton from "./selectSizeButton";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "../../crud/addProductToCart";

const SizeAndAddtoCartButton: React.FC<ProductProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");

  let allSoldOut: boolean = product.sizes.every((size) => size.quantity === 0);

  const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];

  const sortedSizes = product.sizes.sort(
    (a: any, b: any) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size)
  );

  return (
    <div className="flex w-full flex-col">
      <div className=" flex-row mb-2 mt-2 flex flex-wrap w-screen md:w-[unset] gap-1">
        {sortedSizes.map((size: any) => (
          <div key={size.id} className="relative z-10 bg-black">
            <SelectSizeButton
              size={size}
              onSelectSize={(selectedSize) => setSelectedSize(selectedSize)}
              css={
                size.size === selectedSize
                  ? "text-white inset-shadow border-none bg-opacity-50"
                  : "border-none"
              }
            />
          </div>
        ))}
      </div>
      <div className="py-4 flex flex-col gap-3 w-full">
        {allSoldOut && (
          <div className="ml-1 mt-2 text-sm text-red-500">
            Sorry, this product is sold out
          </div>
        )}

        <PriceTag price={product.price} className="mt-2" />

        <h2 className="text-[18px]/[30px] font-black uppercase tracking-normal">About this item</h2>
        <p className="">{product.description1}</p>

        {product.description2 && (
          <p className="">{product.description2}</p>
        )}

        {product.description3 && (
          <p className="">{product.description3}</p>
        )}

        {product.description4 && (
          <p className="">{product.description4}</p>
        )}

        <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>
    </div>
  );
};

export default SizeAndAddtoCartButton;
