"use client";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Traditional Heritage",
      description:
        "Authentic Sudu Kakulu cultivated using time-tested Sri Lankan organic methods passed down through generations.",
      icon: "🌾",
    },
    {
      id: 2,
      title: "Chemical-Free Purity",
      description:
        "No chemical preservatives or artificial additives - just pure, natural rice that's safe for your family's health.",
      icon: "🌿",
    },
    {
      id: 3,
      title: "15+ Years Experience",
      description:
        "Since 2009, we've been perfecting our craft with consistent quality and reliable supply you can trust.",
      icon: "⭐",
    },
    {
      id: 4,
      title: "Superior Nutrition",
      description:
        "Rich in essential nutrients with authentic taste and texture that makes every meal a wholesome experience.",
      icon: "💪",
    },
    {
      id: 5,
      title: "Consistent Supply",
      description:
        "Meeting high market demand with uninterrupted availability ensuring you never run out of quality rice.",
      icon: "📦",
    },
    {
      id: 6,
      title: "Trusted Quality",
      description:
        "Consumer confidence built through transparent practices and unwavering commitment to excellence.",
      icon: "🏆",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header - Responsive */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Quality • Heritage • Trust
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-green-900 leading-tight">
            Why Choose Our
            <span className="text-amber-600 block">Sudu Kakulu?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-lg sm:max-w-xl lg:max-w-3xl mx-auto leading-relaxed">
            Experience the difference of authentic Sri Lankan traditional white
            rice that combines heritage, health, and exceptional quality.
          </p>
        </div>

        {/* Features Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-1 lg:hover:-translate-y-2"
            >
              {/* Icon - Mobile Only */}
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 lg:hidden text-center">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 text-gray-900 group-hover:text-green-800 transition-colors text-center sm:text-left">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                {feature.description}
              </p>

              {/* Hover Indicator - Desktop Only */}
              <div className="hidden lg:block w-0 group-hover:w-8 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-full mt-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
            <div className="text-center sm:text-left">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">
                Ready to Experience Premium Quality?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Contact us today for orders and inquiries
              </p>
            </div>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-xs sm:text-sm touch-manipulation"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
