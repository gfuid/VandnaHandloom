import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import sofa1 from '../assets/sofa1.webp';
import sofa2 from '../assets/sofa2.webp';
import sofa3 from '../assets/sofa3.webp';

const sofaItems = [
  {
    img: sofa1,
    name: 'Classic Sofa Panel',
    desc: 'Handwoven elegance with sturdy textures and traditional charm.',
  },
  {
    img: sofa2,
    name: 'Modern Sofa Cover',
    desc: 'Designed for durability and comfort in modern interiors.',
  },
  {
    img: sofa3,
    name: 'Decorative Cushion Panel',
    desc: 'Adds an artistic flair to your seating arrangement.',
  },
];

const Sofa = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FFF9F3] py-20 px-6 md:px-20 mt-24">
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#3D2A22]">Sofa Panel Collection</h2>
        <p className="text-[#A1410F] mt-2 text-lg">Style your seating with handloom-crafted panels.</p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {sofaItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 150}
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

export default Sofa;
