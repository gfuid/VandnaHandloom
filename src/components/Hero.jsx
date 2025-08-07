import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import s1 from "../assets/jute.webp";
import s2 from "../assets/doormate.webp";
import s3 from "../assets/dari.webp";
import s4 from "../assets/towel1.webp";
import s5 from "../assets/carpet2.webp";

const slides = [
  {
    title: "Jute Collection",
    description: "Eco-friendly jute creations that redefine sustainable living.",
    buttonText: "EXPLORE JUTE",
    image: s1,
    link: "/products/jute-specialist", // ✅ Corrected
  },
  {
    title: "Eco Doormat",
    description: "Sustainable doormats crafted with care and durability.",
    buttonText: "VIEW RANGE",
    image: s2,
    link: "/products/hand-crafted-doormat",
  },
  {
    title: "Handwoven Dari",
    description: "Traditional handwoven dari for your floor’s finest look.",
    buttonText: "SHOP DARI",
    image: s3,
    link: "/products/dari",
  },
  {
    title: "Luxury BathMat",
    description: "Soft, absorbent and stylish – upgrade your bathroom today.",
    buttonText: "SHOP NOW",
    image: s4,
    link: "/products/bathmat", // ✅ Fixed from "bathing"
  },
  {
    title: "Rug Carpet",
    description: "Handwoven elegance that adds warmth to any room.",
    buttonText: "DISCOVER MORE",
    image: s5,
    link: "/products/rug",
  },
  
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images (animated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.image}
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${currentSlide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-16">
        <motion.div
          key={currentSlide.title}
          className="text-white p-6 md:p-10 rounded-lg max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {currentSlide.title}
          </h1>
          <p className="text-md md:text-lg mb-6">{currentSlide.description}</p>
          <Link to={currentSlide.link}>
  <button className="px-6 py-3 border border-white text-white hover:text-black transition-all duration-300 hover:bg-white rounded-full text-sm md:text-base">
    {currentSlide.buttonText}
  </button>
</Link>


        </motion.div>
      </div>
    </div>
  );
}
