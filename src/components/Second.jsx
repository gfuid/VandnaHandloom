import React, { useEffect } from "react";
import s4 from "../assets/jute.webp";
import s5 from "../assets/dari.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#A1410F] py-16 px-6 md:px-20 text-white overflow-hidden ">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div
          className="relative flex-shrink-0 overflow-hidden rounded-[30px] shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={s4}
            alt="Handloom"
            className="rounded-[30px] w-72 h-64 object-cover"
          />
          <img
            src={s5}
            alt="Decor"
            className="absolute -bottom-10 -left-10 rounded-[30px] w-44 h-36 object-cover border-4 border-[#A1410F] shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </div>

        {/* Text Section */}
        <div
          className="max-w-2xl ml-0 lg:ml-20"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            A Strong Presence in the <br /> International Market
          </h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Established in 1989, W.G.I. is a renowned integrated handloom rug
            manufacturer and exporter. We offer a wide variety of rugs and floor
            furnishing products crafted from premium fabrics, available in globally
            admired styles and designs. <br /><br />
            From our humble beginnings to becoming one of India’s early exporters
            of home furnishing products, our journey is a testament to unmatched
            quality, artistic finesse, and timeless tradition.
          </p>
          <button
            className="mt-4 px-6 py-2 border border-white hover:bg-white hover:text-[#A1410F] transition duration-300 text-sm tracking-wider"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Second;
