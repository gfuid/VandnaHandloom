// Contact.jsx
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',     // Replace with your EmailJS service ID
      'your_template_id',    // Replace with your EmailJS template ID
      form.current,
      'your_public_key'      // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <div className="px-6 py-10 md:px-24 bg-white mt-[90px]">
      <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-down">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
          data-aos="fade-right"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name (required)"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email (required)"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-[#A1410F] text-white px-6 py-2 rounded-md hover:bg-[#823507]"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div
          className="bg-gray-100 p-6 rounded-md shadow-sm"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <p>6A Murthal HSIIDC, Industrial Estate, Near DCRUST University, Sonipat, Haryana-131027</p>

          <div className="mt-4">
            <h4 className="font-semibold">Phone</h4>
            <p>+91-9899652652</p>
            <p>+91-9899924313</p>
            <p>+91-9810024153</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Email</h4>
            <p>info@weavetexglobal.com</p>
            <p>infoweavetex@gmail.com</p>
            <p>weavetexglobalinds@gmail.com</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Website</h4>
            <a
              href="https://weavetexglobal.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://weavetexglobal.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
