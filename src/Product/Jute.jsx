import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import jute1 from '../assets/jute.webp';
import jute2 from '../assets/jute2.webp';
import jute3 from '../assets/jute3.webp';

const juteProducts = [
  {
    img: jute1,
    name: "Classic Jute Rug",
    desc: "Durable, earthy texture, perfect for eco-conscious homes."
  },
  {
    img: jute2,
    name: "Braided Jute Mat",
    desc: "Hand-braided with natural tones for rustic decor."
  },
  {
    img: jute3,
    name: "Jute & Cotton Blend",
    desc: "Soft blend for added comfort and durability."
  }
];

const Jute = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FAF5EF] py-20 px-6 lg:px-20 overflow-hidden mt-24">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D2A22] tracking-wide mb-4">
          Jute Collection
        </h2>
        <p className="text-lg text-[#A1410F] max-w-2xl mx-auto">
          Discover the charm of handcrafted, sustainable jute designs.
        </p>
      </div>

      {/* Jute Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {juteProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl border border-[#E4D5C4] hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-[#3D2A22]">{item.name}</h4>
              <p className="text-sm text-[#5A3B2E] mt-2">{item.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jute;
