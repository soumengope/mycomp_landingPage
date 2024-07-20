"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md flex container w-10/12 justify-center mt-4 rounded-lg absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-0">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left section: Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Middle section: Nav links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" passHref>
            <span className="text-gray-800 hover:text-gray-600 cursor-pointer">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-gray-800 hover:text-gray-600 cursor-pointer">About</span>
          </Link>
          <Link href="/services" passHref>
            <span className="text-gray-800 hover:text-gray-600 cursor-pointer">Services</span>
          </Link>
          <Link href="/portfolio" passHref>
            <span className="text-gray-800 hover:text-gray-600 cursor-pointer">Portfolio</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-gray-800 hover:text-gray-600 cursor-pointer">Contact</span>
          </Link>
        </div>

        {/* Right section: Email and phone number */}
        <div className="hidden md:flex flex-row gap-3 items-end">
          <span className="text-gray-800">email@example.com</span>
          <span className="text-gray-800">+123 456 7890</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" passHref>
              <span className="text-gray-800 hover:text-gray-600 block py-2 cursor-pointer">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-gray-800 hover:text-gray-600 block py-2 cursor-pointer">About</span>
            </Link>
            <Link href="/services" passHref>
              <span className="text-gray-800 hover:text-gray-600 block py-2 cursor-pointer">Services</span>
            </Link>
            <Link href="/portfolio" passHref>
              <span className="text-gray-800 hover:text-gray-600 block py-2 cursor-pointer">Portfolio</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="text-gray-800 hover:text-gray-600 block py-2 cursor-pointer">Contact</span>
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3 border-t border-gray-200">
            <div className="flex flex-col">
              <span className="text-gray-800">email@example.com</span>
              <span className="text-gray-800">+123 456 7890</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
