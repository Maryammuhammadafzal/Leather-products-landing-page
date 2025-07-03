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
    <div className="w-full h-auto py-20 flex justify-center items-center">
      <div className="flex w-full h-auto gap-10 flex-col items-center justify-center">
        <h2 className="font-mono text-[40px] text-primary text-center leading-12 uppercase max-w-2xl">
          Explore Our Featured Favorites Collection
        </h2>
        <div className="cards w-full h-auto flex flex-wrap gap-14 items-center justify-center xs:px-10">
        {
            featured_data.map((feature , index)=> (
                  <div key={index} className="card w-[320px] bg-[#F8F8F8] h-[380px] flex-col">
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
                <h3 className="text-xl font-mono uppercase text-primary">{`${feature.title}`}</h3>
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
