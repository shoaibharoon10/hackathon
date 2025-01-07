import React, { FC } from 'react';
import Image from 'next/image';
import FeatureProd from "@/app/assets/Featured Products.png";
import FeatureProd1 from "@/app/assets/Featured Products (1).png";
import FeatureProd2 from "@/app/assets/Featured Products (2).png";
import FeatureProd3 from "@/app/assets/Featured Products (3).png";
import FeatureProd4 from "@/app/assets/Featured Products (4).png";
import FeatureProd5 from "@/app/assets/Featured Products (5).png";
import FeatureProd6 from "@/app/assets/Featured Products (6).png";
import FeatureProd7 from "@/app/assets/Featured Products (7).png";

const Products: FC = () => {
  return (
    <div className="w-[1440px]">
      <div className="w-[1440px] pt-10">
        <h1 className="text-center text-[#3A3A3A] text-4xl leading-[48px] font-bold">
          Our Products
        </h1>
      </div> 
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 pb-5 pl-[60px]">
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd}
              alt="Product 1"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd1}
              alt="Product 2"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd2}
              alt="Product 3"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd3}
              alt="Product 4"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd4}
              alt="Product 5"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd5}
              alt="Product 6"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd6}
              alt="Product 7"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full cursor-pointer"
              src={FeatureProd7}
              alt="Product 8"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className='text-center  pt-[10px] pb-[40px]'>
        <button type="button" className="w-[245px] h-[48px] text-[#B88E2F] hover:text-white border border-[#B88E2F] hover:bg-[#6b531a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base px-5 py-2.5 text-center me-2 mb-2 dark:border-[#f0c86c] dark:text-[#f0c86c] dark:hover:text-white dark:hover:bg-[#f0c86c] dark:focus:ring-[#6b531a]">Show More</button>  
        </div>
      </div>
    </div>
  );
};

export default Products;