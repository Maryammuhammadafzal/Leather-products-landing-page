
import HeroPage from "./hero/page";
import FeaturedPage from "./featured/page";
import AboutPage from "./about/page";
import Banner from "@/components/Banner";
import TestimonialPage from "./testimonial/page";
import CollectionPage from "./collection/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage/>
      <CollectionPage/>
      <FeaturedPage/>
      <AboutPage/>
      <Banner/>
      <TestimonialPage/>
    </div>
  );
}
