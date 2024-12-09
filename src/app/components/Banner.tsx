import React from 'react'
import Image from "next/image";
import Trophy from "@/app/assets/trophy.png";
import Waranty from "@/app/assets/guarantee.png";
import Shipping from "@/app/assets/shipping.png";
import Support from "@/app/assets/support.png";


const Banner = () => {
  return (
    <div className=" mt-5 flex justify-evenly items-center w-[100%] h-[270px] bg-[#FAF3EA]">
        
    < div className='flex gap-2'>
        <div>
            <Image
            src={Trophy}
            width={40}
            height={40}
            alt="High Quality" />
        </div>
        <div>        
          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
    </div>
    <div className='flex gap-2'>
        <div>
        <Image src={Waranty} width={40} height={40} alt="Picture of the author" />
        </div>
        <div>
        <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
    </div>
    <div className='flex gap-2'>
        <div>
        <Image src={Shipping} width={40} height={40} alt="Picture of the author" />
        </div>
        <div>
        <h4 className="font-bold">Free Shipping</h4>
        <p>Order over 150 $</p>
        </div>
    </div>
    <div className='flex gap-2'>    
        <div>
        <Image src={Support} width={40} height={40} alt="Picture of the author" />
        </div>
        <div>
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
    </div>
    </div>
  )
}

export default Banner
