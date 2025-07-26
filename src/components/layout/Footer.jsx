"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { companyInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const isBlogPage = pathname?.startsWith("/blog");

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enhanced contact information
  const contactInfo = {
    phone1: "(071) 62-58293",
    phone2: "(037) 22-80835",
    email: companyInfo.email,
    address: companyInfo.address,
  };

  const scrollToSection = (sectionId) => {
    // If we're on blog page, navigate to home first
    if (isBlogPage) {
      router.push(`/#${sectionId}`);
      return;
    }

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

  const handleBlogClick = () => {
    router.push("/blog");
  };

  // Enhanced structured data with multiple phones
  useEffect(() => {
    if (!isMounted) return;

    try {
      const businessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
        }/#footer-business`,
        name: "Sajith Rice Mill",
        alternateName: "සජිත් සහල් මෝල",
        description:
          "Premium Sri Lankan rice producer specializing in traditional Sudu Kakulu varieties since 2009. Chemical-free rice processing with island-wide delivery.",
        telephone: ["+94716258293", "+94372280835"],
        email: "sajithricemill@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nadalagamuwa, Wadumunnegedara",
          addressLocality: "Wadumunnegedara",
          addressRegion: "North Western Province",
          addressCountry: "LK",
          postalCode: "60170",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 7.398382,
          longitude: 80.006091,
        },
        openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
        priceRange: "$$",
        foundingDate: "2009-12",
        paymentAccepted: ["Cash", "Bank Transfer", "Mobile Payment"],
        currenciesAccepted: "LKR",
        areaServed: [
          "North Western Province",
          "Western Province",
          "Central Province",
          "Sri Lanka",
        ],
        serviceType: [
          "Rice Production",
          "Organic Farming",
          "Wholesale Rice Supply",
          "Retail Rice Sales",
        ],
        keywords: [
          "Sajith Rice Mill",
          "Sri Lankan rice",
          "සුදු කැකුළු",
          "සම්බා කැකුළු",
          "රතු කැකුළු",
          "premium rice",
          "organic rice",
          "chemical-free rice",
          "traditional rice farming",
          "wholesale rice",
          "bulk rice supplier",
        ].join(", "),
      };

      // Remove existing script
      const existingScript = document.getElementById("footer-business-data");
      if (existingScript) {
        existingScript.remove();
      }

      // Add new script
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "footer-business-data";
      script.textContent = JSON.stringify(businessData);
      document.head.appendChild(script);

      return () => {
        const scriptToRemove = document.getElementById("footer-business-data");
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    } catch (error) {
      console.warn("Error adding footer structured data:", error);
    }
  }, [isMounted]);

  // Don't render until mounted
  if (!isMounted) {
    return (
      <footer className="bg-green-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="w-24 h-6 bg-green-800 rounded animate-pulse"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div
                      key={j}
                      className="w-full h-4 bg-green-800 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Company Info - Enhanced */}
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-start mb-6">
              <div className="relative mx-auto md:mx-0 mb-4 md:mb-0 md:mr-4">
                <Image
                  src="/sajith-logo.png"
                  alt="Sajith Rice Mill Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110"
                  itemProp="logo"
                />
              </div>
              <div className="text-center md:text-left">
                <h3
                  className="text-xl font-bold text-white mb-1"
                  itemProp="name"
                >
                  {companyInfo.name}
                </h3>
                <p
                  className="text-amber-200 text-sm font-medium"
                  itemProp="slogan"
                >
                  Premium Quality Rice
                </p>
                <p className="text-green-300 text-xs mt-1">
                  Since 2009 • සජිත් සහල් මෝල
                </p>
              </div>
            </div>
            <p
              className="text-gray-300 text-sm leading-relaxed mb-4"
              itemProp="description"
            >
              Premium <strong className="text-white">Sri Lankan rice</strong>{" "}
              direct from our family farm. Specializing in{" "}
              <strong className="text-amber-200">Sudu Kakulu</strong> and
              traditional varieties with chemical-free processing.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-1 text-xs text-green-300">
              <span>North Western Province, Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links - Enhanced with Blog */}
          <nav
            aria-labelledby="footer-nav"
            className="text-center md:text-left"
          >
            <h3 id="footer-nav" className="text-lg font-bold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { id: "story", label: "Our Story" },
                { id: "products", label: "Products" },
                { id: "why-choose-us", label: "Why Choose Us" },
                { id: "purchase-locations", label: "Where to Buy" },
                { id: "contact", label: "Contact" },
                { id: "blog", label: "Blog", isBlog: true },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      link.isBlog ? handleBlogClick() : scrollToSection(link.id)
                    }
                    className="text-gray-300 hover:text-amber-300 transition-all duration-200 text-sm hover:translate-x-1 block w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Enhanced Contact Info with Multiple Numbers */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <address className="not-italic space-y-4">
              {/* Phone Numbers */}
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <Phone
                    size={16}
                    className="text-amber-300 mr-3 flex-shrink-0"
                  />
                  <div className="space-y-1">
                    <a
                      href={`tel:${contactInfo.phone1.replace(/[^0-9]/g, "")}`}
                      className="text-gray-300 hover:text-amber-300 transition-colors text-sm font-medium block"
                      itemProp="telephone"
                    >
                      {contactInfo.phone1}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone2.replace(/[^0-9]/g, "")}`}
                      className="text-gray-300 hover:text-amber-300 transition-colors text-sm block"
                      itemProp="telephone"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={16} className="text-amber-300 mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors text-sm break-all"
                  itemProp="email"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start justify-center md:justify-start">
                <MapPin
                  size={16}
                  className="text-amber-300 mr-3 mt-0.5 flex-shrink-0"
                />
                <span
                  className="text-gray-300 text-sm leading-relaxed"
                  itemProp="address"
                >
                  {contactInfo.address}
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-green-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear}{" "}
                <span className="font-medium text-white">
                  {companyInfo.name}
                </span>
                . All rights reserved.
              </p>
              <p className="text-green-300 text-xs mt-1">
                Premium Sri Lankan Rice Since 2009 • ප්‍රිමියම් ශ්‍රී ලාංකික
                සහල්
              </p>
            </div>

            {/* Developer Credit */}
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-end">
                <span className="mr-2">Solutions by</span>
                <a
                  href="https://www.lumoraventures.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 transition-all duration-200 font-medium inline-flex items-center hover:scale-105"
                >
                  Lumora Ventures
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </p>
              <p className="text-green-300 text-xs mt-1">
                Web Development & Digital Solutions
              </p>
            </div>
          </div>

          {/* Additional Keywords for SEO */}
          <div className="mt-4 pt-4 border-t border-green-800">
            <p className="text-green-300 text-xs text-center opacity-70">
              Keywords: සුදු කැකුළු | සම්බා කැකුළු | රතු කැකුළු | Organic Rice |
              Chemical-Free | Traditional Farming | Wholesale Rice | Best Price
              Rice | Sri Lankan Rice Mill
            </p>
          </div>
        </div>

        {/* Enhanced Hidden SEO Data */}
        <div className="hidden">
          <meta itemProp="foundingDate" content="2009-12" />
          <meta itemProp="areaServed" content="Sri Lanka" />
          <meta
            itemProp="paymentAccepted"
            content="Cash, Bank Transfer, Mobile Payment"
          />
          <meta itemProp="priceRange" content="$$" />
          <div
            itemProp="geo"
            itemScope
            itemType="https://schema.org/GeoCoordinates"
          >
            <meta itemProp="latitude" content="7.398382" />
            <meta itemProp="longitude" content="80.006091" />
          </div>
          <div
            itemProp="openingHoursSpecification"
            itemScope
            itemType="https://schema.org/OpeningHoursSpecification"
          >
            <meta
              itemProp="dayOfWeek"
              content="Monday,Tuesday,Wednesday,Thursday,Friday"
            />
            <meta itemProp="opens" content="08:00" />
            <meta itemProp="closes" content="18:00" />
          </div>
          <div
            itemProp="openingHoursSpecification"
            itemScope
            itemType="https://schema.org/OpeningHoursSpecification"
          >
            <meta itemProp="dayOfWeek" content="Saturday" />
            <meta itemProp="opens" content="08:00" />
            <meta itemProp="closes" content="16:00" />
          </div>
          <span itemProp="keywords">
            Sajith Rice Mill, Sri Lankan rice, සුදු කැකුළු, සම්බා කැකුළු, රතු
            කැකුළු, Sudu Kakulu, Samba Kakulu, Ratu Kakulu, premium rice,
            organic rice, traditional rice farming, wholesale rice,
            chemical-free rice, bulk rice supplier, rice mill Sri Lanka, best
            price rice, North Western Province rice, traditional farming
            methods, sustainable agriculture, family farm, authentic Sri Lankan
            rice
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
