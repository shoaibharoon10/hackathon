import Image from "next/image";
import Filter from "@/app/assets/filter.png"
export default function BlowHero(){
    return (
        <>
     <div className="w-[100%] h-[4rem] bg-[#F9F1E7]" >
        <div>
        <Image src={Filter} width={30} alt="Picture of the author" />
            <p>Filter</p>
            <p>| Showing 1–16 of 32 results</p>
        </div>
        <div>
            <p>Show</p>
            {/* <div > 16</div> */}            
            </div>
            <input className="w-[2.5rem] h-[2.5rem] bg-black text-white text-center self-center" type="text" placeholder="16" name="" id="" />
     </div>
        </>
    )
}