import React from 'react'
import CarouselShirts from '../carousels/CarouselShirts';
import { getProductsWithStock } from '../../crud/getProducts';

const FeaturedProductsHome = async() => {
    const products = await getProductsWithStock({});

    const video = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        webM: product.webMFile,
        mp4: product.mp4File,
        price: product.price,
      };
    });

  return (
    <div className="mb-[75px]">
    <h2 className="text-[28.4px]/[30px] font-black uppercase tracking-normal text-[#FFFFFF] md:text-[64px]/[64px]">
      featured products
    </h2>
    <p className="text-[14px] font-light tracking-normal">
      <span className="italic">Top</span>-Rated Featured Products You’ll{" "}
      <span className="font-bold">Love</span>.
    </p>
    <CarouselShirts slides={video} options={{ loop: true }} />
  </div>
  )
}

export default FeaturedProductsHome