import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full xs:h-[250px] h-[200px] bg-white flex justify-center relative items-center">
       <Image src="/images/needle-vector.png" width={80} height={80} alt="logo" className="absolute xl:top-20 top-24 xl:right-40 right-0 z-30 md:block hidden" />
       <Image src="/images/shoe-vector.png" width={100} height={100} alt="logo" className="absolute top-16 xl:left-24 lg:left-18 left-0 z-30 md:block hidden" />
      <div className="flex flex-col w-full h-[170px] justify-start items-center">
        <div className="logo flex sm:py-5 py-2 w-full  justify-center items-center h-auto">
          <a href="/" className="w-[50%] flex md:justify-end">
            <Image src="/images/logo.png" width={100} height={100} alt="logo" />
          </a>
          <div className="flex justify-end w-[40%]  items-end gap-5 text-primary  h-auto ">
            <Search size={24}/>
            <ShoppingCart size={24} />
            <User size={24} />
          </div>
        </div>
        <nav className="nav w-full h-auto py-4 flex justify-center items-center">
          <ul className="w-auto px-2 lg:gap-11 md:gap-8 sm:gap-5 xs:gap-3 gap-1 max-sm:flex-wrap flex justify-center items-center">
            <li className="text-primary font-mono md:text-lg lg:text-xl sm:text-base text-sm p-1"><Link href='#mens-wallet'>{`Men’s Wallet`}</Link></li>
            <li className="text-primary font-mono md:text-lg lg:text-xl sm:text-base text-sm p-1"><Link href='#jackets'>Jackets</Link></li>
            <li className="text-primary font-mono md:text-lg lg:text-xl sm:text-base text-sm p-1"><Link href='#ladies-bag'>Ladies Bags</Link></li>
            <li className="text-primary font-mono md:text-lg lg:text-xl sm:text-base text-sm p-1"><Link href='#bags'>Bags</Link></li>
            <li className="text-primary font-mono md:text-lg lg:text-xl sm:text-base text-sm p-1"><Link href='#watches'>Watches</Link></li>
            <li className="text-primary font-mono md:text-lg lg:text-xl sm:text-base text-sm p-1"><Link href='#gifts'>Gifts</Link></li>
            <li className="text-primary font-mono md:text-lg lg:text-xl sm:text-base text-sm p-1"><Link href='#bags'>Travel & More</Link></li>
          </ul>
        </nav>
        <div className="w-full h-auto flex sm:p-2 pt-2 border-t border-primary/20 justify-center items-center">
            <div className="sm:w-[31%] w-[33%] flex justify-center lg:gap-4 gap-2 items-center h-auto md:p-1">
              <Image src="/images/header-icon1.png" width={40} height={40} alt="icon" className="md:w-[40px] sm:w-[35px] xs:w-[30px] w-[20px]" />   <p className="lg:text-xl md:text-lg sm:text-base xs:text-sm text-[10px] uppercase font-mono text-primary">Fast Delivery</p>
            </div>
            <div className="sm:w-[31%] w-[33%] flex justify-center lg:gap-4 gap-2 items-center h-auto border-primary/20 border-l border-r md:p-1">
              <Image src="/images/header-icon2.png" width={40} height={40} alt="icon" className="md:w-[40px] sm:w-[35px] xs:w-[30px] w-[20px]" />   <p className="lg:text-xl md:text-lg sm:text-base xs:text-sm text-[10px] uppercase font-mono text-primary">Fast Delivery</p>
            </div>
            <div className="sm:w-[31%] w-[33%] flex justify-center lg:gap-4 gap-2 items-center h-auto md:p-1">
              <Image src="/images/header-icon3.png" width={40} height={40} alt="icon" className="md:w-[40px] sm:w-[35px] xs:w-[30px] w-[20px]" />   <p className="lg:text-xl md:text-lg sm:text-base xs:text-sm text-[10px] uppercase font-mono text-primary">Fast Delivery</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
