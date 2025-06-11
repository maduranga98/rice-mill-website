"use client";

import React, { useState } from "react";
import { Eye, Phone, ArrowRight, Package, Award } from "lucide-react";

// Updated product data with bag sizes and correct details
const products = [
  {
    id: "sudu-kakulu-5kg",
    name: "Sudu Kakulu Rice - 5kg",
    nameMultilingual:
      "Sudu Kakulu Rice – 5kg | සුදු කකුළු සහල් – 5kg | வெள்ளை ககুலு அরிசி – 5kg",
    image: "/products/2.webp",
    size: "5kg",
    weight: "5",
    description:
      "Soft and light white raw rice, ideal for daily meals and porridge.",
    detailedDescription:
      "Our 5kg Sudu Kakulu Rice pack offers soft, white raw rice, ideal for everyday Sri Lankan meals. This high-quality white rice cooks quickly and is easy to digest, making it a perfect choice for porridge, lunch, or dinner.",
    labels: ["Freshly milled", "Easy to cook"],
    tagline: "Your everyday choice for fluffy, light rice.",
    type: "sudu",
    isPopular: false,
  },
  {
    id: "sudu-kakulu-10kg",
    name: "Sudu Kakulu Rice - 10kg",
    nameMultilingual:
      "Sudu Kakulu Rice – 10kg | සුදු කකුළු සහල් – 10kg | வெள்ளை ககুলু அரিசি – 10kg",
    image: "/products/5.webp",
    size: "10kg",
    weight: "10",
    description: "A balanced choice for daily meals and special recipes.",
    detailedDescription:
      "This 10kg pack of Sudu Kakulu white raw rice is ideal for families looking for soft, fluffy rice that's easy to cook and digest. A staple in Sri Lankan kitchens, it is perfect for daily meals and traditional dishes.",
    labels: ["Family Pack", "Soft & Digestible"],
    tagline: "Perfect for daily family meals.",
    type: "sudu",
    isPopular: false,
  },
  {
    id: "sudu-kakulu-25kg",
    name: "Sudu Kakulu Rice - 25kg",
    nameMultilingual:
      "Sudu Kakulu Rice – 25kg | සුදු කකුළු සහල් – 25kg | வெள்ளை ককুলু अरिसि – 25kg",
    image: "/products/3.webp",
    size: "25kg",
    weight: "25",
    description:
      "Bulk pack for restaurants or large households. Long shelf life and consistent texture.",
    detailedDescription:
      "Get the best value with this 25kg bulk pack of Sudu Kakulu white raw rice. Popular among restaurants and large households, this premium quality rice is soft, easy to prepare, and a trusted daily staple.",
    labels: ["Economical Choice", "Bulk Pack"],
    tagline: "Trusted by families and businesses alike.",
    type: "sudu",
    isPopular: false,
  },
  {
    id: "samba-kakulu-5kg",
    name: "Samba Kakulu Rice - 5kg",
    nameMultilingual:
      "Samba Kakulu Rice – 5kg | සම්බා කකුළු සහල් – 5kg | சம்பா ககுلு अरिसि – 5kg",
    image: "/products/1.webp",
    size: "5kg",
    weight: "5",
    description:
      "Aromatic and firm white rice, great for special dishes and celebrations.",
    detailedDescription:
      "This 5kg pack of Samba Kakulu rice is known for its round grains, firm texture, and natural aroma. Ideal for biryani, fried rice, and festive meals, it's a top-quality Sri Lankan samba rice.",
    labels: ["Rich Aroma", "Premium Texture"],
    tagline: "Savor the taste of quality Samba.",
    type: "samba",
    isPopular: false,
  },
  {
    id: "samba-kakulu-25kg",
    name: "Samba Kakulu Rice - 25kg",
    nameMultilingual:
      "Samba Kakulu Rice – 25kg | සම්බා කකුළු සහල් – 25kg | சம்பா ககுলு அरিசি – 25kg",
    image: "/products/4.webp",
    size: "25kg",
    weight: "25",
    description:
      "For larger families and restaurants, perfect for traditional Sri Lankan meals and commercial kitchens.",
    detailedDescription:
      "For larger families and restaurants, the 25kg Samba Kakulu rice pack offers excellent value. With its rich aroma and firm texture, it's perfect for traditional Sri Lankan meals and commercial kitchens.",
    labels: ["Rich Aroma", "Commercial Grade", "Bulk Pack"],
    tagline: "Premium Sri Lankan firm-grain rice for wholesale needs.",
    type: "samba",
    isPopular: false,
  },
];

// Simple Product Card Component with fixed button alignment
const ProductCard = ({ product, onLearnMore, onContactUs }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getWeightColor = (weight) => {
    if (weight === "5") return "bg-blue-600";
    if (weight === "10") return "bg-green-600";
    if (weight === "25") return "bg-purple-600";
    return "bg-amber-600";
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {product.isPopular && (
        <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          Popular
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} ${product.size}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Weight Badge */}
        <div
          className={`absolute top-3 right-3 ${getWeightColor(
            product.weight
          )} text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg`}
        >
          {product.size}
        </div>
      </div>

      {/* Product Info - Flexbox for equal height */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
            {product.name}
          </h3>
          <div className="text-xs text-gray-500 font-medium">
            {product.type === "samba" ? "Samba Kakulu" : "Sudu Kakulu"}
          </div>
        </div>

        {/* Description - Takes available space */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow mb-4">
          {product.description}
        </p>

        {/* Action Buttons - Always at bottom */}
        <div className="space-y-2 mt-auto">
          <button
            onClick={() => onLearnMore(product)}
            className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center group/btn"
          >
            <Eye className="w-4 h-4 mr-2" />
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onContactUs}
            className="w-full border-2 border-green-600 text-green-600 py-2.5 px-4 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Details Modal
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {product.type === "samba"
                ? "Samba Kakulu Rice"
                : "Sudu Kakulu Rice"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Product Image and Basic Info */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <div className="relative aspect-square bg-white rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.nameMultilingual}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    {product.size}
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900">
                      Premium Quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Available Size: {product.size}
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Key Benefits:
                  </h4>
                  <div className="space-y-1">
                    {product.labels.map((label, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-green-700"
                      >
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Product Details:</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Quality Highlight */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">
                Why Choose This Product:
              </h4>
              <p className="text-amber-700 italic">"{product.tagline}"</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToContact}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact for Pricing & Orders
            </button>
            <button
              onClick={onClose}
              className="sm:w-auto px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Products Section Component
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-white via-green-50/30 to-amber-50/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4 mr-2" />
            Premium Rice Collection
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">
            Our <span className="text-amber-600">Premium</span> Products
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our carefully selected range of premium quality rice
            varieties, each crafted with traditional methods and modern quality
            standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto mb-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onLearnMore={handleLearnMore}
              onContactUs={handleContactUs}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Products;
