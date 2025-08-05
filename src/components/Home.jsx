import React from 'react'

import HeroSection from './Hero';
import Second from './Second';
import ProductSection from './ProductSection';
import Why from './Why';
import ThankYouSection from './ThankYouSection';
import { Sustainability } from './Sustainability';
import { Testimonials } from './Testimonials';
import { Gallery } from './Gallery';
const Home = () => {
  return (
    <div>
      <div className="w-full overflow-x-hidden">


      <HeroSection />   
        <Second />
        <ProductSection />
        <Why/>
        <Gallery />
        <Sustainability/>
        <Testimonials/>

        <ThankYouSection/>
        </div>
    </div>
  )
}

export default Home
