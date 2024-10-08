// Footer.js
import UNF from '../assets/UNFlogo.png';
import SJR from '../assets/SJRState.jpg';
import FourID from '../assets/4IDlogo.png';
import FirstCAV from '../assets/1stCavlogo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaTwitch } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#4B9CD3] text-white py-6 relative">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: University Logos */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img src={UNF} alt="University of North Florida Official Logo" className="h-24 w-auto" />
          <img src={SJR} alt="St. Johns River State College Official Logo" className="h-24 w-auto" />
        </div>

        {/* Center: Social Media Icons and Footer Text */}
        <div className="flex flex-col items-center text-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-2">
            <a href="https://www.facebook.com/profile.php?id=100000032112385" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a href="https://x.com/ericstevensjr" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/ericstevens.jr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/ericstevensjr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a href="https://github.com/ericstevensjr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a href="https://www.twitch.tv/ericstevensjr" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
              <FaTwitch className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
          </div>
          {/* Footer Text */}
          <p>© {new Date().getFullYear()} Eric Stevens Jr.</p>
        </div>

        {/* Right Side: Army Division Logos */}
        <div className="flex justify-end items-center space-x-4 mb-4 md:mb-0">
          <img src={FourID} alt="4th Infantry Division Logo" className="h-24 w-auto" />
          <img src={FirstCAV} alt="1st Cavalry Division Logo" className="h-24 w-auto" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
