import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import cushion1 from '../assets/custion/on.jpeg';

import cushion2 from '../assets/custion/one.jpeg';
import cushion3 from '../assets/custion/to.jpeg';
const cushionItems = [
  {
    img: cushion1,
    name: 'Handwoven Cotton Cushion',
    desc: 'Soft texture and breathable fabric perfect for relaxation.'
  },
  {
    img: cushion2,
    name: 'Embroidered Throw Pillow',
    desc: 'Traditional embroidery for a touch of elegance.'
  },
  {
    img: cushion3,
    name: 'Natural Jute Cushion',
    desc: 'Eco-friendly cushion with rustic charm.'
  }
];

const Cushion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FFF7F1] px-6 py-20 md:px-20 overflow-hidden mt-24">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#3D2A22]">Our Cushion Collection</h2>
        <p className="text-[#A1410F] mt-3 text-lg">Handcrafted comfort for every corner.</p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cushionItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            data-aos="zoom-in"
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

export default Cushion;
