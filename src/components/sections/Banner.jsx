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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
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

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div
      className="relative h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="h-full relative">
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slideIndex === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image - Responsive */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={`Hero slide ${slideIndex + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-75 sm:brightness-80"
                priority={slideIndex === 0}
                sizes="100vw"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
              {/* Title - Responsive Typography */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl whitespace-pre-line leading-tight">
                {slide.title}
              </h1>

              {/* Subtitle - Responsive Typography */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed opacity-90">
                {slide.subtitle}
              </p>

              {/* CTA Button - Responsive Sizing */}
              <Button
                size="md"
                className="text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection(slide.buttonLink)}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <div
        className="hidden lg:group-hover:block absolute top-1/2 -translate-y-1/2 left-3 xl:left-5 z-20 
                   cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 xl:p-3 rounded-full transition-colors backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft size={20} className="xl:w-6 xl:h-6" />
      </div>

      <div
        className="hidden lg:group-hover:block absolute top-1/2 -translate-y-1/2 right-3 xl:right-5 z-20 
                   cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 xl:p-3 rounded-full transition-colors backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight size={20} className="xl:w-6 xl:h-6" />
      </div>

      {/* Mobile Navigation Arrows - Always Visible on Touch Devices */}
      <div
        className="lg:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20 
                   cursor-pointer bg-black/30 active:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm touch-manipulation"
        onClick={prevSlide}
      >
        <ChevronLeft size={18} />
      </div>

      <div
        className="lg:hidden absolute top-1/2 -translate-y-1/2 right-2 z-20 
                   cursor-pointer bg-black/30 active:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm touch-manipulation"
        onClick={nextSlide}
      >
        <ChevronRight size={18} />
      </div>

      {/* Indicator Dots - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {heroSlides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors touch-manipulation ${
              currentIndex === slideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>

      {/* Swipe Indicator for Mobile */}
      <div className="lg:hidden absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-white/70 text-xs sm:text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-0.5 bg-white/50 rounded"></div>
          <span>Swipe to navigate</span>
          <div className="w-4 h-0.5 bg-white/50 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
