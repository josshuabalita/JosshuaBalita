import React from 'react';
import { Link } from 'react-scroll';
import jb from '../images/JB.jpg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 p-4 z-20 backdrop-blur-sm font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={1000} className="cursor-pointer">
          <img src={jb} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Navigation Links (Always visible and responsive) */}
        <div className="flex space-x-8 font-heading">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="relative text-white text-lg cursor-pointer after:block after:h-0.5 after:w-full after:bg-orange-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
          >
            ABOUT
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="relative text-white text-lg cursor-pointer after:block after:h-0.5 after:w-full after:bg-orange-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
          >
            SKILLS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="relative text-white text-lg cursor-pointer after:block after:h-0.5 after:w-full after:bg-orange-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
