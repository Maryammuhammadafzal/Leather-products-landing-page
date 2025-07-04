import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto py-10 flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center w-full h-full">
        <div className="flex flex-wrap gap-8 justify-evenly w-full h-auto  py-10">
          <div className="logo flex w-auto max-w-sm h-auto flex-col gap-4">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            <p className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs xl:leading-8 lg:leading-6 font-sans leading-5">
              Explore our collection in person at [Store Location(s)], or browse
              online and enjoy the convenience of secure shopping and shipping.
            </p>
          </div>
          <div className="flex flex-col md:gap-4 gap-2 w-auto h-auto">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary font-mono">
              Products
            </h3>
            <ul className="flex flex-col md:gap-3 gap-2">
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">Wallet</li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">Bags</li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">Watches</li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">Jackets</li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">Custom Products</li>
            </ul>
          </div>
          <div className="flex flex-col md:gap-4 gap-2 w-auto h-auto">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary font-mono">
              Pages
            </h3>
            <ul className="flex flex-col md:gap-3 gap-2">
              <li className="md:text-xl sm:text-lg xs:text-base text-sm"><Link href='/'>Home</Link></li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm"><Link href='/about'>About Us</Link></li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm"><Link href='/collection'>Collection</Link></li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm"><Link href='/features'>Features</Link></li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm"><Link href='/testimonial'>Testimonial</Link></li>
            </ul>
          </div>
          <div className="flex px-3 flex-col max-w-sm md:gap-4 gap-2 w-auto h-auto">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary font-mono">
              Contact Us
            </h3>
            <ul className="flex flex-col md:gap-3 gap-2">
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">(209) 555-0104</li>
              <li className="md:text-xl sm:text-lg xs:text-base text-sm">nathan.roberts@example.com</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex text-center justify-center md:text-base sm:text-sm text-xs px-2 items-center">
          © 2021 all copyright reserved. All Rights Reserved. Rootlet Solutions
        </div>
      </div>
    </div>
  );
};

export default Footer;
