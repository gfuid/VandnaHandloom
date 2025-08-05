import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import d1 from '../assets/doormate.webp';
import d2 from '../assets/dr2.webp';
import d3 from '../assets/dr4.webp';

const doormateItems = [
  {
    img: d1,
    name: 'Classic Coir Doormat',
    desc: 'Made from natural coir, perfect for keeping dirt outside.',
  },
  {
    img: d2,
    name: 'Handcrafted Braided Doormat',
    desc: 'Artisan-woven with rustic charm for modern entryways.',
  },
  {
    img: d3,
    name: 'Dual-Tone Pattern Doormat',
    desc: 'Stylish, durable, and built for everyday use.',
  },
];

const Doormate = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FDF9F3] px-6 py-20 md:px-20 overflow-hidden mt-24">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#3D2A22]">Our Doormat Collection</h2>
        <p className="text-[#A1410F] mt-3 text-lg">
          Durable & stylish mats to welcome every step.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {doormateItems.map((item, index) => (
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

export default Doormate;
