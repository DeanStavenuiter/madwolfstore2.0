import Menu from "./components/Menu";
import LogoAnimation from "./components/logoAnimation";
import Starfield from "./components/Space";

export default async function Home() {
  return (
    <div className="">
      <Menu />
      <main className="flex min-h-screen flex-col items-center justify-center p-[15px] max-w-screen-xl m-[0_auto]">
        <Starfield
          starCount={1500}
          starColor={[255, 255, 255]}
          speedFactor={0.005}
          backgroundColor="black"
        />
        <LogoAnimation />
      </main>
    </div>
  );
}
