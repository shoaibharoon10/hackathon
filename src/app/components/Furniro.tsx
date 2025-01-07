import React from 'react'
import Image from 'next/image'; 
import Rec36 from "@/app/assets/Rectangle 36.png";
import Rec38 from "@/app/assets/Rectangle 38.png";
import Rec40 from "@/app/assets/Rectangle 40.png";
import Rec43 from "@/app/assets/Rectangle 43.png";
import Rec45 from "@/app/assets/Rectangle 45.png";
import Rec37 from "@/app/assets/Rectangle 37.png";
import Rec39 from "@/app/assets/Rectangle 39.png";
import Rec41 from "@/app/assets/Rectangle 41.png";
import Rec44 from "@/app/assets/Rectangle 44.png";

const Furniro = () => {
  return (
    <div>
      <div className='w-[1440px] pt-10'>
      <h3 className='text-center text-[#616161] text-sm leading-[30px] font-semibold'>Share your setup with</h3>
        <h1 className='text-center text-[#3A3A3A] text-4xl leading-[48px] font-bold'>#FurniroFurniture</h1>
      </div>
    <div className='h-[780px]'>
      <div className="flex space-x-4">
      <Image
          src={Rec36}
          alt="Rectangle"
          className="position absolute  top-[3592px] cursor-pointer" />
      <Image
          src={Rec38}
          alt="indication-circles"
          className="position absolute top-[3662px] left-[94px] cursor-pointer" />
      <Image
          src={Rec40}
          alt="indication-circles"
          className="position absolute top-[3748px] left-[561px] cursor-pointer" />
      <Image
          src={Rec43}
          alt="indication-circles"
          className="position absolute top-[3691px] left-[872px] cursor-pointer" />
<Image
          src={Rec45}
          alt="indication-circles"
          className="position absolute top-[3606px] left-[1178px] cursor-pointer" />
<Image
          src={Rec37}
          alt="indication-circles"
          className="position absolute top-[3990px] cursor-pointer" />
<Image
          src={Rec39}
          alt="indication-circles"
          className="position absolute top-[3990px] left-[201px] cursor-pointer" />
<Image
          src={Rec41}
          alt="indication-circles"
          className="position absolute top-[4055px] left-[872px] cursor-pointer" />
<Image
          src={Rec44}
          alt="indication-circles"
          className="position absolute top-[4055px] left-[1066px] cursor-pointer" />


      </div>
    </div>    
    </div>
  )
}

export default Furniro
