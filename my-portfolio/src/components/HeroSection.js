import React, { useState } from "react";
import usaFlag from "../assets/usaFlag.png";
import flFlag from "../assets/flFlag.png";
import mugshot from "../assets/beautiful.JPG";
import militaryPhoto from "../assets/militaryPhoto.png";

function HeroSection() {
  // State should be defined here at the top of the function component
  const [isMilitaryPhoto, setIsMilitaryPhoto] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center text-center my-16">
      {/* Photo with Hover/Touch Effect */}
      <img
        src={isMilitaryPhoto ? militaryPhoto : mugshot}
        alt="Eric Stevens Jr."
        className="w-72 h-auto mb-6 border-4 border-gray-300 shadow-lg rounded-full cursor-pointer"
        onMouseEnter={() => setIsMilitaryPhoto(true)}
        onMouseLeave={() => setIsMilitaryPhoto(false)}
        onTouchStart={() => setIsMilitaryPhoto(!isMilitaryPhoto)}
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
      <a
        href="/blog"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700
                  dark:text-gray-300 dark:hover:bg-blue-600 transition-colors duration-300"
      >
        Check Out My Blog
      </a>

      {/* Flags Section */}
      <div className="flex flex-col md:flex-row items-center mt-6">
        <img
          src={usaFlag}
          alt="United States Flag"
          className="w-48 h-28 mb-4 md:mb-0 md:mr-4 rounded-md"
        />
        <img
          src={flFlag}
          alt="Florida State Flag"
          className="w-48 h-28 rounded-md"
        />
      </div>
    </section>
  );
}

export default HeroSection;
