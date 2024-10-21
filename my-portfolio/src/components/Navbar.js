import { HashLink } from 'react-router-hash-link';
import ThemeToggle from './ThemeToggle';
import cib from '../assets/cib.png';

function Navbar() {
  return (
    <nav className="bg-gray-800 py-2 fixed w-full z-10 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Name and Badge always stacked vertically */}
        <div className="flex flex-col items-center">
          <HashLink to="/" className="text-white text-3xl font-bold md:text-4xl hover:text-gray-300 transition">
            Eric Stevens Jr.
          </HashLink>
          <img
            src={cib}
            alt="Combat Infantry Badge"
            className="w-24 md:w-40 h-auto mt-1"
          />
        </div>

        {/* Navigation Links and Theme Toggle */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <HashLink
                to="/#about"
                smooth
                className="text-gray-300 hover:text-white transition"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#projects"
                smooth
                className="text-gray-300 hover:text-white transition"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/blog"
                className="text-gray-300 hover:text-white transition"
              >
                Blog
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/affiliations"
                className="text-gray-300 hover:text-white transition"
              >
                Affiliations
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth
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
