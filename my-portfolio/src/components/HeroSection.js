// src/components/HeroSection.js
function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center my-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          Hi, I'm Eric Stevens
        </h1>
        <p className="text-xl mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          A Software Engineer specializing in custom business software solutions.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700
                     dark:text-gray-300 dark:hover:bg-blue-600 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </section>
    );
  }
  
  export default HeroSection;
  