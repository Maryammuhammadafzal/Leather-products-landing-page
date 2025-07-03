import Image from "next/image";
import HeroPage from "./hero/page";
import ProductPage from "./product/page";
import FeaturedPage from "./featured/page";
import AboutPage from "./about/page";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage/>
      <ProductPage/>
      <FeaturedPage/>
      <AboutPage/>
      <Banner/>
    </div>
  );
}
