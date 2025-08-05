import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Leaf, Droplet, Recycle } from 'lucide-react';

export function Sustainability() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "Natural Materials",
      desc: "We use jute, cotton, and other biodegradable fibers, sourced ethically from local farms.",
      icon: <Leaf className="text-[#A1410F] w-10 h-10 mb-4" />,
    },
    {
      title: "Low Impact Dyes",
      desc: "Our dyes are plant-based and safe for the environment and skin.",
      icon: <Droplet className="text-[#A1410F] w-10 h-10 mb-4" />,
    },
    {
      title: "Zero Waste",
      desc: "We minimize waste by repurposing fabric scraps into new products.",
      icon: <Recycle className="text-[#A1410F] w-10 h-10 mb-4" />,
    }
  ];

  return (
    <section className="bg-[#FAF5EF] py-16 px-4 sm:px-8 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3D2A22] mb-6"
          data-aos="fade-up"
        >
          Our Sustainability Promise
        </h2>
        <p
          className="text-[#5A3B2E] max-w-2xl mx-auto mb-12 text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Sustainability isn't just a buzzword for us — it's woven into every product. Here's how we make a difference:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-[#E4D5C4]"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              {item.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-[#3D2A22] mb-2">{item.title}</h3>
              <p className="text-[#5A3B2E] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
