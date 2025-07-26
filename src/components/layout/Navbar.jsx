"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Button from "../ui/Button";
import { companyInfo } from "@/lib/data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Check if we're on the blog page
  const isBlogPage = pathname?.startsWith("/blog");

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enhanced scroll detection with throttling and hide/show functionality
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Throttle scroll updates
      scrollTimeoutRef.current = setTimeout(() => {
        // Update scroll state
        setIsScrolled(currentScrollY > 10);

        // Hide/show navbar based on scroll direction (but always show on top)
        if (currentScrollY < 100) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
          // Scrolling down - hide navbar
          setIsVisible(false);
          setIsMobileMenuOpen(false); // Close mobile menu when hiding
        } else {
          // Scrolling up - show navbar
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);

        // Only track sections on homepage
        if (!isBlogPage) {
          const sections = [
            "banner",
            "story",
            "products",
            "why-choose-us",
            "purchase-locations",
            "contact",
          ];
          const navbarHeight = 100;
          const threshold = 150;

          let foundActiveSection = "banner";

          if (currentScrollY < 100) {
            foundActiveSection = "banner";
          } else {
            for (const sectionId of sections) {
              const element = document.getElementById(sectionId);
              if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + currentScrollY;
                const scrollPosition = currentScrollY + navbarHeight;

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
        }
      }, 10); // 10ms throttle
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lastScrollY, isBlogPage, isMounted]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Enhanced scroll to section with better easing
  const scrollToSection = useCallback(
    (sectionId) => {
      // If we're on blog page, navigate to home first
      if (isBlogPage) {
        router.push(`/#${sectionId}`);
        return;
      }

      // Update active section immediately for better UX
      setActiveSection(sectionId);

      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;

        // Smooth scroll with better easing
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    },
    [isBlogPage, router]
  );

  const handleHomeClick = useCallback(() => {
    if (isBlogPage) {
      router.push("/");
    } else {
      scrollToSection("banner");
    }
    setIsMobileMenuOpen(false);
  }, [isBlogPage, router, scrollToSection]);

  const handleBlogClick = useCallback(() => {
    router.push("/blog");
    setIsMobileMenuOpen(false);
  }, [router]);

  // Enhanced navbar classes with hide/show animation
  const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
    ${
      isScrolled || isBlogPage
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-2"
        : "bg-white/10 backdrop-blur-sm py-3"
    }
  `;

  const logoClasses = `
    transition-all duration-300 ease-out object-contain
    ${isScrolled || isBlogPage ? "h-10 sm:h-12" : "h-12 sm:h-14"}
  `;

  // Enhanced navigation item styling
  const getNavItemClasses = (sectionId) => {
    const isActive = activeSection === sectionId;
    const baseClasses =
      "font-medium transition-all duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm px-1 py-1";

    if (isScrolled || isBlogPage) {
      return `${baseClasses} ${
        isActive
          ? "text-amber-600 font-semibold"
          : "text-gray-700 hover:text-amber-600 hover:font-medium"
      }`;
    } else {
      return `${baseClasses} ${
        isActive
          ? "text-amber-300 font-semibold"
          : "text-white hover:text-amber-300 hover:font-medium"
      } drop-shadow-sm`;
    }
  };

  const getBlogNavClasses = () => {
    const baseClasses =
      "font-medium transition-all duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm px-1 py-1";

    if (isScrolled || isBlogPage) {
      return `${baseClasses} ${
        isBlogPage
          ? "text-amber-600 font-semibold"
          : "text-gray-700 hover:text-amber-600 hover:font-medium"
      }`;
    } else {
      return `${baseClasses} ${
        isBlogPage
          ? "text-amber-300 font-semibold"
          : "text-white hover:text-amber-300 hover:font-medium"
      } drop-shadow-sm`;
    }
  };

  // Enhanced active indicator with animation
  const getActiveIndicator = (sectionId) => {
    if (activeSection !== sectionId || isBlogPage) return null;

    return (
      <div
        className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 transform origin-left animate-in slide-in-from-left ${
          isScrolled ? "bg-amber-600" : "bg-amber-300"
        }`}
      />
    );
  };

  const getBlogActiveIndicator = () => {
    if (!isBlogPage) return null;

    return (
      <div
        className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 transform origin-left animate-in slide-in-from-left ${
          isScrolled || isBlogPage ? "bg-amber-600" : "bg-amber-300"
        }`}
      />
    );
  };

  // Enhanced mobile navigation styles
  const getMobileNavItemClasses = (sectionId) => {
    const isActive = activeSection === sectionId;
    const baseClasses =
      "block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 font-medium";

    if (isScrolled || isBlogPage) {
      return `${baseClasses} ${
        isActive
          ? "text-amber-600 bg-amber-50 border-l-4 border-amber-600"
          : "text-gray-700 hover:text-amber-600 hover:bg-gray-50 hover:translate-x-1"
      }`;
    } else {
      return `${baseClasses} ${
        isActive
          ? "text-amber-300 bg-white/10 border-l-4 border-amber-300"
          : "text-white hover:text-amber-300 hover:bg-white/10 hover:translate-x-1"
      } drop-shadow-sm`;
    }
  };

  const getMobileBlogClasses = () => {
    const baseClasses =
      "block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 font-medium";

    if (isScrolled || isBlogPage) {
      return `${baseClasses} ${
        isBlogPage
          ? "text-amber-600 bg-amber-50 border-l-4 border-amber-600"
          : "text-gray-700 hover:text-amber-600 hover:bg-gray-50 hover:translate-x-1"
      }`;
    } else {
      return `${baseClasses} ${
        isBlogPage
          ? "text-amber-300 bg-white/10 border-l-4 border-amber-300"
          : "text-white hover:text-amber-300 hover:bg-white/10 hover:translate-x-1"
      } drop-shadow-sm`;
    }
  };

  // Don't render until mounted (prevents hydration issues)
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="hidden lg:flex space-x-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-4 bg-gray-200 rounded animate-pulse"
                ></div>
              ))}
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={navRef}
      className={navbarClasses}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Enhanced Logo and Company Name */}
          <button
            onClick={handleHomeClick}
            className="flex items-center space-x-2 sm:space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-lg p-1"
            aria-label="Go to homepage"
          >
            <div className="relative">
              <Image
                src="/sajith-logo.png"
                alt="Sajith Rice Mill Logo"
                width={56}
                height={56}
                className={`${logoClasses} w-auto transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110`}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg sm:text-xl font-bold transition-all duration-300 leading-tight ${
                  isScrolled || isBlogPage
                    ? "text-green-800"
                    : "text-white drop-shadow-md"
                }`}
              >
                {companyInfo.name}
              </span>
              <span
                className={`text-xs sm:text-sm transition-all duration-300 leading-tight ${
                  isScrolled || isBlogPage ? "text-amber-600" : "text-amber-200"
                }`}
              >
                Premium Quality Rice
              </span>
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              type="button"
              onClick={() => scrollToSection("story")}
              className={getNavItemClasses("story")}
              aria-current={activeSection === "story" ? "page" : undefined}
            >
              Our Story
              {getActiveIndicator("story")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className={getNavItemClasses("products")}
              aria-current={activeSection === "products" ? "page" : undefined}
            >
              Products
              {getActiveIndicator("products")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("why-choose-us")}
              className={getNavItemClasses("why-choose-us")}
              aria-current={
                activeSection === "why-choose-us" ? "page" : undefined
              }
            >
              Why Choose Us
              {getActiveIndicator("why-choose-us")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("purchase-locations")}
              className={getNavItemClasses("purchase-locations")}
              aria-current={
                activeSection === "purchase-locations" ? "page" : undefined
              }
            >
              Where to Buy
              {getActiveIndicator("purchase-locations")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={getNavItemClasses("contact")}
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              Contact
              {getActiveIndicator("contact")}
            </button>
            <button
              type="button"
              onClick={handleBlogClick}
              className={getBlogNavClasses()}
              aria-current={isBlogPage ? "page" : undefined}
            >
              Blog
              {getBlogActiveIndicator()}
            </button>
            <Button
              variant="primary"
              size="md"
              className="shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Order Now
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 hover:scale-110 ${
              isScrolled || isBlogPage
                ? "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                : "text-white hover:bg-white/20 active:bg-white/30"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
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

        {/* Enhanced Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 mt-4 mb-4"
              : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div
            className={`py-4 border-t space-y-2 ${
              isScrolled || isBlogPage ? "border-gray-200" : "border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => scrollToSection("story")}
              className={getMobileNavItemClasses("story")}
              aria-current={activeSection === "story" ? "page" : undefined}
            >
              Our Story
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className={getMobileNavItemClasses("products")}
              aria-current={activeSection === "products" ? "page" : undefined}
            >
              Products
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("why-choose-us")}
              className={getMobileNavItemClasses("why-choose-us")}
              aria-current={
                activeSection === "why-choose-us" ? "page" : undefined
              }
            >
              Why Choose Us
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("purchase-locations")}
              className={getMobileNavItemClasses("purchase-locations")}
              aria-current={
                activeSection === "purchase-locations" ? "page" : undefined
              }
            >
              Where to Buy
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={getMobileNavItemClasses("contact")}
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              Contact
            </button>
            <button
              type="button"
              onClick={handleBlogClick}
              className={getMobileBlogClasses()}
              aria-current={isBlogPage ? "page" : undefined}
            >
              Blog
            </button>
            <div className="pt-4">
              <Button
                variant="primary"
                className="w-full shadow-lg focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 hover:scale-105 transition-transform duration-200"
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
