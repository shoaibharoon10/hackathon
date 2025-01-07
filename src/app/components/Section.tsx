import Image from "next/image";
import React from "react";
import Dining from "@/app/assets/Dining.png";
import Living from "@/app/assets/Living.png";
import Bedroom from "@/app/assets/Bedroom.png"; 


const Section1 = () => {
  return (
    <div className="w-[1440px] pl-[131px]">
      {/* Section 1 */}
      <div className="relative mt-12 w-[1183px]  bg-white">

        {/* First div for Heading and Paragraph */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Browse The Range</h1>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <br />
        </div>

        {/* Second div for Images with Names */}
        <div className="flex space-x-4 justify-center mt-4 rounded-lg">
          {/* First Image with Name */}
          <div className="text-center">
            <Image
            src={Dining}
            width={381}
            height={480}
            alt="Dining"
            className="w-full h-auto object-cover cursor-pointer"
            />
            <h2 className="mt-2 text-[#333333] text-base font-semibold leading-9">Dining</h2>
          </div>

          {/* Second Image with Name */}
          <div className="text-center">
            <Image
              src={Living}
              width={381}
              height={480}
              alt="Living"
              className="w-full h-auto object-cover cursor-pointer"
            />
            <h2 className="mt-2 text-[#333333] text-base font-semibold leading-9 ">Living</h2>
          </div>

          {/* Third Image with Name */}
          <div className="text-center">
            <Image
              src={Bedroom}
              width={381}
              height={480}
              alt="Bedroom"
              className="w-full h-auto object-cover cursor-pointer"
            />
            <p className="mt-2 text-[#333333] text-base font-semibold leading-9">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;