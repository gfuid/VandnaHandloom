import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import dari1 from '../assets/dari.webp';
import dari2 from '../assets/dari88.webp';
import dari3 from '../assets/dari9.webp';

const dariItems = [
  {
    img: dari1,
    name: 'Traditional Handwoven Dari',
    desc: 'Classic patterns with strong natural cotton threads.'
  },
  {
    img: dari2,
    name: 'Colorful Stripe Dari',
    desc: 'Bright, vibrant stripes for a lively floor statement.'
  },
  {
    img: dari3,
    name: 'Vintage Wool Dari',
    desc: 'Soft woolen dari perfect for cozy and rustic spaces.'
  }
];

const Dari = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FDF9F3] px-6 py-20 md:px-20 overflow-hidden mt-24">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#3D2A22]">Our Dari Collection</h2>
        <p className="text-[#A1410F] mt-3 text-lg">
          Elegantly crafted for everyday living.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {dariItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={item.img}
              alt={item.name}
             className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3D2A22]">{item.name}</h3>
              <p className="text-sm text-[#5A3B2E] mt-2">{item.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dari;
