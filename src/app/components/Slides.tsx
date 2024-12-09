import Image from "next/image";
import InnerPeace from "@/assets/inner.png" 
import SideInner from "@/assets/Sideinner.png" 
export default function () {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3]">
        <div className="slideText pt-9">

        <h4 className=" font-extrabold text-[2rem] ">50+ Beautiful rooms inspiration</h4>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] p-2">Exlore More</button>
        </div>
        <div className="slideImages">
        <Image src={InnerPeace} width={250}  alt="Picture of the author" />

        </div>
        <div className="slideImages">
        <Image src={SideInner} width={250} alt="Picture of the author" />

        </div>
      </div>
    </>
  );
}