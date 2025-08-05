import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3D2A22] mb-6"
          data-aos="fade-up"
        >
          What Our Customers Say
        </h2>
        <p
          className="text-[#5A3B2E] max-w-2xl mx-auto mb-12 text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We are honored to be a part of homes around the world. Hear from those who love our handwoven creations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Anjali Sharma",
              feedback: "Absolutely stunning quality and packaging. Feels great to support handmade craftsmanship.",
              location: "New Delhi, India"
            },
            {
              name: "Michael Davis",
              feedback: "The rugs transformed our space! Soft, stylish, and eco-friendly.",
              location: "Austin, TX"
            },
            {
              name: "Priya Mehta",
              feedback: "Loved the natural tones. Delivery was quick and the product is beautiful.",
              location: "Mumbai, India"
            }
          ].map((review, i) => (
            <div
              key={i}
              className="bg-[#FAF5EF] p-6 rounded-xl border border-[#E4D5C4] shadow-sm text-left"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <p className="text-[#3D2A22] italic mb-4 text-sm sm:text-base">“{review.feedback}”</p>
              <h4 className="font-semibold text-[#3D2A22] text-sm sm:text-base">{review.name}</h4>
              <p className="text-sm text-[#5A3B2E]">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
