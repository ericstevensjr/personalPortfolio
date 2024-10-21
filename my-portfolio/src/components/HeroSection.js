import usaFlag from "../assets/usaFlag.png";
import flFlag from "../assets/flFlag.png";
import mugshot from "../assets/beautiful.JPG"; // Add your photo here
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center my-16">
      {/* Add your photo here */}
      <img
        src={mugshot}
        alt="Eric Stevens Jr." // Ensure this alt text is meaningful
        className="w-72 h-auto mb-6 border-4 border-gray-300 shadow-lg rounded-full" // Added "rounded-full" for a circular shape
        />

      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Hello, I'm Eric Stevens Jr.
      </h1>
      <p className="text-xl mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        A United States Army Combat Infantryman turned Software Engineer and Businessman.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700
                   dark:text-gray-300 dark:hover:bg-blue-600 transition-colors duration-300"
      >
        Get in Touch
      </a>

      <Link to="/blog" className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 dark:text-gray-300 dark:hover:bg-green-600 transition-colors duration-300">
        Visit My Blog
      </Link>


      {/* Flags Section */}
      <div className="flex flex-col md:flex-row items-center mt-6">
        <img
          src={usaFlag}
          alt="United States Flag" // This is fine as it describes the content
          className="w-48 h-28 mb-4 md:mb-0 md:mr-4 rounded-md" // Added "rounded-md" for subtle rounding
          />
        <img
          src={flFlag}
          alt="Florida State Flag" // Ensure this describes the content properly
          className="w-48 h-28 rounded-md" // Added "rounded-md" for subtle rounding
          />
      </div>
    </section>
  );
}

export default HeroSection;
