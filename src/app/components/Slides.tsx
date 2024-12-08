import Image from "next/image";
import InnerPeace from "@/assets/inner.png"; 
import SideInner from "@/assets/Sideinner.png"; 

const Slides = () => {
  return (
    <div className="slideSection bg-[#FCF8F3]">
      {/* Text Section */}
      <div className="slideText pt-9">
        <h4 className="font-extrabold text-[2rem]">
          50+ Beautiful rooms inspiration
        </h4>
        <p className="mt-2">
          Our designer already made a lot of beautiful prototypes of rooms that
          will inspire you.
        </p>
        <button className="bg-[#B88E2F] p-2 mt-4 text-white rounded-md">
          Explore More
        </button>
      </div>

      {/* Image Section */}
      <div className="slideImages flex justify-center gap-4 mt-6">
        <div>
          <Image
            src={InnerPeace}
            width={250}
            height={250}
            alt="Inner Peace Room Inspiration"
            className="rounded-lg"
          />
        </div>
        <div>
          <Image
            src={SideInner}
            width={250}
            height={250}
            alt="Side View of Room Inspiration"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

// Assigning a display name for debugging purposes
Slides.displayName = "Slides";

export default Slides;
