// Footer.js
import UNF from '../assets/UNFlogo.png'
import SJR from '../assets/SJRState.jpg'
import FourID from '../assets/4IDlogo.png';
import FirstCAV from '../assets/1stCavlogo.png';

function Footer() {
  return (
    <footer className="bg-[#4B9CD3] text-white py-6">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Left Side: Logos */}
        <div className="flex items-center space-x-4">
          <img src={UNF} alt="University of North Florida Official Logo" className="h-24 w-auto" />
          <img src={SJR} alt="St. Johns River State College Official Logo" className="h-24 w-auto" />
        </div>
        {/* Center: Footer Text */}
        <div className="text-center flex-grow\">
          <p>© {new Date().getFullYear()} Eric Stevens Jr.</p>
        </div>
        {/* Right Side: Additional Content */}
        <div className="flex items-center space-x-4">
          {/* Add any additional content here */}
        </div>
        {/* Right Side: Army Division Logos */}
        <div className="w-1/3 flex justify-end space-x-4">
          <img src={FourID} alt="4th Infantry Division Logo" className="h-24 w-auto" />
          <img src={FirstCAV} alt="1st Cavalry Divsion Logo" className="h-24 w-auto" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
