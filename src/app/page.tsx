import Menu from "./components/navbar&footer/Menu";
import LogoAnimationHome from "./components/home/logoAnimationHome";
import Starfield from "./components/Space";
import CategoryHome from "./components/home/CategoryHome";
import FeaturedProductsHome from "./components/home/FeaturedProductsHome";
import MadwolfArtHome from "./components/home/MadwolfArtHome";
import ReviewsHome from "./components/home/ReviewsHome";
import BlogPostsHome from "./components/home/BlogPostsHome";
import Footer from "./components/navbar&footer/Footer";

export default async function Home() {
  return (
    <div className="max-h-[-webkit-fill-available]">
      <Starfield
        starCount={1500}
        starColor={[255, 255, 255]}
        speedFactor={0.005}
        backgroundColor="black"
      />
      <Menu />
      <main className="flex flex-col justify-center p-[15px] max-w-screen-xl m-[0_auto]">
        <LogoAnimationHome />
        <FeaturedProductsHome />
        <CategoryHome />
        <MadwolfArtHome />
        <ReviewsHome />
        <BlogPostsHome />
      </main>
      <Footer />
    </div>
  );
}
