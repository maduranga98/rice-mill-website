"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Clean hero banner slide data
const heroSlides = [
  {
    title: "Premium Sri Lankan Rice\nDirect from Our Fields",
    subtitle:
      "Chemical-Free Traditional Rice Since 2009 | Best Prices Guaranteed",
    image: "/hero1.webp",
    buttonText: "Order Now",
    buttonLink: "#products",
    keywords:
      "premium rice, sri lankan rice, best price rice, සුදු කැකුළු, සම්බා කැකුළු",
    category: "Premium White Rice",
  },
  {
    title: "Traditional Rice Varieties\nExceptional Quality",
    subtitle:
      "Experience Authentic Taste of Organic Rice | Island-wide Delivery",
    image: "/hero2.webp",
    buttonText: "Explore Products",
    buttonLink: "#products",
    keywords:
      "traditional rice, organic rice, bulk rice supplier, සම්බා කැකුළු, කැකුළු",
    category: "Traditional Samba Rice",
  },
  {
    title: "Chemical-Free Farming\nSustainable Methods",
    subtitle:
      "From Our Family Farm to Your Table | Wholesale & Retail Available",
    image: "/hero3.webp",
    buttonText: "Our Story",
    buttonLink: "#story",
    keywords:
      "chemical-free rice, sustainable farming, wholesale rice, රතු කැකුළු, ඔර්ගනික් සහල්",
    category: "Organic Red Rice",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoSlideInterval = 7000;

  // Add structured data for hero section
  useEffect(() => {
    const heroSchema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Sajith Rice Mill Product Showcase",
      description:
        "Premium Sri Lankan rice varieties showcase featuring traditional and organic rice products",
      image: heroSlides.map((slide, index) => ({
        "@type": "ImageObject",
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://sajithricemill.com"
        }${slide.image}`,
        name: slide.title.replace(/\n/g, " "),
        description: slide.subtitle,
        keywords: slide.keywords,
        category: slide.category,
      })),
      about: {
        "@type": "Organization",
        name: "Sajith Rice Mill",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(heroSchema);
    script.id = "hero-schema";
    document.head.appendChild(script);

    setIsVisible(true);

    return () => {
      const existingScript = document.getElementById("hero-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

  const currentSlide = heroSlides[currentIndex];

  return (
    <>
      {/* Hidden SEO content with Sinhala keywords for search engines */}
      <div className="sr-only">
        <h1>Sajith Rice Mill - Premium Sri Lankan Rice Supplier</h1>
        <h2>සුදු කැකුළු සම්බා කැකුළු රතු කැකුළු Best Prices</h2>
        <p>
          Premium chemical-free traditional rice varieties including සුදු කැකුළු
          (Sudu Kakulu), සම්බා කැකුළු (Samba Kakulu), and රතු කැකුළු (Ratu
          Kakulu). Best wholesale prices, bulk orders, island-wide delivery
          across Sri Lanka. ඔර්ගනික් සහල්, ප්‍රිමියම් තත්ත්වය, රසායනික නොමැති
          කැකුළු.
        </p>
        <p>
          Serving: Giriulla, Negombo, Colombo, Kelaniya, Minuwangoda,
          Katunayake, North Western Province, Western Province. Organic rice
          supplier since 2009. සම්ප්‍රදායික ගොවිතැන, තිරසාර කෘෂිකර්මය, තොග මිල
          ගණන්.
        </p>
      </div>

      <section
        className="relative h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden group"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="banner"
        aria-label="Sajith Rice Mill hero banner showcasing premium Sri Lankan rice varieties"
        itemScope
        itemType="https://schema.org/ImageGallery"
      >
        {/* Slides */}
        <div className="h-full relative">
          {heroSlides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                slideIndex === currentIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              {/* Background Image - SEO Optimized */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={`${slide.title.replace(
                    /\n/g,
                    " "
                  )} - Sajith Rice Mill premium ${slide.category.toLowerCase()}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75 sm:brightness-80"
                  priority={slideIndex === 0}
                  sizes="100vw"
                  itemProp="url"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl whitespace-pre-line leading-tight transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  itemProp="name"
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed opacity-90 transition-all duration-700 delay-200 ${
                    isVisible
                      ? "translate-y-0 opacity-90"
                      : "translate-y-8 opacity-0"
                  }`}
                  itemProp="description"
                >
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <div
                  className={`transition-all duration-700 delay-400 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <Button
                    size="md"
                    className="text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                    onClick={() => scrollToSection(slide.buttonLink)}
                    aria-label={`${slide.buttonText} - View ${slide.category}`}
                  >
                    {slide.buttonText}
                  </Button>
                </div>

                {/* Category Badge */}
                <div
                  className={`mt-4 sm:mt-6 text-xs sm:text-sm text-amber-200 font-medium transition-all duration-700 delay-600 ${
                    isVisible
                      ? "translate-y-0 opacity-80"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.category}
                </div>
              </div>

              {/* Keywords for SEO (hidden metadata) */}
              <meta itemProp="keywords" content={slide.keywords} />
              <meta itemProp="category" content={slide.category} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Desktop Only */}
        <button
          className="hidden lg:group-hover:block absolute top-1/2 -translate-y-1/2 left-3 xl:left-5 z-20 
                     cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 xl:p-3 rounded-full transition-colors backdrop-blur-sm"
          onClick={prevSlide}
          aria-label="Previous slide - View previous rice variety"
          type="button"
        >
          <ChevronLeft size={20} className="xl:w-6 xl:h-6" />
        </button>

        <button
          className="hidden lg:group-hover:block absolute top-1/2 -translate-y-1/2 right-3 xl:right-5 z-20 
                     cursor-pointer bg-black/20 hover:bg-black/40 text-white p-2 xl:p-3 rounded-full transition-colors backdrop-blur-sm"
          onClick={nextSlide}
          aria-label="Next slide - View next rice variety"
          type="button"
        >
          <ChevronRight size={20} className="xl:w-6 xl:h-6" />
        </button>

        {/* Mobile Navigation Arrows */}
        <button
          className="lg:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20 
                     cursor-pointer bg-black/30 active:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm touch-manipulation"
          onClick={prevSlide}
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          className="lg:hidden absolute top-1/2 -translate-y-1/2 right-2 z-20 
                     cursor-pointer bg-black/30 active:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm touch-manipulation"
          onClick={nextSlide}
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight size={18} />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {heroSlides.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                currentIndex === slideIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${slideIndex + 1} - ${slide.category}`}
              type="button"
            />
          ))}
        </div>

        {/* Swipe Indicator for Mobile */}
        <div className="lg:hidden absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-white/70 text-xs sm:text-sm">
          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="w-4 h-0.5 bg-white/50 rounded animate-pulse"></div>
            <span>Swipe for more varieties</span>
            <div className="w-4 h-0.5 bg-white/50 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Screen reader live region */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Currently viewing slide {currentIndex + 1} of {heroSlides.length}:
          {currentSlide.title.replace(/\n/g, " ")} - {currentSlide.subtitle}
        </div>
      </section>
    </>
  );
};

export default Banner;
