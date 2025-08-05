import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../assets/jute.webp";

import {
  Leaf,
  Hammer,
  Handshake,
  ShieldCheck,
  PackageCheck,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable products crafted from natural fibers — kind to your home and the planet.",
  },
  {
    icon: Hammer,
    title: "Authentic Craftsmanship",
    description: "Expertly handwoven by artisans. No middlemen, just tradition and talent.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Approach",
    description: "We offer honest service and reliable quality with every order.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Quality",
    description: "Trusted by thousands of satisfied customers across the country.",
  },
  {
    icon: PackageCheck,
    title: "Empowering Local Communities",
    description: "We uplift artisans and small businesses through digital empowerment.",
  },
  {
    icon: Award,
    title: "Leaders in Jute Innovation",
    description: "Our signature jute collections set the benchmark in quality and design.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-20 text-gray-800">
      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-[110px]">
        <div data-aos="fade-right" className="space-y-4">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            Welcome to <strong>Vandna Handloom</strong> — where tradition meets modern living.
            We're an Indian-born brand on a mission to preserve timeless handloom artistry,
            while empowering local artisans and rural businesses in the digital age.
          </p>
          <p className="text-lg mb-4">
            From plush towels and bed linens to handwoven rugs and cushion covers,
            each product reflects craftsmanship, sustainability, and cultural legacy.
          </p>
          <p className="text-lg">
            Vandna Handloom isn’t just a brand — it's a movement toward conscious living,
            heritage preservation, and inclusive growth.
          </p>
        </div>

        <div data-aos="fade-left">
          <img
            src={aboutImage}
            alt="Artisan-crafted home products"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-24 text-center" data-aos="fade-up">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">Why Choose Us</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We bring authenticity, sustainability, and excellence to every product — 
          supporting local artisans and preserving cultural craftsmanship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {values.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 hover:bg-white rounded-xl shadow transition-all"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <Icon className="w-8 h-8 text-[#A1410F] mb-3" />
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
