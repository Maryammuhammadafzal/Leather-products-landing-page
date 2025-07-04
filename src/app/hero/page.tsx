import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const HeroPage = () => {
  return (
    <div className="w-full h-[650px] flex justify-center items-center">
      <Carousel className="w-full h-full flex justify-center items-center">
        <CarouselContent className="w-full top-0 left-0 absolute ml-0 h-full">
          <CarouselItem className="w-full flex justify-center items-center h-full relative p-0">
            <Image
              src="/images/hero-image.jpg"
              alt="image"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute left-0 top-0 w-full h-full flex justify-center items-end">
              <div className="w-[90%] h-auto py-20 gap-6 flex-wrap flex justify-between items-center">
                <h1 className="font-mono md:text-[40px] sm:text-[34px] xs:text-[28px] min-[350px]:text-[24px] text-[20px] text-secondary uppercase max-w-2xl">
                  Step into the World of BoldCraft Leatherworks
                </h1>
                <div className="w-auto h-auto p-2">
                  <Button className="font-mono sm:text-lg text-base bg-transparent rounded-full uppercase border border-secondary md:px-14 sm:px-12 px-10 hover:bg-secondary hover:text-primary md:py-6 sm:py-5 py-4">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroPage;
