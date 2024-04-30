import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/rsi-logo-transparent-150x150.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <div className="hidden md:flex flex-grow justify-end items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/academics">Academics</NavLink>
            <NavLink to="/students">Student's Corner</NavLink>
            <NavLink to="/faculties">Faculties</NavLink>
            <NavLink to="/disclosure">Mandatory Disclosure</NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLinkMobile to="/">Home</NavLinkMobile>
          <NavLinkMobile to="/about">About Us</NavLinkMobile>
          <NavLinkMobile to="/academics">Academics</NavLinkMobile>
          <NavLinkMobile to="/students">Student's Corner</NavLinkMobile>
          <NavLinkMobile to="/faculties">Faculties</NavLinkMobile>
          <NavLinkMobile to="/disclosure">Mandatory Disclosure</NavLinkMobile>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, to }) => {
  return (
    <Link to={to} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </Link>
  );
};

const NavLinkMobile = ({ children, to }) => {
  return (
    <Link to={to} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
      {children}
    </Link>
  );
};

export default Navbar;
