"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${scrolled
        ? "bg-white/95 dark:bg-dark/95 shadow-lg backdrop-blur-md"
        : "bg-white/80 dark:bg-dark/80 backdrop-blur-md"
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
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
            )}

            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-white hover:bg-blue-600 rounded-full text-sm font-medium transition-all transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile flex container for toggle + menu button */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Mobile Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 mr-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
            )}

            {/* Mobile menu button */}
            <div className="-mr-2 flex">
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none"
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
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-card border-b border-slate-200 dark:border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
