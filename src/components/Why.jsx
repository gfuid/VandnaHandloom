import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import s2 from "../assets/dr2.webp";
import {
  Leaf,
  Hammer,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable products from natural materials.",
  },
  {
    icon: Hammer,
    title: "Authentic Craft",
    description: "Made by skilled artisans, no middlemen.",
  },
  {
    icon: Handshake,
    title: "Customer Focused",
    description: "Honest service, reliable quality, always.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description: "Tested and trusted by thousands of customers.",
  },
];

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center text-white overflow-auto"
      style={{ backgroundImage: `url(${s2})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
          Why Choose Us?
        </h2>
        <p
          className="max-w-xl mx-auto text-white/80 text-base mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          We bring authenticity, sustainability, and quality to every product—supporting local artisans and real stories.
        </p>

        {/* Features */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {values.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition text-left"
            >
              <Icon className="w-8 h-8 text-white mb-3" />
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-white/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
