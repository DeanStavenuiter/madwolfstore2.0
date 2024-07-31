import Footer from "@/app/components/navbar&footer/Footer";
import Menu from "@/app/components/navbar&footer/Menu";
import ProductContent from "@/app/components/productPage/ProductContent";
import ProductInfo from "@/app/components/productPage/ProductInfo";
import SizeAndAddtoCartButton from "@/app/components/productPage/sizeAndAddtoCartButton";
import VideoPlayer from "@/app/components/productPage/Videoplayer";
import { getProductById } from "@/app/crud/getProducts";

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
}

export interface ProductProps {
  product: Product;
}

const page = async ({ params: { id } }: Params) => {
  const product = (await getProductById(id)) as Product;

  return (
    <div className="max-h-[-webkit-fill-available]">
      <Menu />
      <main className="p-[15px] sm:p-[unset] h-screen w-full flex justify-center">
        <div className="max-w-screen-xl w-full flex">
          <div className="flex w-full pt-[185px] flex-row justify-center">
            <ProductContent product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
