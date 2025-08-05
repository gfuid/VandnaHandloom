import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ image files that exist in /src/assets (per your screenshot)
import jute from '../assets/jute.webp';
import doormate from '../assets/doormate.webp';
import dari11 from '../assets/dari11.webp';
import throws1 from '../assets/throws1.webp';
import rug2 from '../assets/custion/tr.jpeg';
import rug from '../assets/rug2.webp';     // using as "Braided" preview
import sofa from '../assets/sofa4.webp'; // using as "Sofa Panel" preview
import carpet from '../assets/carpet.webp';     // using as "Braided" preview
import towel1 from '../assets/towel1.webp';
// ⚠️ Add a curtain image when available, e.g.:
// import curtain from '../assets/curtain.webp';

const products = [
  {
    title: 'Jute Specialist',
    type: 'Eco | Jute Creations',
    description: 'Exclusive jute-based home decor and fashion.',
    image: jute,
    link: '/products/jute-specialist',
  },
  {
    title: 'Hand Crafted Doormat (Dari)',
    type: 'Durable | Handmade',
    description: 'Traditional dari style handcrafted mats.',
    image: doormate,
    link: '/products/hand-crafted-doormat',
  },
  {
    title: 'Dari',
    type: 'Rugged | Handwoven',
    description: 'Classic handwoven dari for multipurpose use.',
    image: dari11,
    link: '/products/dari',
  },
  {
    title: 'Throw',
    type: 'Cozy | Handloom',
    description: 'Warm and stylish throws for every home.',
    image: throws1,
    link: '/products/throw',
  },
  {
    title: 'Rug',
    type: 'Durable | Handwoven',
    description: 'Authentic rugs with natural textures.',
    image: rug,
    link: '/products/rug',
  },
  {
    title: 'Carpet',
    type: 'Woolen | Traditional',
    description: 'Plush carpets for premium floor styling.',
    image: carpet,
    link: '/products/carpet',
  },

  {
    title: 'Bathing',
    type: 'Soft | Eco-Friendly',
    description: 'Luxurious and absorbent bathing accessories.',
    image: towel1,
    link: '/products/bathmat',
  },
  {
    title: 'Sofa Panel',
    type: 'Custom | Designer Fit',
    description: 'Decorative sofa panels for stylish protection.',
    image: sofa,
    link: '/products/sofa',
  },
  {
    title: 'cushion',
    type: 'Elegant | Light Filtering',
    description: 'Curtains that complement modern interiors.',
    image: rug2,
    link: '/products/cushion',
  },
];

const ProductSection = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="bg-[#FAF5EF] py-20 px-6 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D2A22] tracking-wide mb-4">
          Our Products
        </h2>
        <p className="text-lg text-[#A1410F] max-w-2xl mx-auto">
          Explore our range of handloom-crafted pieces that blend rich tradition with refined modernity.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedProducts.map((product, index) => (
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
              <p className="text-sm text-[#D87C53] uppercase tracking-wider mb-2">
                {product.type}
              </p>
              <h3 className="text-xl font-semibold text-[#3D2A22] mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-[#5A3B2E] mb-4">
                {product.description}
              </p>
              <Link
                to={product.link}
                className="inline-block bg-[#A1410F] hover:bg-[#3D2A22] text-white px-5 py-2 rounded-full text-sm transition duration-300 shadow-md"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && (
        <div className="text-center mt-10" data-aos="fade-up">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#3D2A22] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#A1410F] transition duration-300"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
