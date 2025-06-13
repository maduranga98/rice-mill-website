"use client";

import React from "react";
import { Metadata } from "next";
import Banner from "@/components/sections/Banner";
import Story from "@/components/sections/Story";
import Products from "@/components/sections/Products";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import PurchaseLocations from "@/components/sections/PurchaseLocations";

// Page-specific structured data
const pageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
  }/#webpage`,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/",
  name: "Sajith Rice Mill - Premium Sri Lankan Rice | සුදු කැකුළු & සම්බා කැකුළු",
  description:
    "J.A. Santha Nimal&apos;s premium Sri Lankan rice mill offering සුදු කැකුළු, සම්බා කැකුළු, රතු කැකුළු at best prices since 2009. Chemical-free traditional කැකුළු. Island-wide delivery.",
  keywords:
    "Sri Lankan rice, සුදු කැකුළු, සම්බා කැකුළු, රතු කැකුළු, best price rice, Sajith Rice Mill, J.A. Santha Nimal, premium rice Sri Lanka",
  inLanguage: ["en", "si", "ta"],
  isPartOf: {
    "@type": "WebSite",
    "@id": `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
    }/#website`,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/",
    name: "Sajith Rice Mill",
    description:
      "Premium Sri Lankan Rice Supplier - කැකුළු ප්‍රිමියම් සැපයුම්කරු",
    publisher: {
      "@type": "Organization",
      name: "Sajith Rice Mill",
      "@id": `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
      }/#organization`,
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${
            process.env.NEXT_PUBLIC_SITE_URL ||
            "https://www.sajithricemill.com/"
          }/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    "@id": `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
    }/#organization`,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item:
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/",
      },
    ],
  },
  about: [
    {
      "@type": "Thing",
      name: "Sri Lankan Rice Varieties",
      description:
        "Traditional rice varieties including Sudu Kakulu, Samba Kakulu, and Ratu Kakulu",
    },
    {
      "@type": "Thing",
      name: "Organic Rice Production",
      description: "Chemical-free traditional rice farming and processing",
    },
    {
      "@type": "Thing",
      name: "Bulk Rice Supply",
      description: "Wholesale rice distribution across Sri Lanka",
    },
  ],
  mentions: [
    {
      "@type": "Place",
      name: "Nadalagamuwa, Wadumunnegedara",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 7.398382,
        longitude: 80.006091,
      },
    },
    {
      "@type": "Place",
      name: "North Western Province, Sri Lanka",
    },
  ],
};

// FAQ Schema for common rice-related questions
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of rice does Sajith Rice Mill offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer premium සුදු කැකුළු (Sudu Kakulu), සම්බා කැකුළු (Samba Kakulu), and රතු කැකුළු (Ratu Kakulu) rice varieties. All our rice is chemical-free and processed using traditional methods.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer bulk rice orders at best prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide bulk rice orders for restaurants, hotels, and large households at competitive wholesale prices. We offer 5kg, 10kg, and 25kg packages with island-wide delivery across Sri Lanka.",
      },
    },
    {
      "@type": "Question",
      name: "Is your rice organic and chemical-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! All our කැකුළු varieties are grown using traditional organic methods without chemical preservatives. We&apos;ve maintained these standards since our establishment in 2009.",
      },
    },
    {
      "@type": "Question",
      name: "Where do you deliver rice in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver across Sri Lanka including Colombo, Giriulla, Negombo, Kelaniya, Minuwangoda, Katunayake, and many other locations. Contact us for delivery to your area.",
      },
    },
  ],
};

// Product category schema
const productCategoryData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Premium Sri Lankan Rice Collection",
  description:
    "Complete range of traditional කැකුළු varieties including සුදු කැකුළු, සම්බා කැකුළු, and රතු කැකුළු at best prices",
  url: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
  }/#products`,
  mainEntity: {
    "@type": "ItemList",
    name: "Rice Products - සහල් නිෂ්පාදන",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "Sudu Kakulu Rice 5kg - සුදු කැකුළු 5kg",
        description:
          "Premium white raw rice, chemical-free and perfect for daily meals",
        category: "Rice & Grains",
        brand: "Sajith Rice Mill",
      },
      {
        "@type": "Product",
        position: 2,
        name: "Sudu Kakulu Rice 10kg - සුදු කැකුළු 10kg",
        description: "Family pack white rice, ideal for households",
        category: "Rice & Grains",
        brand: "Sajith Rice Mill",
      },
      {
        "@type": "Product",
        position: 3,
        name: "Sudu Kakulu Rice 25kg - සුදු කැකුළු 25kg",
        description: "Bulk pack for restaurants and large families",
        category: "Rice & Grains",
        brand: "Sajith Rice Mill",
      },
      {
        "@type": "Product",
        position: 4,
        name: "Samba Kakulu Rice 5kg - සම්බා කැකුළු 5kg",
        description: "Aromatic short-grain rice with firm texture",
        category: "Rice & Grains",
        brand: "Sajith Rice Mill",
      },
      {
        "@type": "Product",
        position: 5,
        name: "Samba Kakulu Rice 25kg - සම්බා කැකුළු 25kg",
        description: "Premium samba rice for commercial and bulk use",
        category: "Rice & Grains",
        brand: "Sajith Rice Mill",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCategoryData),
        }}
      />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Hidden SEO content for search engines */}
      <div className="sr-only">
        <h1>Sajith Rice Mill - Premium Sri Lankan Rice Supplier</h1>
        <p>
          J.A. Santha Nimal&apos;s premium Sri Lankan rice mill established in
          2009. We offer the finest සුදු කැකුළු (Sudu Kakulu), සම්බා කැකුළු
          (Samba Kakulu), and රතු කැකුළු (Ratu Kakulu) rice varieties at best
          prices. Chemical-free traditional කැකුළු processed using organic
          methods. Bulk orders and island-wide delivery across Sri Lanka.
        </p>
        <p>
          Premium rice supplier serving Colombo, Giriulla, Negombo, Kelaniya,
          Minuwangoda, Katunayake, Ekala, Kotugoda, and surrounding areas.
          Wholesale rice prices for restaurants, hotels, and large households.
        </p>
      </div>

      <main
        id="main-content"
        role="main"
        itemScope
        itemType="https://schema.org/WebPage"
        className="min-h-screen"
      >
        {/* Hidden page title for SEO */}
        <h1 className="sr-only">
          Sajith Rice Mill - Premium සුදු කැකුළු & සම්බා කැකුළු | Best Price Sri
          Lankan Rice
        </h1>

        {/* Hero Section */}
        <section
          id="banner"
          role="banner"
          aria-label="Hero banner showcasing premium Sri Lankan rice"
          itemScope
          itemType="https://schema.org/WPHeader"
        >
          <Banner />
        </section>

        {/* Company Story Section */}
        <section
          id="story"
          role="region"
          aria-labelledby="story-heading"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <div className="sr-only">
            <h2 id="story-heading">
              Our Story - J.A. Santha Nimal&apos;s Rice Mill Heritage Since 2009
            </h2>
            <p>
              Established by J.A. Santha Nimal in December 2009 in Nadalagamuwa,
              Wadumunnegedara. Specializing in traditional Sri Lankan කැකුළු
              varieties using chemical-free organic farming methods.
            </p>
          </div>
          <Story />
        </section>

        {/* Products Showcase Section */}
        <section
          id="products"
          role="region"
          aria-labelledby="products-heading"
          itemScope
          itemType="https://schema.org/CollectionPage"
        >
          <div className="sr-only">
            <h2 id="products-heading">
              Premium Rice Products - සුදු කැකුළු සම්බා කැකුළු රතු කැකුළු
            </h2>
            <p>
              Complete range of traditional Sri Lankan rice varieties: සුදු
              කැකුළු (Sudu Kakulu) white rice in 5kg, 10kg, 25kg packages. සම්බා
              කැකුළු (Samba Kakulu) aromatic rice in 5kg, 25kg packages. All
              varieties available at best wholesale prices with island-wide
              delivery.
            </p>
          </div>
          <Products />
        </section>

        {/* Why Choose Us Section */}
        <section
          id="why-choose-us"
          role="region"
          aria-labelledby="why-choose-heading"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <div className="sr-only">
            <h2 id="why-choose-heading">
              Why Choose Sajith Rice Mill - Chemical-Free Traditional කැකුළු
            </h2>
            <p>
              15+ years of excellence in rice production. Chemical-free
              traditional methods. Superior nutrition and authentic taste.
              Consistent supply and trusted quality. Best prices for premium Sri
              Lankan rice varieties.
            </p>
          </div>
          <WhyChooseUs />
        </section>

        {/* Purchase Locations Section */}
        <section
          id="purchase-locations"
          role="region"
          aria-labelledby="locations-heading"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <div className="sr-only">
            <h2 id="locations-heading">
              Rice Available Locations - Island-wide Delivery Sri Lanka
            </h2>
            <p>
              Our premium කැකුළු varieties are available across Sri Lanka
              including: Marandagahamula, Giriulla, Horampalla, Minuwangoda,
              Kotugoda, Ekala, Katunayake, Negombo, Kelaniya, Ruwanwella,
              Yatiyanthota, Talduwa, Eheliyagoda. Contact us for delivery to
              your area.
            </p>
          </div>
          <PurchaseLocations />
        </section>

        {/* Contact Information Section */}
        <section
          id="contact"
          role="region"
          aria-labelledby="contact-heading"
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <div className="sr-only">
            <h2 id="contact-heading">
              Contact Sajith Rice Mill - Order Premium කැකුළු Today
            </h2>
            <p>
              Phone: (077) 92-58293 Email: sajithricemill@gmail.com Address:
              Nadalagamuwa, Wadumunnegedara, North Western Province, Sri Lanka
              Business Hours: Monday-Friday 8:00 AM - 6:00 PM, Saturday 8:00 AM
              - 4:00 PM
            </p>
          </div>
          <Contact />
        </section>

        {/* Additional SEO Content */}
        <section className="sr-only" role="contentinfo">
          <h2>Additional Information</h2>
          <div>
            <h3>Rice Varieties Available</h3>
            <ul>
              <li>සුදු කැකුළු (Sudu Kakulu) - Premium white rice</li>
              <li>
                සම්බා කැකුළු (Samba Kakulu) - Traditional short grain rice
              </li>
              <li>රතු කැකුළු (Ratu Kakulu) - Nutritious red rice</li>
            </ul>
          </div>

          <div>
            <h3>Service Areas</h3>
            <p>
              Serving customers across Sri Lanka with reliable delivery to:
              Western Province, North Western Province, Central Province, and
              other regions. Special focus on Colombo district, Gampaha
              district, and surrounding areas.
            </p>
          </div>

          <div>
            <h3>Quality Assurance</h3>
            <p>
              All rice varieties undergo strict quality control. Chemical-free
              processing ensures maximum nutrition retention. Traditional
              organic methods preserve authentic Sri Lankan taste. Established
              reputation since 2009 with consistent customer satisfaction.
            </p>
          </div>

          <div>
            <h3>Business Information</h3>
            <p>
              Founded: December 2009 Founder: J.A. Santha Nimal Location:
              Nadalagamuwa, Wadumunnegedara Province: North Western Province
              Country: Sri Lanka Business Type: Rice Mill and Wholesale Supplier
              Specialization: Traditional Sri Lankan Rice Varieties
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
