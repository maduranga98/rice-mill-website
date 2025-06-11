"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-green-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {/* Company Info with Logo - Responsive */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 order-1">
            <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
              <div className="relative mb-3 sm:mb-4">
                <Image
                  src="/sajith-logo.png"
                  alt="Sajith Rice Mill Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {companyInfo.name}
                </h3>
                <p className="text-amber-200 text-xs sm:text-sm">
                  Premium Quality Rice
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-center lg:text-left text-sm sm:text-base">
              Premium quality rice directly from our fields to your table.
              Experience the authentic taste of traditional Sri Lankan rice
              varieties.
            </p>
          </div>

          {/* Quick Links - Responsive */}
          <div className="col-span-1 order-2 sm:order-2 lg:order-2">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <li>
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-left text-sm sm:text-base touch-manipulation"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-left text-sm sm:text-base touch-manipulation"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-choose-us")}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-left text-sm sm:text-base touch-manipulation"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("purchase-locations")}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-left text-sm sm:text-base touch-manipulation"
                >
                  Where to Buy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-left text-sm sm:text-base touch-manipulation"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info - Responsive */}
          <div className="col-span-1 order-3 sm:order-3 lg:order-3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white text-center sm:text-left">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center group justify-center sm:justify-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 opacity-75 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <Mail size={16} className="sm:w-5 sm:h-5 text-amber-300" />
                </div>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-xs sm:text-sm lg:text-base break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center group justify-center sm:justify-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 opacity-75 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <Phone size={16} className="sm:w-5 sm:h-5 text-amber-300" />
                </div>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start group justify-center sm:justify-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 opacity-75 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <MapPin size={16} className="sm:w-5 sm:h-5 text-amber-300" />
                </div>
                <span className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base text-center sm:text-left">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Responsive */}
        <div className="border-t border-green-800 pt-4 sm:pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              <span className="block sm:inline">
                &copy; {currentYear} {companyInfo.name}. All rights reserved.
              </span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline mt-1 sm:mt-0">
                Solutions by{" "}
                <a
                  href="https://www.lumoraventures.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 transition-colors duration-200 font-medium inline-flex items-center touch-manipulation"
                >
                  Lumora Ventures (PVT) Ltd
                  <ExternalLink
                    size={10}
                    className="sm:w-3 sm:h-3 ml-1 inline"
                  />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
