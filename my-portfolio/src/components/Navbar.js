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
    <nav className="bg-gradient-to-r from-blue-900 to-gray-800 py-4 fixed w-full z-10 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 transition-all duration-300 shadow-md">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Name and Badge */}
        <div className="flex flex-col items-center">
          <a
            href="/"
            onClick={scrollToTop}
            className="text-white text-3xl font-semibold md:text-4xl hover:text-gray-200 transition duration-300 cursor-pointer"
          >
            Eric Stevens Jr.
          </a>

          <img
            src={cib}
            alt="Combat Infantry Badge"
            className="w-20 md:w-32 h-auto mt-2"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar Navigation for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full bg-gradient-to-r from-blue-900 to-gray-800 p-6 z-20 md:hidden transform transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button onClick={toggleMenu} className="text-white text-3xl mb-8 focus:outline-none">
            <FaTimes />
          </button>
          <ul className="space-y-6">
            <li>
              <a
                href="/"
                onClick={() => {
                  scrollToTop();
                  toggleMenu();
                }}
                className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <HashLink
                to="/#about"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-300 hover:text-white transition duration-300"
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
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={toggleMenu}
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="/blog" className="text-gray-300 hover:text-white transition duration-300" onClick={toggleMenu}>
                Blog
              </HashLink>
            </li>
            <li>
              <HashLink to="/affiliations" className="text-gray-300 hover:text-white transition duration-300" onClick={toggleMenu}>
                Affiliations
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-lg">
            <li>
              <a
                href="/"
                onClick={scrollToTop}
                className="text-gray-200 hover:text-white transition duration-300 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <HashLink
                to="/#about"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-200 hover:text-white transition duration-300"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#projects"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="/blog" className="text-gray-200 hover:text-white transition duration-300">
                Blog
              </HashLink>
            </li>
            <li>
              <HashLink to="/affiliations" className="text-gray-200 hover:text-white transition duration-300">
                Affiliations
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-gray-200 hover:text-white transition duration-300"
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
