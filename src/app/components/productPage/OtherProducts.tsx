import { ProductProps } from "@/app/products/[id]/page";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import CarouselOtherProducts from "../carousels/CarouselOtherProducts";
import { getRandomProducts } from "@/app/crud/getProducts";

const OtherProducts: React.FC<ProductProps> = async ({ product }) => {
  const randomProducts = await getRandomProducts();

  const video = randomProducts.map((product) => {
    return {
      id: product.id,
      name: product.name,
      webM: product.webMFile,
      mp4: product.mp4File,
      price: product.price,
    };
  });

  return (
    <div>
      <h3 className="text-[28.4px]/[30px] font-black uppercase tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900 md:text-[34px]/[34px] ">
        <AnimatedShinyText>What do you think about this?</AnimatedShinyText>
      </h3>
      <p className="">
        <span className="italic">Maybe</span> this is also something for <span className="font-bold">you</span>.
      </p>
      <CarouselOtherProducts
        slides={video}
        options={{ loop: true, align: "start" }}
      />
    </div>
  );
};

export default OtherProducts;
