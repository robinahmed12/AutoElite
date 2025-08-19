"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", delay: "100" },
    { name: "About", href: "/about", delay: "150" },
    { name: "Services", href: "/services", delay: "200" },
    { name: "Gallery", href: "/gallery", delay: "250" },
    { name: "Contact", href: "/contact", delay: "300" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cyan-400"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            data-aos="fade-down"
            onClick={() => setActiveLink("home")}
          >
            <span className="text-3xl font-bold">
              <span className="text-red-900">Auto</span>
              <span className="text-blue-600">Elite</span>
            </span>
            <span className="ml-2 text-xs bg-cyan-400 text-gray-900 px-2 py-1 rounded-full font-bold">
              AI Diagnostics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="flex group"
                  data-aos="fade-down"
                  data-aos-delay={item.delay}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 -mb-1 border-b-2 transition-all duration-300
                    ${
                      activeLink === item.name.toLowerCase()
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent group-hover:border-blue-600 text-white font-bold group-hover:text-blue-600"
                    }`}
                    onClick={() => setActiveLink(item.name.toLowerCase())}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className=" hidden lg:flex items-center space-x-4">
            <button
              className="px-6 py-2 rounded-full border bg-white border-gray-900 text-gray-900 
              hover:bg-gray-900 hover:text-white transition-all duration-300"
              data-aos="fade-down"
              data-aos-delay="350"
            >
              Sign in
            </button>
            <button
              className="px-6 py-2 rounded-full bg-red-500 text-white 
              hover:bg-red-600 transition-all duration-300 shadow-md
              hover:shadow-lg"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Book Service
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600 focus:outline-none"
              data-aos="fade-down"
              data-aos-delay="450"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
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
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === item.name.toLowerCase()
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-900 hover:bg-blue-50 hover:text-blue-600"
              }`}
              onClick={() => {
                setActiveLink(item.name.toLowerCase());
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 rounded-md border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
              Sign in
            </button>
            <button className="w-full px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300">
              Book Service
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}