import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[250px] bg-white flex justify-center items-center">
      <div className="flex flex-col w-full h-[170px] justify-start items-center">
        <div className="logo flex py-5 w-full  justify-center items-center h-auto">
          <a href="/" className="w-[50%] flex justify-end">
            <Image src="/images/logo.png" width={100} height={100} alt="logo" />
          </a>
          <div className="flex justify-end w-[40%]  items-end gap-5 text-primary  h-auto ">
            <Search size={24} />
            <ShoppingCart size={24} />
            <User size={24} />
          </div>
        </div>
        <nav className="nav w-full h-auto py-4 flex justify-center items-center">
          <ul className="w-auto px-2 gap-11 flex justify-center items-center">
            <li className="text-primary font-mono text-xl p-1">{`Men’s Wallet`}</li>
            <li className="text-primary font-mono text-xl p-1">Jackets</li>
            <li className="text-primary font-mono text-xl p-1">Ladies Bags</li>
            <li className="text-primary font-mono text-xl p-1">Bags</li>
            <li className="text-primary font-mono text-xl p-1">Watches</li>
            <li className="text-primary font-mono text-xl p-1">Gifts</li>
            <li className="text-primary font-mono text-xl p-1">Travel & More</li>
          </ul>
        </nav>
        <div className="w-full h-auto flex p-2 border-t border-primary/20 justify-center items-center">
            <div className="w-[31%] flex justify-center gap-4 items-center h-auto p-1">
              <Image src="/images/header-icon1.png" width={40} height={40} alt="icon" />   <p className="text-xl uppercase font-mono text-primary">Fast Delivery</p>
            </div>
            <div className="w-[31%] flex justify-center gap-4 items-center h-auto border-primary/20 border-l border-r p-1">
              <Image src="/images/header-icon2.png" width={40} height={40} alt="icon" />   <p className="text-xl uppercase font-mono text-primary">Fast Delivery</p>
            </div>
            <div className="w-[31%] flex justify-center gap-4 items-center h-auto p-1">
              <Image src="/images/header-icon3.png" width={40} height={40} alt="icon" />   <p className="text-xl uppercase font-mono text-primary">Fast Delivery</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
