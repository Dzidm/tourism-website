import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const linkClasses =
  "relative pb-1 transition-colors duration-200";

const underlineClasses =
  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-amber-900 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/listings" },
    // { name: "Publishing", path: "/publishing" },
    { name: "Teaching", path: "/teaching" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6 shadow-md relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-serif text-2xl sm:text-2xl md:text-3xl text-amber-900">
          Dzidzo Mpya
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm md:text-base text-amber-800">
          {links.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${linkClasses} ${underlineClasses} ${
                    isActive ? "text-amber-900 after:scale-x-100" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center text-amber-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-amber-800">
          {links.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${linkClasses} ${underlineClasses} ${
                    isActive ? "text-amber-900 after:scale-x-100" : ""
                  }`
                }
                onClick={() => setIsOpen(false)} // Close on click
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
