import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-4 md:px-8">
        <p>© {new Date().getFullYear()} Eric Stevens Jr.</p>
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

