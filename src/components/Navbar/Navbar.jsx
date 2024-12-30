import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container py-5 flex items-center justify-between">
        {/* Logo section */}
        <div>
          <img src={Logo} alt="Logo" className="w-48" />
        </div>

        {/* Navlinks section */}
        <div className="hidden md:flex items-center gap-10 md:text-base text-sm">
          <ul className="flex items-center gap-10">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Custome Stories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            className="text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Button section */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            ACCOUNT
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 mt-4 px-6">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Custome Stories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
