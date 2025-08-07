import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [isMobile]);

  if (isMobile) return null; // ✅ Don't render on mobile

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="w-6 h-6 rounded-full border-2 border-[#A1410F]"></div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#D87C53]"></div>
      </motion.div>
    </>
  );
}
