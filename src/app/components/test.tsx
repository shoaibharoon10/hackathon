import Image from "next/image";
import Dining from "@/app/assets/Dining.png";
import Living from "@/app/assets/Living.png";
import Bedroom from "@/app/assets/Bedroom.png"; 
export default function SubHero(){

    return (
        <div className="absolute m-[50px]">
        <div className="subText">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image src={Dining} width={282} alt="Picture of the author" />
                <h6>Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src={Living} width={282} alt="Picture of the author" />
            <h6>Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src={Bedroom} width={282} alt="Picture of the author" />
            <h6>Bedroom</h6>    
            </div>
           </div>

        </div>
    )
}


