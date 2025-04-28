"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { companyInfo } from "@/lib/data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-green-800">
            {companyInfo.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#products"
              className="text-gray-700 hover:text-amber-500 font-medium"
            >
              Products
            </Link>
            <Link
              href="#story"
              className="text-gray-700 hover:text-amber-500 font-medium"
            >
              Our Story
            </Link>
            <Link
              href="#why-choose-us"
              className="text-gray-700 hover:text-amber-500 font-medium"
            >
              Why Choose Us
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-amber-500 font-medium"
            >
              Contact
            </Link>

            <Button>Order Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="#products"
                className="text-gray-700 hover:text-amber-500 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#story"
                className="text-gray-700 hover:text-amber-500 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="#why-choose-us"
                className="text-gray-700 hover:text-amber-500 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-amber-500 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Button className="w-full">Order Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
