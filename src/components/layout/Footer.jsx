"use client";

import React from "react";
import Link from "next/link";
import { companyInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to render the correct social icon based on platform name
  const getSocialIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return <Facebook size={18} className="text-white" />;
      case "instagram":
        return <Instagram size={18} className="text-white" />;
      case "twitter":
        return <Twitter size={18} className="text-white" />;

      default:
        return null;
    }
  };

  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-gray-300 mb-4">
              Premium quality rice directly from our fields to your table.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#products"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#story"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#why-choose-us"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-5 h-5 mr-2 opacity-75">
                  <Mail size={20} className="text-gray-300" />
                </div>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 mr-2 opacity-75">
                  <Phone size={20} className="text-gray-300" />
                </div>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-1 opacity-75">
                  <MapPin size={20} className="text-gray-300" />
                </div>
                <span className="text-gray-300">{companyInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              {Object.entries(companyInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  {getSocialIcon(platform)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
