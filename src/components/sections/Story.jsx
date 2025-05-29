"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Story = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
              <Image
                src="/image.webp"
                alt="Traditional Sudu Kakulu white rice farming facility"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">15+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Est. 2009 • Traditional White Rice
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-green-900 leading-tight">
                Our Story of
                <span className="text-amber-600 block">Excellence</span>
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
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

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                <h4 className="font-semibold text-gray-900 mb-2">
                  Chemical-Free
                </h4>
                <p className="text-gray-600 text-sm">
                  No chemical preservatives, ensuring healthy and natural
                  nutrition
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-amber-600"
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
                <h4 className="font-semibold text-gray-900 mb-2">
                  Traditional Heritage
                </h4>
                <p className="text-gray-600 text-sm">
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
