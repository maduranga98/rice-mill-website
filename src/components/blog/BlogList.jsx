// src/components/blog/BlogList.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ChevronRight, Search } from "lucide-react";
import {
  blogPosts,
  getFeaturedPost,
  getPostsByCategory,
} from "../../lib/blogData";

const categories = [
  { name: "All Posts", slug: "all", sinhala: "සියලු ලිපි" },
  { name: "Rice Varieties", slug: "rice-varieties", sinhala: "සහල් වර්ග" },
  {
    name: "Health & Nutrition",
    slug: "health-nutrition",
    sinhala: "සෞඛ්‍යය සහ පෝෂණය",
  },
  { name: "Cooking Tips", slug: "cooking-tips", sinhala: "පිසීමේ උපදෙස්" },
  { name: "Agriculture", slug: "agriculture", sinhala: "කෘෂිකර්මාන්තය" },
  {
    name: "Tips & Guides",
    slug: "tips-guides",
    sinhala: "උපදෙස් සහ මාර්ගෝපදේශ",
  },
];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts
  const filteredPosts = getPostsByCategory(selectedCategory).filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.titleSinhala.includes(searchTerm) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  const featuredPost = getFeaturedPost();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Tag className="w-4 h-4 mr-2" />
            Rice Knowledge & Insights
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-green-900">
            Rice Wisdom Blog
            <span className="text-amber-600 block text-2xl md:text-3xl lg:text-4xl mt-2">
              සහල් ප්‍රඥා බ්ලොග්
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover expert insights about Sri Lankan rice varieties, cooking
            techniques, health benefits, and traditional farming wisdom from
            Sajith Rice Mill.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles... (සොයන්න)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Article
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full relative bg-gradient-to-br from-green-200 to-amber-200 flex items-center justify-center">
                    <span className="text-gray-600">
                      Featured: {featuredPost.title.substring(0, 30)}...
                    </span>
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {featuredPost.title}
                  </h3>
                  <h4 className="text-lg text-gray-600 mb-4">
                    {featuredPost.titleSinhala}
                  </h4>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    Read Full Article
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md"
                }`}
              >
                <div className="text-sm">{category.name}</div>
                <div className="text-xs opacity-80">{category.sinhala}</div>
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200"
              >
                {/* Post Image */}
                <div className="h-48 relative bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center">
                  <span className="text-gray-600 text-sm text-center px-4">
                    {post.title.substring(0, 50)}...
                  </span>
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <h4 className="text-sm text-gray-600 mb-3 line-clamp-1">
                    {post.titleSinhala}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center group"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-medium">No articles found</h3>
                <p className="text-sm">
                  Try searching with different keywords or select another
                  category
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Rice Wisdom
            </h3>
            <p className="text-green-100 mb-6">
              Get the latest articles about rice varieties, cooking tips, and
              farming insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
