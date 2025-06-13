"use client";
import React, { useEffect } from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Traditional Heritage",
      description:
        "Authentic Sudu Kakulu cultivated using time-tested Sri Lankan organic methods passed down through generations.",
      keywords:
        "traditional Sri Lankan rice, organic farming methods, heritage rice varieties",
      benefit:
        "Preserves authentic flavors and nutritional value through traditional cultivation",
    },
    {
      id: 2,
      title: "Chemical-Free Purity",
      description:
        "No chemical preservatives or artificial additives - just pure, natural rice that's safe for your family's health.",
      keywords:
        "chemical-free rice, organic rice, natural preservatives, healthy rice",
      benefit: "100% natural rice without harmful chemicals for family safety",
    },
    {
      id: 3,
      title: "15+ Years Experience",
      description:
        "Since 2009, we've been perfecting our craft with consistent quality and reliable supply you can trust.",
      keywords:
        "experienced rice miller, established 2009, quality assurance, reliable supplier",
      benefit:
        "Proven track record of consistent quality and reliable rice supply",
    },
    {
      id: 4,
      title: "Superior Nutrition",
      description:
        "Rich in essential nutrients with authentic taste and texture that makes every meal a wholesome experience.",
      keywords:
        "nutritious rice, essential nutrients, wholesome meals, healthy rice varieties",
      benefit: "High nutritional value with authentic taste and texture",
    },
    {
      id: 5,
      title: "Consistent Supply",
      description:
        "Meeting high market demand with uninterrupted availability ensuring you never run out of quality rice.",
      keywords:
        "reliable rice supply, consistent availability, bulk rice orders, wholesale rice",
      benefit:
        "Guaranteed uninterrupted supply for both retail and wholesale customers",
    },
    {
      id: 6,
      title: "Trusted Quality",
      description:
        "Consumer confidence built through transparent practices and unwavering commitment to excellence.",
      keywords:
        "quality assurance, transparent practices, consumer trust, premium rice quality",
      benefit:
        "Transparent quality control processes ensuring premium rice standards",
    },
  ];

  // Inject structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Sajith Rice Mill",
      description:
        "Premium quality traditional Sri Lankan rice producer specializing in Sudu Kakulu varieties",
      foundingDate: "2009",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nadalagamuwa, Wadumunnegedara",
        addressCountry: "LK",
        addressRegion: "Sri Lanka",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Rice Products",
        itemListElement: features.map((feature) => ({
          "@type": "Offer",
          name: feature.title,
          description: feature.description,
          category: "Rice Quality Features",
        })),
      },
      knowsAbout: features.map((feature) => feature.keywords).join(", "),
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Premium Sudu Kakulu Rice",
          description:
            "Traditional Sri Lankan white rice varieties including 5kg, 10kg, and 25kg packages",
          category: "Rice & Grains",
          brand: {
            "@type": "Brand",
            name: "Sajith Rice Mill",
          },
        },
      },
    };

    // FAQ structured data for features
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: features.map((feature) => ({
        "@type": "Question",
        name: `Why choose rice with ${feature.title.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: feature.benefit,
        },
      })),
    };

    // Create script tags for structured data
    const createScriptTag = (data, id) => {
      let script = document.getElementById(id);
      if (script) {
        script.remove();
      }
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    createScriptTag(structuredData, "organization-structured-data");
    createScriptTag(faqStructuredData, "faq-structured-data");

    // Cleanup function
    return () => {
      document.getElementById("organization-structured-data")?.remove();
      document.getElementById("faq-structured-data")?.remove();
    };
  }, []);

  return (
    <>
      {/* SEO Meta Tags for this section */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-amber-50"
        aria-labelledby="why-choose-us-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="container mx-auto px-4">
          {/* Header - SEO Optimized */}
          <header className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <span itemProp="keywords">Quality • Heritage • Trust</span>
            </div>

            <h2
              id="why-choose-us-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-green-900 leading-tight"
              itemProp="headline"
            >
              Why Choose Our Premium
              <span className="text-amber-600 block">Sudu Kakulu Rice?</span>
            </h2>

            <p
              className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-lg sm:max-w-xl lg:max-w-3xl mx-auto leading-relaxed"
              itemProp="description"
            >
              Experience the difference of authentic Sri Lankan traditional
              white rice that combines
              <strong> heritage, health, and exceptional quality</strong> -
              direct from our family farm since 2009.
            </p>
          </header>

          {/* Features Grid - SEO Enhanced */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16"
            role="list"
            aria-label="Rice quality features and benefits"
          >
            {features.map((feature, index) => (
              <article
                key={feature.id}
                className="group bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-1 lg:hover:-translate-y-2"
                role="listitem"
                itemScope
                itemType="https://schema.org/Service"
                aria-labelledby={`feature-${feature.id}-title`}
              >
                {/* Content with semantic markup */}
                <h3
                  id={`feature-${feature.id}-title`}
                  className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 text-gray-900 group-hover:text-green-800 transition-colors"
                  itemProp="name"
                >
                  {feature.title}
                </h3>

                <p
                  className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-2"
                  itemProp="description"
                >
                  {feature.description}
                </p>

                {/* Hidden keywords for SEO */}
                <meta itemProp="keywords" content={feature.keywords} />

                {/* Benefits for structured data */}
                <div
                  className="hidden"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span itemProp="description">{feature.benefit}</span>
                </div>

                {/* Hover Indicator - Enhanced for accessibility */}
                <div
                  className="w-0 group-hover:w-8 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-full mt-4 transition-all duration-300"
                  aria-hidden="true"
                ></div>
              </article>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <footer className="text-center" role="contentinfo">
            <div
              className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md border border-gray-100"
              itemScope
              itemType="https://schema.org/ContactPoint"
            >
              <div className="text-center sm:text-left">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">
                  Ready to Experience Premium Quality Rice?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Contact us today for <strong>bulk orders</strong>,{" "}
                  <strong>wholesale inquiries</strong>, and{" "}
                  <strong>custom packaging</strong>
                </p>
                <meta itemProp="contactType" content="customer service" />
                <meta itemProp="areaServed" content="Sri Lanka" />
              </div>

              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-xs sm:text-sm touch-manipulation focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Contact us for premium rice orders and inquiries"
                type="button"
              >
                Get Premium Rice Quote
              </button>
            </div>
          </footer>
        </div>

        {/* Additional structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sajith Rice Mill",
              image: "/sajith-logo.png",
              description:
                "Premium Sri Lankan rice producer specializing in traditional Sudu Kakulu varieties with 15+ years of experience",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nadalagamuwa, Wadumunnegedara",
                addressCountry: "LK",
              },
              telephone: "+94779258293",
              email: "sajithricemill@gmail.com",
              foundingDate: "2009",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
              priceRange: "$$",
              paymentAccepted: ["Cash", "Bank Transfer"],
              currenciesAccepted: "LKR",
              openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-16:00",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "7.398382",
                  longitude: "80.006091",
                },
                geoRadius: "50000",
              },
            }),
          }}
        />
      </section>
    </>
  );
};

export default WhyChooseUs;
