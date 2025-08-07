import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bathmath from "./Product/Bathmath";
import Cushion from "./Product/Cushion";
import Doormate from "./Product/Doormate";
import Rug from "./Product/Rug";
import Jute from "./Product/Jute";
import Throw from "./Product/Throw";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Dari from "./Product/Dari";
import Carpet from "./Product/Carpet";
import Sofa from "./Product/Sofa";
import AnimatedCursor from "./components/AnimatedCursor";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatedCursor />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/bathmat" element={<Bathmath />} />
          <Route path="/products/cushion" element={<Cushion />} />
          <Route path="/products/rug" element={<Rug />} />
          <Route path="/products/jute-specialist" element={<Jute />} />
          <Route path="/products/throw" element={<Throw />} />
          <Route path="/products/hand-crafted-doormat" element={<Doormate />} />
          <Route path="/products/dari" element={<Dari />} />
          <Route path="/products/sofa" element={<Sofa />} />
          <Route path="/products/carpet" element={<Carpet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
