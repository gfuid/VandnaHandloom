import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import throw1 from "../assets/throws1.webp";
import throw2 from "../assets/throws2.webp";
import throw3 from "../assets/throws3.webp";
 // Replace with actual images

const products = [
  {
    image: throw1,
    title: "Handwoven Cotton Throw",
    description: "Soft, breathable, and eco-friendly — perfect for cozy evenings.",
  },
  {
    image: throw2,
    title: "Boho Textured Throw",
    description: "Artisanal fringe detail with a warm rustic tone.",
  },
  {
    image: throw3,
    title: "Jute Blend Throw Blanket",
    description: "A unique blend of jute and cotton for style and warmth.",
  },
];

const Throw = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#FAF5EF] py-20 px-6 lg:px-20 overflow-hidden mt-24">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D2A22] tracking-wide mb-4">
          Throw Blankets
        </h2>
        <p className="text-lg text-[#A1410F] max-w-2xl mx-auto">
          Discover our premium collection of handcrafted throws — blending tradition, comfort, and sustainable living.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#E4D5C4]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-[#3D2A22] mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-[#5A3B2E] mb-4">
                {product.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Throw;
