import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/vandna.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const products = [
  { label: "JUTE SPECIALIST", link: "/products/jute-specialist" },
  { label: "HAND CRAFTED DOORMAT", link: "/products/hand-crafted-doormat" },
  { label: "DARI", link: "/products/dari" },
  { label: "THROW", link: "/products/throw" },
  { label: "RUG", link: "/products/rug" },
  { label: "CARPET", link: "/products/carpet" },
  { label: "BATHING", link: "/products/bathmat" },
  { label: "SOFA PANEL", link: "/products/sofa" },
  { label: "CUSHION", link: "/products/cushion" },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileProductDropdown, setMobileProductDropdown] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#A1410F] shadow-md z-50 px-4 md:px-16 py-4">
      <div className="flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/">
          <div className="flex items-center space-x-4" data-aos="fade-right">
            <img src={logo} alt="Vandna Logo" className="h-16 w-16 object-cover rounded-full" />
            <div>
              <span className="text-white text-2xl md:text-3xl font-bold">Vandna Handloom</span>
              <p className="text-sm text-gray-200 font-medium">Exporter • Importer • Manufacturer</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white text-lg font-light">
          <Link to="/" className="hover:text-gray-300" data-aos="fade-down">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="cursor-pointer hover:text-gray-300" data-aos="fade-down">Product</span>
            {showDropdown && (
              <div className="absolute top-full left-0 w-56 mt-0 bg-[#A1410F] rounded-xl shadow-lg z-50">
                {products.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-2 text-sm uppercase font-semibold hover:bg-[#b68a73] border-b border-white last:border-0 transition duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-gray-300" data-aos="fade-down">About</Link>
          <Link to="/contact" className="hover:text-gray-300" data-aos="fade-down">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="md:hidden mt-4 space-y-2 bg-[#A1410F] text-white rounded-lg p-4">
          <Link to="/" className="block hover:text-gray-300">Home</Link>

          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setMobileProductDropdown(!mobileProductDropdown)}
            >
              <span>Product</span>
              <span>{mobileProductDropdown ? "▲" : "▼"}</span>
            </div>

            {mobileProductDropdown && (
              <div className="mt-2 pl-4 space-y-1">
                {products.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block text-sm uppercase hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="block hover:text-gray-300">About</Link>
          <Link to="/contact" className="block hover:text-gray-300">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
