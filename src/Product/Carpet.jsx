import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import c1 from '../assets/carpet1.webp';
import c2 from '../assets/carpet.webp';
import c3 from '../assets/carpet2.webp';

const carpetItems = [
  {
    img: c1,
    name: 'Premium Wool Carpet',
    desc: 'Soft woolen texture with intricate hand-tufted details.',
  },
  {
    img: c2,
    name: 'Traditional Pattern Carpet',
    desc: 'Rich traditional motifs with timeless elegance.',
  },
  {
    img: c3,
    name: 'Modern Minimal Carpet',
    desc: 'Neutral tones with subtle patterns for modern interiors.',
  },
];

const Carpet = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FDF9F3] px-6 py-20 md:px-20 overflow-hidden mt-24">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#3D2A22]">Our Carpet Collection</h2>
        <p className="text-[#A1410F] mt-3 text-lg">
          Softness and style woven into every strand.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {carpetItems.map((item, index) => (
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

export default Carpet;
