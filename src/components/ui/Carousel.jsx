"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ slides, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [nextSlide, autoSlideInterval]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden group">
      {/* Slide container with transition */}
      <div
        className="w-full h-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              {slide.title && (
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {slide.title}
                </h2>
              )}
              {slide.description && (
                <p className="text-base md:text-lg text-white max-w-md mb-4">
                  {slide.description}
                </p>
              )}
              {slide.buttonText && slide.buttonLink && (
                <a
                  href={slide.buttonLink}
                  className="px-5 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </div>

      {/* Dots/Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
