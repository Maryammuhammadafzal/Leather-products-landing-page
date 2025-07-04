import Image from "next/image";
import React from "react";

const FeaturedPage = () => {
    let featured_data = [
        {
            image : '/images/featured-image1.png',
            title: 'Men’s Stylish Wallet',
            description : 'These wallets offer sleek designs and practical features for everyday use.',
            price: 'Price: $80.00'
        },
        {
            image : '/images/featured-image2.png',
            title: 'Men’s Stylish Wallet',
            description : 'These wallets offer sleek designs and practical features for everyday use.',
            price: 'Price: $80.00'
        },
        {
            image : '/images/featured-image3.png',
            title: 'Men’s Stylish Wallet',
            description : 'These wallets offer sleek designs and practical features for everyday use.',
            price: 'Price: $80.00'
        },
        {
            image : '/images/featured-image4.png',
            title: 'Men’s Stylish Wallet',
            description : 'These wallets offer sleek designs and practical features for everyday use.',
            price: 'Price: $80.00'
        },
        {
            image : '/images/featured-image5.png',
            title: 'Men’s Stylish Wallet',
            description : 'These wallets offer sleek designs and practical features for everyday use.',
            price: 'Price: $80.00'
        },
        {
            image : '/images/featured-image6.png',
            title: 'Men’s Stylish Wallet',
            description : 'These wallets offer sleek designs and practical features for everyday use.',
            price: 'Price: $80.00'
        },
    ]
  return (
    <div id="featured" className="featured w-full h-auto md:py-20 sm:py-14 xs:py-8 py-4 flex justify-center items-center">
      <div className="flex w-full h-auto gap-10 flex-col items-center justify-center">
        <h2 className="font-mono md:text-[40px] sm:text-[34px] xs:text-[28px] min-[350px]:text-[24px] text-[20px] text-primary text-center uppercase max-w-2xl">
          Explore Our Featured Favorites Collection
        </h2>
        <div className="cards w-full h-auto flex flex-wrap gap-14 items-center justify-center px-3 xs:px-10">
        {
            featured_data.map((feature , index)=> (
                  <div key={index} className="card xs:w-[320px] w-full bg-[#F8F8F8] h-[380px] flex-col">
            <div className="image w-full h-[260px]">
              <Image
                src={feature.image}
                width={400}
                height={400}
                alt="icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="content w-full p-4 flex flex-col gap-1">
                <h3 className="sm:text-xl text-lg font-mono uppercase text-primary">{`${feature.title}`}</h3>
                <p className="text-primary/30 text-xs font-sans">
                {feature.description}
                </p>
                <p className="text-primary uppercase text-lg font-mono">{feature.price}</p>
            </div>
          </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;
