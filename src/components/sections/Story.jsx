"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Story = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] shadow-lg sm:shadow-2xl">
              <Image
                src="/image.webp"
                alt="Traditional Sudu Kakulu white rice farming facility"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card - Responsive positioning */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-3 sm:p-6 border border-green-100">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-700">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Est. 2009 • Traditional White Rice
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-green-900 leading-tight">
                Our Story of
                <span className="text-amber-600 block">Excellence</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Founded by{" "}
                <span className="font-semibold text-green-800">
                  J.A. Santha Nimal
                </span>{" "}
                in December 2009, our journey began in the heart of Nadalagamuwa
                Wadumunnegadara with a simple vision: to preserve and produce
                the finest quality{" "}
                <span className="font-semibold text-amber-600">
                  Sudu Kakulu
                </span>{" "}
                - traditional Sri Lankan white rice following authentic organic
                methods.
              </p>
            </div>

            {/* Key Features - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-green-50 hover:shadow-lg sm:hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                  Chemical-Free
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  No chemical preservatives, ensuring healthy and natural
                  nutrition
                </p>
              </div>

              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-green-50 hover:shadow-lg sm:hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                  Traditional Heritage
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Authentic Sri Lankan Sudu Kakulu following ancestral organic
                  methods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
