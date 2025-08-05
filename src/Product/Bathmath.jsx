import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bathmat1 from '../assets/towel1.webp';
import bathmat2 from '../assets/towel2.webp';
import bathmat3 from '../assets/towel33.webp';

const bathmats = [
  {
    img: bathmat1,
    name: 'Cotton Loop Bathmat',
    desc: 'Soft cotton loops for maximum comfort and absorbency.',
  },
  {
    img: bathmat2,
    name: 'Waffle Weave Bathmat',
    desc: 'Textured weave with handloom charm and quick dry feature.',
  },
  {
    img: bathmat3,
    name: 'Patterned Jacquard Mat',
    desc: 'Elegant jacquard patterns with anti-slip grip.',
  },
];

const Bathmat = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#FFF9F3] py-20 px-6 md:px-20 mt-24" >
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#3D2A22]">Bathmat Collection</h2>
        <p className="text-[#A1410F] mt-2 text-lg">Step into softness—crafted for comfort & durability.</p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {bathmats.map((item, index) => (
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

export default Bathmat;
