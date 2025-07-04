import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const about_data = [
    {
      image: "/images/about-icon1.png",
      title: "Premium Quality",
    },
    {
      image: "/images/about-icon2.png",
      title: "Ethical Sourcing",
    },
    {
      image: "/images/about-icon3.png",
      title: "Personalized Service",
    },
    {
      image: "/images/about-icon4.png",
      title: "Timeless Design",
    },
  ];
  return (
    <div id="about" className="about flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[85%] flex flex-col gap-16 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-mono lg:leading-14 md:leading-12  sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl text-primary">
            Why Choose Us?
          </h2>
        </div>

        <div className="w-full h-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-14 items-center">
          {about_data.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-5 w-auto h-auto ">
              <Image
                src={item.image}
                alt={`icon-${index+1}`}
                width={70}
                height={70}
                className=""
              />
              <h4 className="font-mono md:text-xl xs:text-lg text-base text-primary text-center">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;