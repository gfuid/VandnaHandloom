import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#E5D9CC] text-[#D87C53] py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">About Us</h2>
          <p className="text-sm leading-relaxed">
            We are passionate about handcrafted home products made with love and sustainability.
            Explore eco-friendly jute, rugs, dari, and more – all under one roof.
          </p>
        </div>

        {/* Our Products */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">Our Products</h2>
          <ul className="space-y-2 text-sm">
            {[
              ["jute-specialist", "JUTE SPECIALIST"],
              ["hand-crafted-doormat", "HAND CRAFTED DOORMAT"],
              ["dari", "DARI"],
              ["throw", "THROW"],
              ["rug", "RUG"],
              ["carpet", "CARPET"],
              ["bathmat", "BATHING"],
              ["sofa", "SOFA PANEL"],
              ["cushion", "CUSHION"],
            ].map(([path, label]) => (
              <li key={path}>
                <Link
                  to={`/products/${path}`}
                  className="hover:bg-[#D8C9B8] underline block w-fit px-1 rounded"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:bg-[#D8C9B8] block w-fit px-1 rounded">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:bg-[#D8C9B8] block w-fit px-1 rounded">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:bg-[#D8C9B8] block w-fit px-1 rounded">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#A1410F]">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-base" /> <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-base" /> <span>info@handloom.in</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-[#A1410F]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#A1410F]" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#D8C9B8] pt-4 text-center text-sm text-[#A1410F]">
        © {year} VandnaHandloom Global. All rights reserved.
      </div>
      <p>
        Designed & Developed by <a href="#" className="underline">Sagarpunia</a>
      </p>
    </footer>
  );
}
