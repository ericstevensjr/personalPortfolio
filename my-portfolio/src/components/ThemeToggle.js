// ThemeToggle.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-blue-500" />
      )}
    </button>
  );
}

export default ThemeToggle;