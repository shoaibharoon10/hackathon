// import Image from "next/image";
// import InnerPeace from "@/app/assets/inner.png" 
// import SideInner from "@/app/assets/Sideinner.png"
// import Rectangle from "@/app/assets/Rectangle.png"

// const Slides = () => {
//   return (
//     <>
//       <div className="slideSection bg-[#FCF8F3] flex justify-between"> {/* omitted slideSection from this line*/}
//         <div className="slideText pt-9">

//           <h4 className=" font-bold text-[40px] leading-[48px]">50+ Beautiful rooms inspiration</h4>
//           <p>
//             Our designer already made a lot of beautiful prototipe of rooms that
//             inspire you
//           </p>
//           <button className="bg-[#B88E2F] p-2">Exlore More</button>
//         </div>
//         <div className="slideImages">
//           <Image src={InnerPeace} height={582}  alt="Picture of the author" />

//         </div>
//         <div className="slideImages">
//           <Image src={SideInner} height={486} alt="Picture of the author" />

//         </div>
//         <div className="slideImages">
//           <Image src={Rectangle} height={486} alt="Picture of the author" />

//         </div>        
//       </div>
//     </>
//   );
// }

// export default Slides;



import Image from "next/image";
import InnerPeace from "@/app/assets/inner.png";
import SideInner from "@/app/assets/Sideinner.png";
import Rectangle from "@/app/assets/Rectangle.png";

const Slides = () => {
  return (
    <div className="slideSection relative mt-12 w-full mx-auto bg-[#FCF8F3] flex flex-col md:flex-row items-center md:justify-between p-8">
      {/* Text Section */}
      <div className="slideText md:w-1/2 space-y-4">
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
      <div className="place-items-start flex">
        {/* Images Section */}
        <div className="space-x-4">
          <Image src={InnerPeace} alt="Inner Peace" className="rounded-md" />
          <div className="bg-[#FFF3E3]">
            <h6>New Arrival</h6>
          </div>
        </div>
        <div className="imageGallery2 flex space-x-4">
          <Image src={SideInner} alt="Side Inner" className="rounded-md" />
          <Image src={Rectangle} alt="Rectangle" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Slides;

