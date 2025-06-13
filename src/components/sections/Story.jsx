"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Story = () => {
  // Add structured data for About page
  useEffect(() => {
    const aboutSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Sajith Rice Mill - Our Story",
      description:
        "Learn about Sajith Rice Mill's journey since 2009, specializing in premium Sri Lankan rice varieties with traditional organic farming methods",
      url: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
      }/#story`,
      mainEntity: {
        "@type": "Organization",
        "@id": `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
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

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(aboutSchema);
    script.id = "story-schema";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("story-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-green-50"
        role="region"
        aria-labelledby="story-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
                <Image
                  src="/image.webp"
                  alt="Sajith Rice Mill traditional rice farming facility in Nadalagamuwa, Wadumunnegadara - premium Sri Lankan rice production since 2009"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-green-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">15+</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">
                    Years of Excellence
                  </div>
                  <div className="text-xs text-amber-600 font-medium mt-1">
                    Since 2009
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Section Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Est. 2009 • Traditional Sri Lankan Rice
              </div>

              {/* Main Heading - Consistent Typography */}
              <div>
                <h2
                  id="story-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-4"
                  itemProp="name"
                >
                  Our Story of
                  <span className="text-amber-600 block">Excellence</span>
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Preserving traditional Sri Lankan rice heritage through
                  authentic organic methods
                </p>
              </div>

              {/* Story Content - Consistent Typography */}
              <div className="space-y-6" itemProp="description">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Founded by{" "}
                  <span className="font-semibold text-green-800">
                    J.A. Santha Nimal
                  </span>{" "}
                  in December 2009, our journey began in the heart of
                  Nadalagamuwa Wadumunnegadara with a simple vision: to preserve
                  and produce the finest quality traditional Sri Lankan rice
                  varieties following authentic organic methods.
                </p>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  For over 15 years, we have specialized in premium white rice
                  varieties, maintaining chemical-free production standards and
                  sustainable farming practices that honor our agricultural
                  heritage.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-green-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Chemical-Free Production
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    No chemical preservatives or artificial additives, ensuring
                    healthy and natural nutrition in every grain of rice.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-green-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Traditional Heritage
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Authentic Sri Lankan rice varieties processed using
                    ancestral organic methods passed down through generations.
                  </p>
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
