import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto py-10 flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center w-full h-full">
        <div className="flex flex-wrap gap-4 justify-evenly w-full h-auto  py-10">
          <div className="logo flex w-auto max-w-sm h-auto flex-col gap-4">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            <p className="xl:text-xl lg:text-lg text-base xl:leading-8 lg:leading-6 font-sans leading-5">
              Explore our collection in person at [Store Location(s)], or browse
              online and enjoy the convenience of secure shopping and shipping.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-auto h-auto">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary font-mono">
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="md:text-xl text-lg">Wallet</li>
              <li className="md:text-xl text-lg">Bags</li>
              <li className="md:text-xl text-lg">Watches</li>
              <li className="md:text-xl text-lg">Jackets</li>
              <li className="md:text-xl text-lg">Custom Products</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-auto h-auto">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary font-mono">
              Pages
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="md:text-xl text-lg">Home</li>
              <li className="md:text-xl text-lg">About Us</li>
              <li className="md:text-xl text-lg">Collection</li>
              <li className="md:text-xl text-lg">Features</li>
              <li className="md:text-xl text-lg">Testimonial</li>
            </ul>
          </div>
          <div className="flex flex-col max-w-sm gap-4 w-auto h-auto">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary font-mono">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="md:text-xl text-lg">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </li>
              <li className="md:text-xl text-lg">(209) 555-0104</li>
              <li className="md:text-xl text-lg">nathan.roberts@example.com</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex text-center justify-center items-center">
          © 2021 all copyright reserved. All Rights Reserved. Rootlet Solutions
        </div>
      </div>
    </div>
  );
};

export default Footer;
