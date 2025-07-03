import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React from "react";

const TestimonialPage = () => {
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[85%] flex flex-col gap-16 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-mono lg:leading-14 md:leading-12  sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl  text-secondary-foreground">
            Why Choose Us?
          </h2>
        </div>
        <div className="testimonial-slider w-full h-auto flex gap-5                                                                                                                                                                                    ">
          <Carousel className="w-full h-[500px] flex justify-center items-center">
            <CarouselContent className="-ml-4 w-full flex gap-4 h-full justify-center items-center">
              <CarouselItem className="md:basis-1 lg:basis-1/2">...</CarouselItem>
              <CarouselItem className="md:basis-1 lg:basis-1/2">...</CarouselItem>
              <CarouselItem className="md:basis-1 lg:basis-1/2">...</CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
