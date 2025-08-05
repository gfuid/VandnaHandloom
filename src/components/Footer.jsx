import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#E5D9CC] text-[#D87C53] py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">About Us</h2>
          <p className="text-sm">
            We are passionate about handcrafted home products made with love and sustainability.
            Explore eco-friendly jute, rugs, dari, and more – all under one roof.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">Our Products</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products/jute-specialist" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">JUTE SPECIALIST</Link></li>
            <li><Link to="/products/hand-crafted-doormat" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">HAND CRAFTED DOORMAT</Link></li>
            <li><Link to="/products/dari" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">DARI</Link></li>
            <li><Link to="/products/throw" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">THROW</Link></li>
            <li><Link to="/products/rug" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">RUG</Link></li>
            <li><Link to="/products/carpet" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">CARPET</Link></li>
            <li><Link to="/products/bathmat" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">BATHING</Link></li>
            <li><Link to="/products/sofa" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">SOFA PANEL</Link></li>
            <li><Link to="/products/cushion" className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded">CUSHION</Link></li>

          
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:bg-[#D8C9B8] block w-fit px-1 rounded">Home</Link></li>
            <li><Link to="/about" className="hover:bg-[#D8C9B8] block w-fit px-1 rounded">About Us</Link></li>
            <li><Link to="/contact" className="hover:bg-[#D8C9B8] block w-fit px-1 rounded">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>info@handloom.in</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-[#A1410F]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#A1410F]" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-[#D8C9B8] pt-4 text-center text-sm">
        © {new Date().getFullYear()} Handloom Business. All rights reserved.
      </div>
    </footer>
  );
}
