"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Hero banner slide data
const heroSlides = [
  {
    title: "Premium Rice,\nDirect from Our Fields",
    subtitle: "Freshness and Quality You Can Trust",
    image: "/hero1.webp",
    buttonText: "Order Now",
    buttonLink: "#products",
  },
  {
    title: "Traditional Methods,\nExceptional Quality",
    subtitle: "Experience the Authentic Taste of Premium Rice",
    image: "/hero2.webp",
    buttonText: "Explore Products",
    buttonLink: "#products",
  },
  {
    title: "Sustainable Farming,\nSuperior Flavor",
    subtitle: "From Our Family Farm to Your Table",
    image: "/hero3.webp",
    buttonText: "Learn More",
    buttonLink: "#story",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 6000; // 6 seconds

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden group">
      {/* Slides */}
      <div className="h-full relative">
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slideIndex === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
                filter: "brightness(0.8)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="text-xl mb-8 max-w-2xl">{slide.subtitle}</p>

              <Button
                size="lg"
                onClick={() => (window.location.href = slide.buttonLink)}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 z-20 
                   cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 z-20 
                   cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === slideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
