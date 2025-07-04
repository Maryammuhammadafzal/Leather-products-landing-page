import { MoveRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductPage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center md:py-20 sm:py-14 xs:py-8 py-4">
      <div className="grid grid-rows-2 justify-center items-center w-full h-auto">
        <div className="grid xs:grid-cols-3 grid-cols-2 w-full h-auto justify-center items-center">
          <div className="w-full xl:h-[600px] lg:h-[530px] md:h-[450px] sm:h-[380px] xs:h-[300px] h-[220px] group relative">
            <Image
              src="/images/product-image1.jpg"
              width={400}
              height={400}
              alt="icon"
              className="w-full h-full object-cover"
            />
            <div className="content w-auto h-auto  flex gap-2 items-center py-10 opacity-0 text-secondary transform translate-0 group-hover:-translate-y-30 group-hover:opacity-100 duration-500 px-8">
              <p className="text-5xl font-mono">{`Men’s Wallet`}</p>
              <MoveRightIcon size={30} />
            </div>
          </div>
          <div className="w-full xl:h-[600px] lg:h-[530px] md:h-[450px] sm:h-[380px] xs:h-[300px] h-[220px] group relative">
            <Image
              src="/images/product-image2.png"
              width={400}
              height={400}
              alt="icon"
              className="w-full h-full object-cover"
            />
            <div className="content w-auto h-auto  flex gap-2 items-center py-10 opacity-0 text-secondary transform translate-0 group-hover:-translate-y-30 group-hover:opacity-100 duration-500 px-8">
              <p className="text-5xl font-mono">{`Jackets`}</p>
              <MoveRightIcon size={30} />
            </div>
          </div>
          <div className="w-full xl:h-[600px] lg:h-[530px] md:h-[450px] sm:h-[380px] xs:h-[300px] xs:block hidden h-[220px] group relative">
            <Image
              src="/images/product-image3.png"
              width={400}
              height={400}
              alt="icon"
              className="w-full h-full object-cover"
            />
            <div className="content w-auto h-auto  flex gap-2 items-center py-10 opacity-0 text-secondary transform translate-0 group-hover:-translate-y-30 group-hover:opacity-100 duration-500 px-8">
              <p className="text-5xl font-mono">{`Ladies Bag`}</p>
              <MoveRightIcon size={30} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full h-auto justify-center items-center">
          <div className="w-full xl:h-[600px] lg:h-[530px] md:h-[450px] sm:h-[380px] xs:h-[300px] h-[220px] group relative">
            <Image
              src="/images/product-image4.png"
              width={400}
              height={400}
              alt="icon"
              className="w-full h-full object-cover"
            />
            <div className="content w-auto h-auto  flex gap-2 items-center py-10 opacity-0 text-secondary transform translate-0 group-hover:-translate-y-30 group-hover:opacity-100 duration-500 px-8">
              <p className="text-5xl font-mono">{`Bags`}</p>
              <MoveRightIcon size={30} />
            </div>
          </div>
          <div className="w-full xl:h-[600px] lg:h-[530px] md:h-[450px] sm:h-[380px] xs:h-[300px] h-[220px] group relative">
            <Image
              src="/images/product-image5.png"
              width={400}
              height={400}
              alt="icon"
              className="w-full h-full object-cover"
            />
            <div className="content w-auto h-auto  flex gap-2 items-center py-10 opacity-0 text-secondary transform translate-0 group-hover:-translate-y-30 group-hover:opacity-100 duration-500 px-8">
              <p className="text-5xl font-mono">{`Watches`}</p>
              <MoveRightIcon size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
