"use client";

import React, { useState } from "react";
import { Eye, Phone, ArrowRight, Package, Award, X } from "lucide-react";

// Updated product data with bag sizes and correct details
const products = [
  {
    id: "sudu-kakulu-5kg",
    name: "Sudu Kakulu Rice - 5kg",
    nameMultilingual:
      "Sudu Kakulu Rice – 5kg | සුදු කකුළු සහල් – 5kg | வெள்ளை ககுলு அرिসি – 5kg",
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
      "Sudu Kakulu Rice – 10kg | සුදු කකුළු සහල් – 10kg | வெள்ளை ககুলু அرिசি – 10kg",
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
      "Sudu Kakulu Rice – 25kg | සුදු කකුළු සහල් – 25kg | வெள்ளை ককুলু अरिसি – 25kg",
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
      "Samba Kakulu Rice – 5kg | සම්බා කකුළු සහල් – 5kg | சம்பா ககுলு अरिसि – 5kg",
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
      "Samba Kakulu Rice – 25kg | සම්බා කකුළු සහල් – 25kg | சம்பா ககுலு अरिसि – 25kg",
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

// Responsive Product Card Component
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
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
          Popular
        </div>
      )}

      {/* Product Image - Responsive */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} ${product.size}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Weight Badge - Responsive */}
        <div
          className={`absolute top-2 sm:top-3 right-2 sm:right-3 ${getWeightColor(
            product.weight
          )} text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-lg`}
        >
          {product.size}
        </div>
      </div>

      {/* Product Info - Responsive Padding */}
      <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <div className="mb-2 sm:mb-3">
          <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1 group-hover:text-green-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="text-xs text-gray-500 font-medium">
            {product.type === "samba" ? "Samba Kakulu" : "Sudu Kakulu"}
          </div>
        </div>

        {/* Description - Responsive Text */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow mb-3 sm:mb-4">
          {product.description}
        </p>

        {/* Action Buttons - Responsive */}
        <div className="space-y-1.5 sm:space-y-2 mt-auto">
          <button
            onClick={() => onLearnMore(product)}
            className="w-full bg-green-600 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center group/btn text-xs sm:text-sm"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Learn More
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onContactUs}
            className="w-full border-2 border-green-600 text-green-600 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center text-xs sm:text-sm"
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

// Responsive Product Modal
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
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-xs sm:max-w-lg md:max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] flex flex-col shadow-2xl">
        {/* Modal Header - Responsive */}
        <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b">
          <div className="flex-1 pr-3">
            <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 line-clamp-1">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {product.type === "samba"
                ? "Samba Kakulu Rice"
                : "Sudu Kakulu Rice"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Content - Responsive Scrolling */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
            {/* Product Image and Basic Info - Responsive Layout */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Image */}
              <div className="w-full">
                <div className="relative aspect-square bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 max-w-xs mx-auto sm:max-w-none">
                  <img
                    src={product.image}
                    alt={product.nameMultilingual}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-bold">
                    {product.size}
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                      Premium Quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="text-gray-700 text-xs sm:text-sm">
                      Available Size: {product.size}
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2 text-xs sm:text-sm">
                    Key Benefits:
                  </h4>
                  <div className="space-y-1">
                    {product.labels.map((label, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-xs sm:text-sm text-green-700"
                      >
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                Product Details:
              </h3>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                {product.detailedDescription}
              </p>
            </div>

            {/* Quality Highlight */}
            <div className="bg-amber-50 rounded-lg p-3 sm:p-4 border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2 text-xs sm:text-sm">
                Why Choose This Product:
              </h4>
              <p className="text-amber-700 italic text-xs sm:text-sm">
                "{product.tagline}"
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer - Responsive */}
        <div className="p-3 sm:p-4 lg:p-6 border-t bg-gray-50 rounded-b-xl sm:rounded-b-2xl">
          <div className="flex flex-col gap-2 sm:gap-3">
            <button
              onClick={scrollToContact}
              className="w-full bg-green-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Contact for Pricing & Orders
            </button>
            <button
              onClick={onClose}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium text-xs sm:text-sm"
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
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-green-50/30 to-amber-50/30"
    >
      <div className="container mx-auto px-4">
        {/* Header - Responsive */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Premium Rice Collection
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-green-900">
            Our <span className="text-amber-600">Premium</span> Products
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8">
            Discover our carefully selected range of premium quality rice
            varieties, each crafted with traditional methods and modern quality
            standards.
          </p>
        </div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16">
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
