import Image from "next/image";
import HeroPage from "./hero/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage/>
    </div>
  );
}
