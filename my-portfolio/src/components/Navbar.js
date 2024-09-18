// Navbar.js
import ThemeToggle from './ThemeToggle';
import cib from '../assets/cib.png';

function Navbar() {
  return (
    <nav className="bg-gray-800 py-2 fixed w-full z-10 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Name and Badge */}
        <div className="flex flex-col items-center">
          <h1 className="text-white text-2xl font-bold">
            Eric Stevens Jr.
          </h1>
          <img
            src={cib}
            alt="Combat Infantry Badge"
            className="w-32 h-auto mt-1"
          />
        </div>
        {/* Navigation Links and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
