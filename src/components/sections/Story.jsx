"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Story = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add structured data for About page
  useEffect(() => {
    if (!isMounted) return;

    try {
      const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Sajith Rice Mill - Our Story",
        description:
          "Learn about Sajith Rice Mill's journey since 2009, specializing in premium Sri Lankan rice varieties with traditional organic farming methods",
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
        }/#story`,
        mainEntity: {
          "@type": "Organization",
          "@id": `${
            process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
          }/#organization`,
          name: "Sajith Rice Mill",
          foundingDate: "2009-12",
          founder: {
            "@type": "Person",
            name: "J.A. Santha Nimal",
          },
          foundingLocation: {
            "@type": "Place",
            name: "Nadalagamuwa, Wadumunnegadara",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Wadumunnegadara",
              addressRegion: "North Western Province",
              addressCountry: "LK",
            },
          },
          mission:
            "To preserve and produce the finest quality traditional Sri Lankan rice varieties using authentic organic methods",
          specialty: [
            "Traditional Rice Production",
            "Organic Farming Methods",
            "Chemical-Free Rice Processing",
            "Premium Sri Lankan Rice Varieties",
          ],
          keywords:
            "සුදු කැකුළු, සම්බා කැකුළු, රතු කැකුළු, ඔර්ගනික් සහල්, සම්ප්‍රදායික ගොවිතැන",
        },
        about: [
          {
            "@type": "Thing",
            name: "Traditional Sri Lankan Rice Production",
            description:
              "Authentic methods for producing premium Sudu Kakulu and Samba Kakulu rice varieties",
          },
          {
            "@type": "Thing",
            name: "Organic Farming Excellence",
            description:
              "Chemical-free farming practices maintaining traditional quality since 2009",
          },
        ],
      };

      // Check if script already exists
      const existingScript = document.getElementById("story-schema");
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(aboutSchema);
      script.id = "story-schema";
      document.head.appendChild(script);

      return () => {
        const scriptToRemove = document.getElementById("story-schema");
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    } catch (error) {
      console.warn("Error adding story structured data:", error);
    }
  }, [isMounted]);

  return (
    <>
      {/* Hidden SEO content with Sinhala keywords */}
      <div className="sr-only">
        <h2>Sajith Rice Mill History - සජිත් සහල් මෝල ඉතිහාසය</h2>
        <p>
          Established 2009 by J.A. Santha Nimal in Nadalagamuwa,
          Wadumunnegadara, North Western Province. Specializing in premium සුදු
          කැකුළු (Sudu Kakulu), සම්බා කැකුළු (Samba Kakulu), and රතු කැකුළු
          (Ratu Kakulu) production using traditional organic methods. ඔර්ගනික්
          ගොවිතැන, සම්ප්‍රදායික ක්‍රම, රසායනික නොමැති සහල්, ප්‍රිමියම් තත්ත්වය.
        </p>
        <p>
          15+ years of excellence in rice production, chemical-free processing,
          sustainable farming practices, authentic Sri Lankan rice varieties.
          තිරසාර කෘෂිකර්මය, අව්‍යාජ ශ්‍රී ලාංකික සහල් වර්ග, පරම්පරාගත ක්‍රමවේද.
        </p>
      </div>

      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-green-50"
        role="region"
        aria-labelledby="story-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Image Section - Enhanced Responsiveness */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] sm:aspect-[16/12] lg:aspect-[4/3] shadow-xl sm:shadow-2xl">
                <Image
                  src="/image.webp"
                  alt="Sajith Rice Mill traditional rice farming facility in Nadalagamuwa, Wadumunnegadara - premium Sri Lankan rice production since 2009"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  priority
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Enhanced Floating Stats Card - Fully Responsive */}
              <div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 
                            bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl 
                            p-3 sm:p-4 md:p-6 border border-green-100
                            transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-center">
                  {/* Main Number */}
                  <div
                    className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 
                                font-bold text-green-700 leading-none"
                  >
                    15+
                  </div>

                  {/* Primary Text */}
                  <div
                    className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 
                                text-gray-600 font-medium mt-1 leading-tight"
                  >
                    Years of
                    <br className="hidden xs:block sm:hidden md:block lg:hidden xl:block" />
                    <span className="xs:hidden sm:inline md:hidden lg:inline xl:hidden">
                      {" "}
                    </span>
                    Excellence
                  </div>

                  {/* Since Badge */}
                  <div
                    className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm 
                                text-amber-600 font-medium mt-1 px-2 py-0.5 
                                bg-amber-50 rounded-full inline-block"
                  >
                    Since 2009
                  </div>
                </div>
              </div>

              {/* Additional Mobile Stats - Visible only on very small screens */}
              <div
                className="absolute top-3 left-3 sm:hidden
                            bg-white/90 backdrop-blur-sm rounded-lg shadow-md
                            px-3 py-2 border border-green-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">
                    Est. 2009
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section - Enhanced Typography */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Section Badge - Responsive */}
              <div
                className="inline-flex items-center px-3 sm:px-4 py-2 
                            bg-green-100 text-green-700 rounded-full 
                            text-xs sm:text-sm font-medium"
              >
                <span className="hidden sm:inline">Est. 2009 • </span>
                <span className="sm:hidden">2009 • </span>
                Traditional Sri Lankan Rice
              </div>

              {/* Main Heading - Enhanced Responsive Typography */}
              <div>
                <h2
                  id="story-heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                           font-bold text-green-900 leading-tight mb-3 sm:mb-4"
                  itemProp="name"
                >
                  Our Story of
                  <span className="text-amber-600 block">Excellence</span>
                </h2>

                {/* Subtitle - Responsive */}
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 
                             text-gray-600 leading-relaxed"
                >
                  Preserving traditional Sri Lankan rice heritage through
                  <span className="hidden sm:inline">
                    <br />
                  </span>
                  <span className="sm:hidden"> </span>
                  authentic organic methods
                </p>
              </div>

              {/* Story Content - Enhanced Responsive Typography */}
              <div className="space-y-4 sm:space-y-6" itemProp="description">
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 
                             text-gray-700 leading-relaxed"
                >
                  Founded by{" "}
                  <span className="font-semibold text-green-800">
                    J.A. Santha Nimal
                  </span>{" "}
                  in December 2009, our journey began in the heart of
                  Nadalagamuwa Wadumunnegadara with a simple vision: to preserve
                  and produce the finest quality traditional Sri Lankan rice
                  varieties following authentic organic methods.
                </p>

                <p
                  className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 
                             text-gray-600 leading-relaxed"
                >
                  For over 15 years, we have specialized in premium white rice
                  varieties, maintaining chemical-free production standards and
                  sustainable farming practices that honor our agricultural
                  heritage.
                </p>
              </div>

              {/* Key Features Grid - Enhanced Mobile Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 
                              shadow-md border border-green-50 
                              hover:shadow-lg transition-all duration-300
                              hover:border-green-100"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    Chemical-Free Production
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    No chemical preservatives or artificial additives, ensuring
                    healthy and natural nutrition in every grain of rice.
                  </p>
                </div>

                <div
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 
                              shadow-md border border-green-50 
                              hover:shadow-lg transition-all duration-300
                              hover:border-green-100"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    Traditional Heritage
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Authentic Sri Lankan rice varieties processed using
                    ancestral organic methods passed down through generations.
                  </p>
                </div>
              </div>

              {/* Additional CTA Section - Mobile Optimized */}
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="md"
                    className="w-full sm:w-auto text-sm sm:text-base px-6 py-2.5 sm:py-3"
                    onClick={() => {
                      const element = document.getElementById("products");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    View Our Products
                  </Button>

                  <button
                    className="w-full sm:w-auto text-sm sm:text-base px-6 py-2.5 sm:py-3
                             text-green-700 border border-green-200 rounded-lg
                             hover:bg-green-50 transition-colors duration-200"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden metadata for search engines */}
        <div className="sr-only">
          <h3>Company Milestones</h3>
          <ul>
            <li>
              2009: Founded by J.A. Santha Nimal in Nadalagamuwa,
              Wadumunnegadara
            </li>
            <li>2010-2015: Established traditional rice production methods</li>
            <li>
              2015-2020: Expanded to serve North Western and Western Provinces
            </li>
            <li>
              2020-Present: Leading supplier of premium organic rice varieties
            </li>
          </ul>

          <h3>Location & Heritage</h3>
          <p>
            Based in Nadalagamuwa, Wadumunnegadara, North Western Province, Sri
            Lanka. Serving customers across Western Province, Central Province,
            and surrounding regions. විශේෂඥතාව: සම්ප්‍රදායික කෘෂිකර්මය, ඔර්ගනික්
            සහල් නිෂ්පාදනය, තිරසාර ගොවිතැන.
          </p>
        </div>
      </section>
    </>
  );
};

export default Story;
