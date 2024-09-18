import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Eric Stevens</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/ericstevensjr" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/ericstevensjr" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
