import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rugImage1 from '../assets/rug2.webp';
import rugImage2 from '../assets/rug3.webp';
import rugImage3 from '../assets/rug.webp';

const products = [
  {
    image: rugImage1,
    title: "Handwoven Wool Rug",
    description: "Crafted from premium wool, perfect for cozy interiors.",
  },
  {
    image: rugImage2,
    title: "Jute Area Rug",
    description: "Eco-friendly jute rug with natural earthy tones.",
  },
  {
    image: rugImage3,
    title: "Cotton Dhurrie Rug",
    description: "Lightweight and reversible, ideal for daily use.",
  },
];

const Rug = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#FAF5EF] py-20 px-6 lg:px-20 overflow-hidden mt-24">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D2A22] tracking-wide mb-4">
          Our Rug Collection
        </h2>
        <p className="text-lg text-[#A1410F] max-w-2xl mx-auto">
          Durable, handwoven, and rooted in natural tradition — explore our finest rugs.
        </p>
      </div>

      {/* Rug Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#E4D5C4]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3D2A22] mb-2">{item.title}</h3>
              <p className="text-sm text-[#5A3B2E] mb-4">{item.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rug;
