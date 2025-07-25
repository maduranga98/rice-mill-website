// src/app/blog/page.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  User,
  Search,
  Filter,
  Globe,
  Heart,
  Factory,
  Award,
  ChevronRight,
} from "lucide-react";

// Import your blog components
import Blog1 from "@/components/blog/Blog1";
import Blog2 from "@/components/blog/Blog2";
import Blog3 from "@/components/blog/Blog3";
import Blog4 from "@/components/blog/Blog4";

// Blog articles data
const blogArticles = [
  {
    id: "global-rice-map-50-countries",
    title:
      "The Global Rice Map: 50+ Countries Where Rice is the Primary Staple Food",
    excerpt:
      "Discover which countries eat rice as their main food staple. Explore rice consumption patterns, cultural significance, and dietary habits across Asia, Africa, and Latin America.",
    category: "Global Rice Markets",
    readTime: "15 min read",
    publishDate: "2025-01-15",
    author: "Sajith Rice Mill Research Team",
    tags: [
      "global markets",
      "rice consumption",
      "food security",
      "export opportunities",
    ],
    image: "/blog/global-rice-map.webp",
    fallbackIcon: Globe,
    color: "from-green-500 to-blue-500",
    component: Blog1,
    featured: true,
  },
  {
    id: "paddy-fields-to-perfect-grains",
    title:
      "From Paddy Fields to Perfect Grains: The Traditional Sri Lankan Rice Processing Journey",
    excerpt:
      "Discover the fascinating journey of Sri Lankan rice from paddy fields to your table. Learn about traditional and modern processing methods that preserve quality and nutrition.",
    category: "Rice Processing & Technology",
    readTime: "18 min read",
    publishDate: "2025-02-20",
    author: "Sajith Rice Mill Processing Team",
    tags: [
      "rice processing",
      "traditional methods",
      "quality control",
      "technology",
    ],
    image: "/blog/rice-processing-journey.webp",
    fallbackIcon: Factory,
    color: "from-green-600 to-amber-600",
    component: Blog2,
    featured: true,
  },
  {
    id: "samba-kakulu-ancient-grain-superfood",
    title:
      "Samba Kakulu Rice: Sri Lanka's Ancient Grain Superfood Taking the World by Storm",
    excerpt:
      "Discover Samba Kakulu rice - Sri Lanka's traditional red rice variety packed with nutrients, fiber, and authentic flavor. Perfect for healthy eating and gourmet cooking.",
    category: "Healthy Living & Nutrition",
    readTime: "12 min read",
    publishDate: "2025-03-05",
    author: "Sajith Rice Mill Nutrition Team",
    tags: [
      "samba kakulu",
      "superfood",
      "healthy eating",
      "red rice",
      "nutrition",
    ],
    image: "/blog/samba-kakulu-superfood.webp",
    fallbackIcon: Heart,
    color: "from-red-500 to-orange-500",
    component: Blog3,
    featured: false,
  },
  {
    id: "sudu-kakulu-premium-white-rice",
    title:
      "Sudu Kakulu Rice: Sri Lanka's Premium White Rice That's Revolutionizing Global Kitchens",
    excerpt:
      "Discover Sudu Kakulu rice from Sri Lanka - premium white rice with exceptional taste, nutritional benefits, and perfect texture for Asian cuisine.",
    category: "Premium Rice & Cooking",
    readTime: "10 min read",
    publishDate: "2025-04-10",
    author: "Sajith Rice Mill Culinary Team",
    tags: ["sudu kakulu", "premium rice", "cooking", "white rice", "culinary"],
    image: "/blog/sudu-kakulu-premium-rice.webp",
    fallbackIcon: Award,
    color: "from-blue-500 to-cyan-500",
    component: Blog4,
    featured: false,
  },
];

const categories = [
  "All Categories",
  "Global Rice Markets",
  "Rice Processing & Technology",
  "Healthy Living & Nutrition",
  "Premium Rice & Cooking",
];

// Image component with fallback
const ArticleImage = ({
  src,
  alt,
  fallbackIcon: FallbackIcon,
  color,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageError ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-all duration-500 ${
              imageLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
            }`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {imageLoading && (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 flex items-center justify-center`}
            >
              <FallbackIcon className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white animate-pulse" />
            </div>
          )}
        </>
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 flex items-center justify-center`}
        >
          <FallbackIcon className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white" />
        </div>
      )}
    </div>
  );
};

const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter articles based on category and search
  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Categories" ||
      article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(
    (article) => article.featured
  );
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // If an article is selected, render that component
  if (selectedArticle) {
    const ArticleComponent = selectedArticle.component;
    return (
      <div className="min-h-screen">
        {/* Back to Blog Button */}
        <div className="fixed top-16 sm:top-20 left-2 sm:left-4 z-40">
          <button
            onClick={() => setSelectedArticle(null)}
            className="bg-white shadow-lg hover:shadow-xl border border-gray-200 text-gray-700 hover:text-gray-900 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
            <span className="font-medium hidden sm:inline">Back to Blog</span>
            <span className="font-medium sm:hidden">Back</span>
          </button>
        </div>
        <ArticleComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/patterns/rice-pattern.svg')] opacity-10" />

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Rice Knowledge Blog
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-green-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert insights about Sri Lankan rice varieties, cooking techniques,
            health benefits, and traditional farming wisdom from Sajith Rice
            Mill
          </p>

          {/* Blog Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">
                {blogArticles.length}
              </div>
              <div className="text-green-200 text-xs sm:text-sm">
                Expert Articles
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">
                {categories.length - 1}
              </div>
              <div className="text-green-200 text-xs sm:text-sm">
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">2,500+</div>
              <div className="text-green-200 text-xs sm:text-sm">
                Years Heritage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64">
                    <ArticleImage
                      src={article.image}
                      alt={`${article.title} - Featured article about ${article.category}`}
                      fallbackIcon={article.fallbackIcon}
                      color={article.color}
                      className="w-full h-full"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {article.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-yellow-400 text-yellow-900 px-2 sm:px-3 py-1 rounded-full">
                      <span className="text-xs sm:text-sm font-bold">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">
                            {article.author.split(" ")[0]}...
                          </span>
                          <span className="sm:hidden">Author</span>
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm">
                        {formatDate(article.publishDate)}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              All Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48">
                    <ArticleImage
                      src={article.image}
                      alt={`${article.title} - Article about ${article.category}`}
                      fallbackIcon={article.fallbackIcon}
                      color={article.color}
                      className="w-full h-full"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-medium text-gray-700">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span>{formatDate(article.publishDate)}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              No Articles Found
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Try adjusting your search terms or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Newsletter Signup */}
      {/* <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Rice Wisdom
          </h2>
          <p className="text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Get the latest insights about rice varieties, cooking techniques,
            and farming wisdom delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
            <button className="bg-white text-green-600 px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BlogPage;
