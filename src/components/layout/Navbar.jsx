"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { companyInfo } from "@/lib/data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = [
        "banner",
        "story",
        "products",
        "why-choose-us",
        "purchase-locations",
        "contact",
      ];
      const navbarHeight = 100;
      const threshold = 200; // Distance from top to consider a section active

      let foundActiveSection = "banner"; // Default to banner

      // Check if we're at the very top
      if (window.scrollY < 100) {
        foundActiveSection = "banner";
      } else {
        // Find the section that's most visible in the viewport
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const scrollPosition = window.scrollY + navbarHeight;

            if (
              scrollPosition >= elementTop - threshold &&
              scrollPosition < elementTop + element.offsetHeight - threshold
            ) {
              foundActiveSection = sectionId;
            }
          }
        }
      }

      setActiveSection(foundActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Update active section immediately for better UX
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
        : "bg-white/10 backdrop-blur-sm py-3"
    }
  `;

  const logoClasses = `
    transition-all duration-300
    ${isScrolled ? "h-12" : "h-14"}
  `;

  const getNavItemClasses = (sectionId) => {
    const isActive = activeSection === sectionId;
    const baseClasses =
      "font-medium transition-all duration-300 relative focus:outline-none focus:ring-0 outline-none";

    if (isScrolled) {
      return `${baseClasses} ${
        isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
      }`;
    } else {
      return `${baseClasses} ${
        isActive ? "text-amber-300" : "text-white hover:text-amber-300"
      } drop-shadow-sm`;
    }
  };

  const getActiveIndicator = (sectionId) => {
    if (activeSection !== sectionId) return null;

    return (
      <div
        className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 ${
          isScrolled ? "bg-amber-600" : "bg-amber-300"
        }`}
      />
    );
  };

  const getMobileNavItemClasses = (sectionId) => {
    const isActive = activeSection === sectionId;
    const baseClasses =
      "block w-full text-left px-3 py-2 rounded-md transition-all duration-200 relative focus:outline-none focus:ring-0 outline-none";

    if (isScrolled) {
      return `${baseClasses} ${
        isActive
          ? "text-amber-600 bg-amber-50"
          : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
      }`;
    } else {
      return `${baseClasses} ${
        isActive
          ? "text-amber-300 bg-white/10"
          : "text-white hover:text-amber-300 hover:bg-white/10"
      } drop-shadow-sm`;
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link
            href="#banner"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-0 outline-none"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("banner");
            }}
          >
            <div className="relative">
              <Image
                src="/sajith-logo.png"
                alt="Sajith Rice Mill Logo"
                width={56}
                height={56}
                className={`${logoClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold transition-all duration-300 ${
                  isScrolled ? "text-green-800" : "text-white drop-shadow-md"
                }`}
              >
                {companyInfo.name}
              </span>
              <span
                className={`text-xs transition-all duration-300 ${
                  isScrolled ? "text-amber-600" : "text-amber-200"
                }`}
              >
                Premium Quality Rice
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              type="button"
              onClick={() => scrollToSection("story")}
              className={getNavItemClasses("story")}
            >
              Our Story
              {getActiveIndicator("story")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className={getNavItemClasses("products")}
            >
              Products
              {getActiveIndicator("products")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("why-choose-us")}
              className={getNavItemClasses("why-choose-us")}
            >
              Why Choose Us
              {getActiveIndicator("why-choose-us")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("purchase-locations")}
              className={getNavItemClasses("purchase-locations")}
            >
              Where to Buy
              {getActiveIndicator("purchase-locations")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={getNavItemClasses("contact")}
            >
              Contact
              {getActiveIndicator("contact")}
            </button>

            <Button
              variant="primary"
              size="md"
              className="shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-0"
              onClick={() => scrollToSection("contact")}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-0 outline-none ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
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
        <div
          className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }
        `}
        >
          <div
            className={`
            py-4 border-t space-y-4
            ${isScrolled ? "border-gray-200" : "border-white/20"}
          `}
          >
            <button
              type="button"
              onClick={() => scrollToSection("story")}
              className={getMobileNavItemClasses("story")}
            >
              Our Story
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className={getMobileNavItemClasses("products")}
            >
              Products
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("why-choose-us")}
              className={getMobileNavItemClasses("why-choose-us")}
            >
              Why Choose Us
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("purchase-locations")}
              className={getMobileNavItemClasses("purchase-locations")}
            >
              Where to Buy
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={getMobileNavItemClasses("contact")}
            >
              Contact
            </button>

            <div className="pt-2">
              <Button
                variant="primary"
                className="w-full shadow-lg focus:outline-none focus:ring-0"
                onClick={() => scrollToSection("contact")}
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
