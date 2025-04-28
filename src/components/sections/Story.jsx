"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Story = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/story.webp"
                alt="Rice farm facility"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
              Our Story
            </h2>

            <p className="text-gray-700 mb-6">
              We have been dedicated to producing the finest quality rice. Our
              commitment to excellence and authentic methods ensures that every
              grain meets our high standards for taste, texture, and nutritional
              value.
            </p>

            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
