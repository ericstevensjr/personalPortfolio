import usaFlag from "../assets/usaFlag.png";
import flFlag from "../assets/flFlag.png";
import mugshot from "../assets/beautiful.JPG"; // Add your photo here

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center my-16">
      {/* Add your photo here */}
      <img
        src={mugshot}
        alt="A Photo of Eric Stevens Jr."
        className="w-72 h-auto mb-6 border-4 border-gray-300 shadow-lg" // No rounding, subtle border and shadow
      />

      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Hello, I'm Eric Stevens
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

      {/* Flags Section */}
      <div className="flex flex-col md:flex-row items-center mt-6">
        <img
          src={usaFlag}
          alt="United States Flag"
          className="w-48 h-28 mb-4 md:mb-0 md:mr-4"
        />
        <img
          src={flFlag}
          alt="Florida State Flag"
          className="w-48 h-28"
        />
      </div>
    </section>
  );
}

export default HeroSection;
