import React from 'react'
import Hero from './components/Hero'
// import Subhero from './components/test'
import Section1 from './components/Section'
import Slides from './components/Slides'
import Products from './components/Products'
import Furniro from './components/Furniro'

const page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Products />
      <Slides />
      <Furniro />
    </div>
  )
}

export default page