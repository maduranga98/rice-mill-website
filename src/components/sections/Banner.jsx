"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Clean hero banner slide data with optimized loading
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
    priority: true,
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
    priority: false,
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
    priority: false,
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const autoSlideInterval = 7000;

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);

    // Delayed visibility for smooth animations
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, []);

  // Enhanced structured data for hero section - only run on client
  useEffect(() => {
    if (!isMounted) return;

    try {
      const heroSchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: "Sajith Rice Mill Product Showcase",
        description:
          "Premium Sri Lankan rice varieties showcase featuring traditional and organic rice products",
        image: heroSlides.map((slide, index) => ({
          "@type": "ImageObject",
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
          }${slide.image}`,
          name: slide.title.replace(/\n/g, " "),
          description: slide.subtitle,
          keywords: slide.keywords,
          category: slide.category,
          position: index + 1,
        })),
        about: {
          "@type": "Organization",
          name: "Sajith Rice Mill",
        },
      };

      // Check if script already exists
      const existingScript = document.getElementById("hero-schema");
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(heroSchema);
      script.id = "hero-schema";
      document.head.appendChild(script);

      return () => {
        const scriptToRemove = document.getElementById("hero-schema");
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    } catch (error) {
      console.warn("Error adding structured data:", error);
    }
  }, [isMounted]);

  // Image loading handlers
  const handleImageLoad = useCallback((slideIndex) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [slideIndex]: true,
    }));
  }, []);

  const handleImageError = useCallback((slideIndex) => {
    console.warn(`Failed to load image for slide ${slideIndex}`);
    setImagesLoaded((prev) => ({
      ...prev,
      [slideIndex]: false,
    }));
  }, []);

  // Navigation functions
  const prevSlide = useCallback(() => {
    if (!isMounted) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, isMounted]);

  const nextSlide = useCallback(() => {
    if (!isMounted) return;
    const isLastSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, isMounted]);

  const goToSlide = useCallback(
    (slideIndex) => {
      if (!isMounted || slideIndex === currentIndex) return;
      setCurrentIndex(slideIndex);
    },
    [currentIndex, isMounted]
  );

  // Touch handlers
  const onTouchStart = useCallback((e) => {
    if (!e.targetTouches || !e.targetTouches[0]) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!e.targetTouches || !e.targetTouches[0]) return;
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
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

    // Resume autoplay after touch interaction
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  // Optimized scroll to section with error handling
  const scrollToSection = useCallback((sectionId) => {
    try {
      const element = document.getElementById(sectionId.replace("#", ""));
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.warn("Error scrolling to section:", error);
    }
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, isAutoPlaying, isMounted]);

  // Visibility change handler
  useEffect(() => {
    if (!isMounted) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAutoPlaying(false);
      } else {
        setIsAutoPlaying(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isMounted]);

  // Keyboard navigation
  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, isMounted]);

  // Don't render until mounted (prevents hydration issues)
  if (!isMounted) {
    return (
      <section className="relative h-screen min-h-[500px] bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-sm opacity-80">Loading...</p>
        </div>
      </section>
    );
  }

  const currentSlide = heroSlides[currentIndex];

  return (
    <>
      {/* Enhanced SEO content with better structure */}
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
        ref={containerRef}
        className="relative h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden group bg-gray-900"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="banner"
        aria-label="Sajith Rice Mill hero banner showcasing premium Sri Lankan rice varieties"
        itemScope
        itemType="https://schema.org/ImageGallery"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Enhanced slides with better loading states */}
        <div className="h-full relative">
          {heroSlides.map((slide, slideIndex) => {
            const isActive = slideIndex === currentIndex;

            return (
              <div
                key={`slide-${slideIndex}`}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 scale-100"
                    : "opacity-0 z-0 scale-105"
                }`}
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                {/* Loading placeholder */}
                {!imagesLoaded[slideIndex] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                      <p className="text-sm opacity-80">
                        Loading {slide.category}...
                      </p>
                    </div>
                  </div>
                )}

                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={`${slide.title.replace(
                      /\n/g,
                      " "
                    )} - Sajith Rice Mill premium ${slide.category.toLowerCase()}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className={`transition-all duration-700 ${
                      imagesLoaded[slideIndex]
                        ? "brightness-75 sm:brightness-80 scale-100"
                        : "brightness-50 scale-110"
                    }`}
                    priority={slide.priority}
                    sizes="100vw"
                    quality={85}
                    onLoad={() => handleImageLoad(slideIndex)}
                    onError={() => handleImageError(slideIndex)}
                  />
                </div>

                {/* Enhanced content overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
                  {/* Main Title */}
                  <h1
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl whitespace-pre-line leading-tight transition-all duration-1000 ease-out ${
                      isVisible && isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isActive ? "300ms" : "0ms",
                    }}
                    itemProp="name"
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed opacity-90 transition-all duration-1000 ease-out ${
                      isVisible && isActive
                        ? "translate-y-0 opacity-90"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isActive ? "500ms" : "0ms",
                    }}
                    itemProp="description"
                  >
                    {slide.subtitle}
                  </p>

                  {/* CTA Button */}
                  <div
                    className={`transition-all duration-1000 ease-out ${
                      isVisible && isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isActive ? "700ms" : "0ms",
                    }}
                  >
                    <Button
                      size="md"
                      className="text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
                      onClick={() => scrollToSection(slide.buttonLink)}
                      aria-label={`${slide.buttonText} - View ${slide.category}`}
                    >
                      {slide.buttonText}
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div
                    className={`mt-4 sm:mt-6 text-xs sm:text-sm text-amber-200 font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-1000 ease-out ${
                      isVisible && isActive
                        ? "translate-y-0 opacity-80"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isActive ? "900ms" : "0ms",
                    }}
                  >
                    {slide.category}
                  </div>
                </div>

                {/* SEO metadata */}
                <meta itemProp="keywords" content={slide.keywords} />
                <meta itemProp="category" content={slide.category} />
                <meta itemProp="position" content={String(slideIndex + 1)} />
              </div>
            );
          })}
        </div>

        {/* Navigation arrows - Desktop */}
        <button
          className="hidden lg:group-hover:flex absolute top-1/2 -translate-y-1/2 left-3 xl:left-5 z-20 
                     cursor-pointer bg-black/30 hover:bg-black/50 text-white p-3 xl:p-4 rounded-full 
                     transition-all duration-300 backdrop-blur-sm items-center justify-center
                     focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={prevSlide}
          aria-label="Previous slide - View previous rice variety"
          type="button"
        >
          <ChevronLeft size={24} className="xl:w-7 xl:h-7" />
        </button>

        <button
          className="hidden lg:group-hover:flex absolute top-1/2 -translate-y-1/2 right-3 xl:right-5 z-20 
                     cursor-pointer bg-black/30 hover:bg-black/50 text-white p-3 xl:p-4 rounded-full 
                     transition-all duration-300 backdrop-blur-sm items-center justify-center
                     focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={nextSlide}
          aria-label="Next slide - View next rice variety"
          type="button"
        >
          <ChevronRight size={24} className="xl:w-7 xl:h-7" />
        </button>

        {/* Navigation arrows - Mobile */}
        <button
          className="lg:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20 
                     cursor-pointer bg-black/40 active:bg-black/60 text-white p-2.5 rounded-full 
                     transition-all duration-200 backdrop-blur-sm"
          onClick={prevSlide}
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="lg:hidden absolute top-1/2 -translate-y-1/2 right-2 z-20 
                     cursor-pointer bg-black/40 active:bg-black/60 text-white p-2.5 rounded-full 
                     transition-all duration-200 backdrop-blur-sm"
          onClick={nextSlide}
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {heroSlides.map((slide, slideIndex) => (
            <button
              key={`indicator-${slideIndex}`}
              onClick={() => goToSlide(slideIndex)}
              className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 overflow-hidden
                ${
                  currentIndex === slideIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }
                focus:outline-none focus:ring-2 focus:ring-white/50`}
              aria-label={`Go to slide ${slideIndex + 1} - ${slide.category}`}
              type="button"
            />
          ))}
        </div>

        {/* Swipe indicator */}
        <div className="lg:hidden absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-white/70 text-xs sm:text-sm">
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-4 h-0.5 bg-white/50 rounded animate-pulse"></div>
            <span className="font-medium">Swipe for more varieties</span>
            <div className="w-4 h-0.5 bg-white/50 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Autoplay controls */}
        <button
          className="absolute top-4 right-4 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          type="button"
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Screen reader live region */}
        <div
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
          role="status"
        >
          Slide {currentIndex + 1} of {heroSlides.length}:{" "}
          {currentSlide.title.replace(/\n/g, " ")} - {currentSlide.subtitle}
          {isAutoPlaying ? " (Autoplay enabled)" : " (Autoplay paused)"}
        </div>
      </section>
    </>
  );
};

export default Banner;
