"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Branding */}
        <div className="text-2xl font-bold">
          <a href="#hero" className="hover:text-blue-400">
            Jaydip Patel
          </a>
          <span className="text-sm block text-gray-400 font-light">Video Editor</span>
        </div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Hire Me
        </a>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                className="block hover:text-blue-400"
                onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-blue-400"
                onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-blue-400"
                onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
