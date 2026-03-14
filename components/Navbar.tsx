"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 border-b border-slate-800 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 shadow-lg backdrop-blur-md"
          : "bg-dark/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <span className="text-2xl font-bold text-gradient">Supun.data</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-baseline space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-primary hover:bg-blue-600 rounded-full text-sm font-medium transition-all transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-primary font-bold block px-3 py-2 rounded-md text-base"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
