import CarouselProduct from "@/app/components/carousels/CarouselProduct";
import Footer from "@/app/components/navbar&footer/Footer";
import Menu from "@/app/components/navbar&footer/Menu";
import OtherProducts from "@/app/components/productPage/OtherProducts";
import ProductContent from "@/app/components/productPage/ProductContent";
import ProductInfo from "@/app/components/productPage/ProductInfo";
import VideoPlayer from "@/app/components/productPage/Videoplayer";
import Starfield from "@/app/components/Space";
import { getProductById } from "@/app/crud/getProducts";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: {
    id: string;
  };
}

export interface ProductSize {
  id: string;
  size: string | null;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description1: string | null;
  description2: string | null;
  description3: string | null;
  description4: string | null;
  webMFile: string;
  mp4File: string;
  imageUrl1: string | null;
  imageUrl2: string | null;
  imageUrl3: string | null;
  imageUrl4: string | null;
  price: number;
  type: string;
  sizes: ProductSize[];
  createdAt: Date;
  updatedAt: Date;
  stock: number | null;
  imageUrl1Alt?: string;
  imageUrl2Alt?: string;
  imageUrl3Alt?: string;
  imageUrl4Alt?: string;
}

export interface ProductProps {
  product: Product;
}

export interface ProductContentProps {
  webMFile?: string;
  mp4File?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
  imageUrl1Alt?: string;
  imageUrl2Alt?: string;
  imageUrl3Alt?: string;
  imageUrl4Alt?: string;
}

const page = async ({ params: { id } }: Params) => {
  const product = (await getProductById(id)) as Product;

  const productContent: ProductContentProps[] = [];

  if (product) {
    const content: ProductContentProps = {};
    if (product.mp4File) {
      content.mp4File = product.mp4File;
    }
    if (product.webMFile) {
      content.webMFile = product.webMFile;
    }
    if (product.imageUrl1) {
      content.imageUrl1 = product.imageUrl1;
      content.imageUrl1Alt = product.imageUrl1Alt;
    }
    if (product.imageUrl2) {
      content.imageUrl2 = product.imageUrl2;
      content.imageUrl2Alt = product.imageUrl2Alt;
    }
    if (product.imageUrl3) {
      content.imageUrl3 = product.imageUrl3;
      content.imageUrl3Alt = product.imageUrl3Alt;
    }
    if (product.imageUrl4) {
      content.imageUrl4 = product.imageUrl4;
      content.imageUrl4Alt = product.imageUrl4Alt;
    }
    productContent.push(content);
  }

  return (
    <div className="max-h-[-webkit-fill-available]">
      <Menu />
      <Starfield
        starCount={1500}
        starColor={[255, 255, 255]}
        speedFactor={0.005}
        backgroundColor="black"
      />
      <main className="p-[15px] pt-[75px] sm:p-[unset] min-h-0 h-full w-full flex justify-center mb-[225px]">
        <div className="max-w-screen-xl w-full h-full flex flex-col">
          <div className="flex w-full md:pt-[185px] flex-col md:flex-row justify-center">
            <ProductContent product={product} />
            <CarouselProduct
              content={productContent}
              options={{ loop: true, align: "start" }}
            />
            {/* images mobile*/}
            <ProductInfo product={product} />
          </div>
        <OtherProducts product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
