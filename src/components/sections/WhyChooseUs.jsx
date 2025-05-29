"use client";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Traditional Heritage",
      description:
        "Authentic Sudu Kakulu cultivated using time-tested Sri Lankan organic methods passed down through generations.",
    },
    {
      id: 2,
      title: "Chemical-Free Purity",
      description:
        "No chemical preservatives or artificial additives - just pure, natural rice that's safe for your family's health.",
    },
    {
      id: 3,
      title: "15+ Years Experience",
      description:
        "Since 2009, we've been perfecting our craft with consistent quality and reliable supply you can trust.",
    },
    {
      id: 4,
      title: "Superior Nutrition",
      description:
        "Rich in essential nutrients with authentic taste and texture that makes every meal a wholesome experience.",
    },
    {
      id: 5,
      title: "Consistent Supply",
      description:
        "Meeting high market demand with uninterrupted availability ensuring you never run out of quality rice.",
    },
    {
      id: 6,
      title: "Trusted Quality",
      description:
        "Consumer confidence built through transparent practices and unwavering commitment to excellence.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Quality • Heritage • Trust
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">
            Why Choose Our
            <span className="text-amber-600 block">Sudu Kakulu?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of authentic Sri Lankan traditional white
            rice that combines heritage, health, and exceptional quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2"
            >
              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
