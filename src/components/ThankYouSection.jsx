import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ThankYouSection = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const options = [
    "I saw your handloom products in a craft exhibition",
    "Friends or family told me about your beautiful collection",
    "I found you through social media",
    "I discovered you on Google while searching for handmade textiles",
  ];

  const handleOptionClick = (option) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`You selected: "${option}"`);
    }, 1000); // simulate API
  };

  return (
    <section className="bg-[#F7F1E6] min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-16 text-[#3D2A22]">
      {/* Left Side */}
      <div className="max-w-lg mb-10 md:mb-0" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Thank you<br />for visiting us.
        </h1>
        <p className="text-lg">
          Before you leave, we’d love to know how you discovered our Handloom brand.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4 max-w-xl w-full" data-aos="fade-left">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="bg-[#E5D9CC] hover:bg-[#D8C9B8] transition text-left p-4 rounded-lg shadow-sm"
          >
            {option}
          </button>
        ))}
        {loading && (
          <div className="text-sm text-[#3D2A22] mt-4">
            <span className="text-[#D87C53] mr-2">●</span>Loading...
          </div>
        )}
      </div>
    </section>
  );
};

export default ThankYouSection;
