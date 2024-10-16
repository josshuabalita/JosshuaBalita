import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import jb from '../images/JB.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 p-4 z-20 backdrop-blur-sm font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth duration={1000} className="cursor-pointer">
          <img src={jb} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Hamburger Icon (visible on small screens) */}
        <button className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 font-heading absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-90 p-4 md:p-0`}
        >
          {['about', 'projects', 'skills', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={1000}
              className="relative text-white text-lg cursor-pointer after:block after:h-0.5 after:w-full after:bg-orange-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
              onClick={() => setIsOpen(false)}
            >
              {section.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;