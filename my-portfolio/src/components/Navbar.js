import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import ThemeToggle from './ThemeToggle';
import cib from '../assets/cib.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-gray-800 py-2 fixed w-full z-10 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 flex flex-row justify-between items-center">
        {/* Name and Badge */}
        <div className="flex flex-col items-center">
          <a href="/" onClick={scrollToTop} className="text-white text-3xl font-bold md:text-4xl hover:text-gray-300 transition cursor-pointer">
            Eric Stevens Jr.
          </a>

          <img
            src={cib}
            alt="Combat Infantry Badge"
            className="w-24 md:w-40 h-auto mt-2"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar Navigation for Mobile */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-full bg-gray-800 p-8 flex flex-col items-start z-20 md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl mb-8">
              <FaTimes />
            </button>
            <ul className="space-y-6">
              <li>
                <a href="/" onClick={() => { scrollToTop(); toggleMenu(); }} className="text-gray-300 hover:text-white transition cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <HashLink
                  to="/#about"
                  smooth
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="text-gray-300 hover:text-white transition"
                  onClick={toggleMenu}
                >
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#projects"
                  smooth
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="text-gray-300 hover:text-white transition"
                  onClick={toggleMenu}
                >
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink to="/blog" className="text-gray-300 hover:text-white transition" onClick={toggleMenu}>
                  Blog
                </HashLink>
              </li>
              <li>
                <HashLink to="/affiliations" className="text-gray-300 hover:text-white transition" onClick={toggleMenu}>
                  Affiliations
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#contact"
                  smooth
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="text-gray-300 hover:text-white transition"
                  onClick={toggleMenu}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        )}

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <ul className="flex flex-row space-x-6">
            <li>
              <a
                href="/"
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white transition cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <HashLink
                to="/#about"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-300 hover:text-white transition"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#projects"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-300 hover:text-white transition"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="/blog" className="text-gray-300 hover:text-white transition">
                Blog
              </HashLink>
            </li>
            <li>
              <HashLink to="/affiliations" className="text-gray-300 hover:text-white transition">
                Affiliations
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </HashLink>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
