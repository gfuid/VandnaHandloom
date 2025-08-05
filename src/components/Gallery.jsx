import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Use these 6 images
import jute from "../assets/jute.webp";
import doormate from "../assets/doormate.webp";
import dari11 from "../assets/dari11.webp";
import throws1 from "../assets/throws1.webp";
import rug2 from "../assets/rug2.webp";
import carpet from "../assets/carpet.webp";

export function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [
    { src: jute, alt: "Handwoven jute rug" },
    { src: doormate, alt: "Natural fiber doormat" },
    { src: dari11, alt: "Handloom dari pattern" },
    { src: throws1, alt: "Cotton throw blanket" },
    { src: rug2, alt: "Textured area rug" },
    { src: carpet, alt: "Handcrafted carpet detail" },
  ];

  return (
    <section className="bg-[#FAF5EF] py-16 px-4 sm:px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3D2A22] text-center mb-10"
          data-aos="fade-down"
        >
          Handloom In Action
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md"
              data-aos="zoom-in"
              data-aos-delay={(idx + 1) * 100}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
