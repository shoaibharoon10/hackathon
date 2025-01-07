import Image from "next/image";
import InnerPeace from "@/app/assets/inner.png";
import SideInner from "@/app/assets/Sideinner.png";
import Rectangle from "@/app/assets/Rectangle.png";
import Indicater from "@/app/assets/Indicator.png";

const Slides = () => {
  return (
    <div className="slideSection relative mt-2 w-[1440px] h-[670px] bg-[#FCF8F3] flex flex-col md:flex-row items-center md:justify-between p-8">
      {/* Text Section */}
      <div className="md:w-1/3 space-y-4 pl-[40px]">
        <h4 className="font-bold text-[40px] leading-[48px]">
          50+ Beautiful rooms inspiration
        </h4>
        <p className="text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-md">
          Explore More
        </button>
      </div>
      <div className="h-[582px] pt-[44px] pb-[44px] pl-[20px] flex">
        {/* Images Section */}
        <div className="space-x-4 pr-4 position relative">
          <Image
          src={InnerPeace}
          alt="Inner Peace"
          width={404}
          className="rounded-md" />
          <div className="w-[217px] h-[130px] p-5 text-center position absolute top-[420px] left-3 bg-[#FFFFFF]">
            <h6 className="text-base pt-2 pb-4 leading-6 font-medium text-[#616161]">01 --- Bed Room</h6>
            <h3 className="text-[28px] font-semibold leading-[33.6px] text-[#3A3A3A]">Inner Peace</h3>
          </div>
          <div className="position absolute p-3 top-[502px] left-[229px] w-[48px] h-[48px] bg-[#B88E2F]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
          </div>
          {/* <div className="w-[217px] h-[130px] bg-[#f8f8f7]">
            <h6>New Arrival</h6>
          </div> */}
        </div>
        <div className="flex space-x-4">
          <Image
          src={SideInner}
          width={342}
          // height={486}
          alt="Side Inner"
          className="rounded-md position relative" />
          <Image
          src={Indicater}
          width={100}
          height={100}
          alt="indication-circles"
          className="position absolute bottom-[30px] cursor-pointer" />
          
          <Image
          src={Rectangle}
          // height={486}
          alt="Rectangle"
          className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Slides;

