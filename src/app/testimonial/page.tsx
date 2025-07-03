import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const TestimonialPage = () => {
  const testimonial_data = [
    {
      image: "/images/profile-image1.png",
      description:
        '"The leather bag I purchased from [Your Leather Brand Name] is both stylish and durable. I use it daily and receive compliments wherever I go!"',
      name: "Arlene McCoy",
    },
    {
      image: "/images/profile-image2.png",
      description:
        '"The leather bag I purchased from [Your Leather Brand Name] is both stylish and durable. I use it daily and receive compliments wherever I go!"',
      name: "Arlene McCoy",
    },
    {
      image: "/images/profile-image1.png",
      description:
        '"The leather bag I purchased from [Your Leather Brand Name] is both stylish and durable. I use it daily and receive compliments wherever I go!"',
      name: "Arlene McCoy",
    },
    {
      image: "/images/profile-image2.png",
      description:
        '"The leather bag I purchased from [Your Leather Brand Name] is both stylish and durable. I use it daily and receive compliments wherever I go!"',
      name: "Arlene McCoy",
    },
  ];
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[85%] flex flex-col gap-16 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-mono lg:leading-14 text-primary md:leading-12  sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl">
            Why Choose Us?
          </h2>
        </div>
        <div className="testimonial-slider w-full h-auto flex gap-5                                                                                                                                                                                    ">
          <Carousel className="w-full h-[500px] flex justify-center items-center">
            <CarouselContent className="-ml-4 w-full flex gap-4 h-full justify-center items-center absolute top-0 left-0">
              {testimonial_data.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1 lg:basis-1/2 w-full">
                  <div className="w-[500px] h-auto flex flex-col gap-6 justify-center items-center">
                    <div className="profile-image w-[104px] h-[104px] rounded-full border border-primary p-2">
                      <Image
                        src={testimonial.image}
                        alt={`profile-image`}
                        width={70}
                        height={70}
                        className="h-full rounded-full w-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center h-auto text-center">
                      <p className="text-xl font-sans text-primary">
                       {testimonial.description}
                      </p>
                    </div>
                    <div className="w-full h-auto flex justify-center items-center">
                      <h3 className="text-2xl font-mono text-primary text-center">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
