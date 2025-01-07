// import React from 'react'
// import Card from '../components/Card'
// import Test from '../components/test'
// const Shop = () => {
//   return (
//     <div>
//       <h1> Shop Page</h1>
//       <Card />
//       )
      
//     </div>
//   )
// }

// export default Shop

'use client'

import { use } from "react";
import Card from "../components/Card";

const data = [
{
  id: 1,
  color: 'bg-blue-500',
  heading: 'Syltherine',
  paragraph:'Stylish cafe chair',
  newprice:'Rp 2.500.000',
  oldprice:'Rp 3.500.000',
},
{
  id: 2       ,
  color: 'bg-green-500',
  heading: 'Leviosa',
  paragraph:'Lorem ipsum dolor sit amet consectetur adipsicing...',
},
{
  id: 3,
  color: 'bg-yellow-500',
  heading: 'Lolito',
  paragraph:'Lorem ipsum dolor sit amet consectetur adipsicing...',
},
{
  id: 4,
  color: 'bg-red-500',
  heading: 'Heading 4',
  paragraph:'Lorem ipsum dolor sit amet consectetur adipsicing...',
},
]

export default function About() {
    return (
      <div className='bg-slate-700 p-3'>
        <div className=" bg-purple-500 flex gap-2">
         {/* <Card heading='Heading 1' paragraph="loremsdfsfsfsssssssssss sfsdfds sdfsdf " color='bg-red-300' />
         <Card heading='Heading 2' paragraph="abcdefgjekdfsksfdllksdfjksddlkjk sdfj " color='bg-pink-500'/>
         <Card heading='Heading 3' paragraph="zxcvxcuvxcoiuxouincxuvzouxcvixovuixcvoi " color='bg-yellow-500' />
         <Card heading='Heading 4' paragraph="0psdfsisdfsoifsdofpsdfiosdfdsfdsofdfoo " color='bg-green-400'/> */}
         
         {data.map((elem) => { 
         return (
         <Card
          key={elem.id} //unique property ko key k andar pass karni hoti hai
          paragraph={elem.paragraph}
          color={elem.color}
          heading={elem.heading}
          newprice={elem.newprice}
          oldprice={elem.oldprice}
         />
         );
         })}
        </div>              
     </div>
    )
}