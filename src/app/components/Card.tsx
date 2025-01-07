// import React from 'react'
// import Image from 'next/image'; 
// import Card1 from "@/app/assets/card.png";
// import Filter from "@/app/assets/system-uicons_filtering.png";

// const Card = () => {
//   return (
//     <div>
//         <div className='bg-[#F9F1E7] w-[1440px] h-[100px] place-content-center'>
//         <div className='pl-[98px] flex'>
//         <span>
//         <Image className="rounded-t-lg cursor-pointer" src={Filter} alt="vector1" />
//         </span> <span className='text-xl font-normal pl-2 cursor-pointer'> Filter </span>
//         </div>
//         </div>
//         <div className="max-w-xs ml-[94px] pl-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <a href="#">
//             <Image className="rounded-t-lg" src={Card1} alt="cardimage" />
//         </a>
//         <div className="p-5">
//             <a href="#">
//                 <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#3A3A3A] dark:text-white">Syltherine</h5>
//             </a>
//             <p className="mb-3 font-medium text-base text-[#898989] dark:text-gray-400">Stylish cafe chair</p>
//             <div className='align-middle'>
//             <span className="mb-3 font-semibold text-xl text-[#3A3A3A] dark:text-gray-400">Rp 2.500.000</span>
//             <span className="mb-3 pl-3 font-normal text-base text-[#B0B0B0] line-through  dark:text-gray-400">Rp 3.500.000</span>
//             </div>
//         </div>
// </div>

//     </div>
//   )
// }

// export default Card



interface ICardProps { 
  heading?: string;
  paragraph?: string;
  color?: string;
  newprice?: string;
  oldprice?: string;
}
//Object k ander order matter nahi karta, or props aik object hai
import React from 'react'

const Card = (props: ICardProps) => { //props ko type dedi
  const {heading, paragraph, color, newprice, oldprice}= props
return (
  <div className={color}>
  <div className='card-headingz'>
  <h1>{heading}</h1> 
  </div>
  <div className='card-body'>
      <p>
          {paragraph}
      </p>
  </div>
  <div className='align-middle'>
    <span className="mb-3 font-semibold text-xl text-[#3A3A3A] dark:text-gray-400"> {newprice} </span>
    <span className="mb-3 pl-3 font-normal text-base text-[#B0B0B0] line-through  dark:text-gray-400"> {oldprice}</span>
  </div>

  </div>
)
}

export default Card
