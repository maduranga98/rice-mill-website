"use client";

import React, { useEffect } from "react";
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

  // Compact structured data
  useEffect(() => {
    const businessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Sajith Rice Mill",
      description:
        "Premium Sri Lankan rice producer specializing in traditional Sudu Kakulu varieties since 2009.",
      telephone: "+94779258293",
      email: "sajithricemill@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nadalagamuwa, Wadumunnegedara",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "7.398382",
        longitude: "80.006091",
      },
      openingHours: "Mo-Fr 08:00-18:00",
      priceRange: "$$",
    };

    let script = document.getElementById("footer-business-data");
    if (script) script.remove();

    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "footer-business-data";
    script.textContent = JSON.stringify(businessData);
    document.head.appendChild(script);

    return () => {
      document.getElementById("footer-business-data")?.remove();
    };
  }, []);

  return (
    <footer
      className="bg-green-900 text-white pt-8 sm:pt-12 pb-4 sm:pb-6"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info - Compact */}
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <Image
                src="/sajith-logo.png"
                alt="Sajith Rice Mill Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain mx-auto md:mx-0 md:mr-3 mb-2 md:mb-0"
                itemProp="logo"
              />
              <div>
                <h3 className="text-lg font-bold text-white" itemProp="name">
                  {companyInfo.name}
                </h3>
                <p className="text-amber-200 text-sm" itemProp="slogan">
                  Premium Quality Rice
                </p>
              </div>
            </div>
            <p
              className="text-gray-300 text-sm leading-relaxed"
              itemProp="description"
            >
              Premium <strong>Sri Lankan rice</strong> direct from our family
              farm since 2009.
            </p>
          </div>

          {/* Quick Links - Compact */}
          <nav aria-labelledby="footer-nav">
            <h3
              id="footer-nav"
              className="text-lg font-bold mb-4 text-white text-center md:text-left"
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {[
                { id: "story", label: "Our Story" },
                { id: "products", label: "Products" },
                { id: "why-choose-us", label: "Why Choose Us" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-amber-300 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info - Compact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <address className="not-italic space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <Phone
                  size={14}
                  className="text-amber-300 mr-2 flex-shrink-0"
                />
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors text-sm"
                  itemProp="telephone"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={14} className="text-amber-300 mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors text-sm break-all"
                  itemProp="email"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <MapPin
                  size={14}
                  className="text-amber-300 mr-2 mt-0.5 flex-shrink-0"
                />
                <span
                  className="text-gray-300 text-sm leading-relaxed"
                  itemProp="address"
                >
                  {companyInfo.address}
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom - Compact */}
        <div className="border-t border-green-800 pt-4 text-center">
          <p className="text-gray-400 text-xs leading-relaxed">
            &copy; {currentYear} {companyInfo.name}. All rights reserved. |
            <span className="mx-1">Solutions by</span>
            <a
              href="https://www.lumoraventures.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 transition-colors font-medium inline-flex items-center"
            >
              Lumora Ventures
              <ExternalLink size={10} className="ml-1" />
            </a>
          </p>
        </div>

        {/* Hidden SEO data */}
        <div className="hidden">
          <meta itemProp="foundingDate" content="2009" />
          <meta itemProp="areaServed" content="Sri Lanka" />
          <div
            itemProp="geo"
            itemScope
            itemType="https://schema.org/GeoCoordinates"
          >
            <meta itemProp="latitude" content="7.398382" />
            <meta itemProp="longitude" content="80.006091" />
          </div>
          <span itemProp="keywords">
            Sri Lankan rice, Sudu Kakulu, premium rice, organic rice,
            traditional rice farming, wholesale rice
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
