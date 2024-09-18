// Navbar.js
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 dark:bg-gray-900 transition">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Eric Stevens</h1>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
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
