import Menu from "./components/navbar&footer/Menu";
import LogoAnimationHome from "./components/home/logoAnimationHome";
import CategoryHome from "./components/home/CategoryHome";
import FeaturedProductsHome from "./components/home/FeaturedProductsHome";
import MadwolfArtHome from "./components/home/MadwolfArtHome";
import ReviewsHome from "./components/home/ReviewsHome";
import BlogPostsHome from "./components/home/BlogPostsHome";
import Footer from "./components/navbar&footer/Footer";

export default async function Home() {
  return (
    <div className="max-h-[-webkit-fill-available]">
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
