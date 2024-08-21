import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="container mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo or Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-white text-2xl font-bold">Sandy Saputra</h1>
          <p className="text-gray-400 mt-2">Frontend Developer as JS Framework</p>
        </div>

        {/* Middle Section: Social Media Icons */}
        <div className="mb-4  md:mb-0 flex space-x-6">
          <a href="https://www.linkedin.com/in/sndysptra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/sandysptra09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Right Section: Contact Information */}
        <div className="text-center md:text-right mt-6 md:mt-0">
          <p className="text-gray-400">Email: <a href="mailto:sandisaputra2332@gmail.com" className="hover:text-white transition">sandisaputra2332@gmail.com</a></p>
          <p className="text-gray-400">Phone: <a href="tel:+62812224351444" className="hover:text-white transition">+6281 222 435 1444</a></p>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sandy Saputra. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
