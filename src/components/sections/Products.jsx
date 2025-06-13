"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

// Enhanced product data with SEO keywords
const products = [
  {
    id: "sudu-kakulu-5kg",
    name: "Sudu Kakulu Rice - 5kg",
    nameMultilingual:
      "Sudu Kakulu Rice – 5kg | සුදු කැකුළු සහල් – 5kg | வெள்ளை அரிசி – 5kg",
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
    keywords:
      "සුදු කැකුළු, white rice, premium rice, daily meals rice, easy cook rice",
    category: "Premium White Rice",
    uses: "Daily meals, porridge, family cooking",
  },
  {
    id: "sudu-kakulu-10kg",
    name: "Sudu Kakulu Rice - 10kg",
    nameMultilingual:
      "Sudu Kakulu Rice – 10kg | සුදු කැකුළු සහල් – 10kg | வெள்ளை அரிசி – 10kg",
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
    keywords:
      "සුදු කැකුළු, family pack rice, bulk rice, household rice, 10kg rice",
    category: "Family Pack Rice",
    uses: "Family meals, traditional dishes, daily cooking",
  },
  {
    id: "sudu-kakulu-25kg",
    name: "Sudu Kakulu Rice - 25kg",
    nameMultilingual:
      "Sudu Kakulu Rice – 25kg | සුදු කැකුළු සහල් – 25kg | வெள்ளை அரிசி – 25kg",
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
    keywords:
      "සුදු කැකුළු, bulk rice, wholesale rice, restaurant rice, 25kg rice, commercial rice",
    category: "Bulk Commercial Rice",
    uses: "Restaurants, large households, commercial kitchens, wholesale",
  },
  {
    id: "samba-kakulu-5kg",
    name: "Samba Kakulu Rice - 5kg",
    nameMultilingual:
      "Samba Kakulu Rice – 5kg | සම්බා කැකුළු සහල් – 5kg | சம்பா பச்சை அரிசி – 5kg",
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
    keywords:
      "සම්බා කැකුළු, samba rice, aromatic rice, premium rice, festive rice, short grain rice",
    category: "Premium Samba Rice",
    uses: "Biryani, fried rice, special occasions, celebrations",
  },
  {
    id: "samba-kakulu-25kg",
    name: "Samba Kakulu Rice - 25kg",
    nameMultilingual:
      "Samba Kakulu Rice – 25kg | සම්බා කැකුළු සහල් – 25kg | சம்பா பச்சை அரிசி – 25kg",
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
    keywords:
      "සම්බා කැකුළු, bulk samba rice, commercial samba, restaurant rice, traditional rice, 25kg samba",
    category: "Bulk Premium Samba",
    uses: "Commercial kitchens, large families, traditional cooking, wholesale",
  },
];

// Enhanced Product Card Component
const ProductCard = ({ product, onLearnMore, onContactUs }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getWeightColor = (weight) => {
    if (weight === "5") return "bg-blue-600";
    if (weight === "10") return "bg-green-600";
    if (weight === "25") return "bg-purple-600";
    return "bg-amber-600";
  };

  return (
    <article
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      itemScope
      itemType="https://schema.org/Product"
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
          alt={`${
            product.name
          } - Sajith Rice Mill premium ${product.category.toLowerCase()} from Sri Lanka - ${
            product.uses
          }`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          itemProp="image"
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

      {/* Product Info */}
      <div className="p-4 lg:p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <div className="mb-3">
          <h3
            className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-700 transition-colors line-clamp-2"
            itemProp="name"
          >
            {product.name}
          </h3>
          <div
            className="text-sm text-gray-500 font-medium"
            itemProp="category"
          >
            {product.type === "samba" ? "Samba Kakulu" : "Sudu Kakulu"}
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 flex-grow mb-4"
          itemProp="description"
        >
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="space-y-2 mt-auto">
          <button
            onClick={() => onLearnMore(product)}
            className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
            aria-label={`Learn more about ${product.name}`}
          >
            Learn More
          </button>

          <button
            onClick={onContactUs}
            className="w-full border-2 border-green-600 text-green-600 py-2.5 px-4 rounded-lg font-medium hover:bg-green-50 transition-colors text-sm"
            aria-label={`Contact us about ${product.name}`}
          >
            Contact Us
          </button>
        </div>

        {/* Hidden Schema Data */}
        <div className="sr-only">
          <span itemProp="brand">Sajith Rice Mill</span>
          <span itemProp="productID">{product.id}</span>
          <span itemProp="keywords">{product.keywords}</span>
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="availability">InStock</span>
            <span itemProp="priceCurrency">LKR</span>
            <span itemProp="price">Best Price</span>
          </div>
        </div>
      </div>
    </article>
  );
};

// Enhanced Product Modal
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
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className="bg-white rounded-xl lg:rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl my-4 sm:my-8 flex flex-col shadow-2xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 lg:p-6 border-b bg-white rounded-t-xl lg:rounded-t-2xl flex-shrink-0">
          <div className="flex-1 pr-3 min-w-0">
            <h2
              id="product-modal-title"
              className="text-lg lg:text-xl font-bold text-gray-900 truncate"
            >
              {product.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {product.type === "samba"
                ? "Samba Kakulu Rice"
                : "Sudu Kakulu Rice"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 lg:w-10 h-9 lg:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0 ml-2"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-5 lg:p-6 space-y-5 lg:space-y-6">
            {/* Product Image */}
            <div className="w-full flex justify-center">
              <div className="relative w-56 h-56 lg:w-64 lg:h-64 bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.nameMultilingual} - Premium quality ${product.category} from Sajith Rice Mill`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-bold">
                  {product.size}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base font-semibold text-gray-900">
                    Premium Quality
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base text-gray-700">
                    Size: {product.size}
                  </span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  Key Benefits:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {product.labels.map((label, index) => (
                    <div
                      key={index}
                      className="text-sm md:text-base text-green-700"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Multilingual Names */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Product Names:
              </h3>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-sm md:text-base leading-relaxed text-gray-700 break-words">
                  {product.nameMultilingual}
                </p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Product Details:
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Best Uses */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Best Uses:
              </h3>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm md:text-base text-blue-700">
                  {product.uses}
                </p>
              </div>
            </div>

            {/* Quality Highlight */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h4 className="text-lg font-semibold text-amber-800 mb-2">
                Why Choose This Product:
              </h4>
              <p className="text-sm md:text-base text-amber-700 italic leading-relaxed">
                "{product.tagline}"
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 lg:p-6 border-t bg-gray-50 rounded-b-xl lg:rounded-b-2xl flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToContact}
              className="flex-1 bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm md:text-base"
            >
              Contact for Orders
            </button>
            <button
              onClick={onClose}
              className="sm:w-auto px-4 py-2.5 text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm md:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Products Section Component with SEO
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add structured data for products
  useEffect(() => {
    const productsSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Premium Sri Lankan Rice Products",
      description:
        "Complete range of traditional rice varieties including Sudu Kakulu and Samba Kakulu rice from Sajith Rice Mill",
      url: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com/"
      }/#products`,
      mainEntity: {
        "@type": "ItemList",
        name: "Rice Products Collection",
        description:
          "Premium Sri Lankan rice varieties - සුදු කැකුළු and සම්බා කැකුළු",
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "Product",
          position: index + 1,
          name: product.name,
          description: product.description,
          category: product.category,
          brand: "Sajith Rice Mill",
          productID: product.id,
          image: `${
            process.env.NEXT_PUBLIC_SITE_URL ||
            "https://www.sajithricemill.com/"
          }${product.image}`,
          keywords: product.keywords,
          offers: {
            "@type": "Offer",
            availability: "InStock",
            priceCurrency: "LKR",
            price: "Best Price",
          },
        })),
      },
      provider: {
        "@type": "Organization",
        name: "Sajith Rice Mill",
        description: "Premium Sri Lankan rice supplier since 2009",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(productsSchema);
    script.id = "products-schema";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("products-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
    <>
      {/* Hidden SEO content with Sinhala keywords */}
      <div className="sr-only">
        <h2>Sajith Rice Mill Products - සජිත් සහල් මෝල නිෂ්පාදන</h2>
        <p>
          Premium Sri Lankan rice varieties available: සුදු කැකුළු (Sudu
          Kakulu), සම්බා කැකුළු (Samba Kakulu), රතු කැකුළු (Ratu Kakulu).
          Available in 5kg, 10kg, 25kg packages. Best prices for bulk orders,
          wholesale rates, restaurant supplies, family packs. ප්‍රිමියම්
          තත්ත්වය, තොග මිල, පවුල් ඇසුරුම්, අවන්හල් සැපයුම්.
        </p>
        <p>
          Rice product categories: Premium white rice (ප්‍රිමියම් සුදු සහල්),
          Traditional samba rice (සම්ප්‍රදායික සම්බා සහල්), Organic rice
          varieties (ඔර්ගනික් සහල් වර්ග), Chemical-free rice (රසායනික නොමැති
          සහල්), Daily cooking rice (දෛනික පිසීම සඳහා සහල්).
        </p>
        <p>
          Uses: Daily meals (දෛනික ආහාර), porridge (කැඳ), biryani (බිරියානි),
          fried rice (සහල් බත්), special occasions (විශේෂ අවස්ථා), commercial
          cooking (වාණිජ පිසීම), family cooking (පවුල් පිසීම).
        </p>
      </div>

      <section
        id="products"
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-green-50/30 to-amber-50/30"
        role="region"
        aria-labelledby="products-heading"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              Premium Rice Collection
            </div>

            {/* Main Heading - Consistent Typography */}
            <div className="mb-8">
              <h2
                id="products-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-4"
                itemProp="name"
              >
                Our <span className="text-amber-600">Premium</span> Products
              </h2>

              {/* Subtitle */}
              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                itemProp="description"
              >
                Discover our carefully selected range of premium quality rice
                varieties, each crafted with traditional methods and modern
                quality standards.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 xl:gap-8 max-w-7xl mx-auto mb-12 lg:mb-16"
            role="list"
            aria-label="Rice products collection"
          >
            {products.map((product, index) => (
              <div key={product.id} role="listitem">
                <ProductCard
                  product={product}
                  onLearnMore={handleLearnMore}
                  onContactUs={handleContactUs}
                />
              </div>
            ))}
          </div>

          {/* Additional Product Information */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl p-6 shadow-md border border-gray-100 max-w-2xl mx-auto">
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Need Custom Orders?
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-1">
                  Bulk orders, wholesale rates, and custom packaging available
                </p>
                <p className="text-sm text-green-600 font-medium">
                  Best prices guaranteed for large quantities
                </p>
              </div>
              <button
                onClick={handleContactUs}
                className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm md:text-base"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </section>
    </>
  );
};

export default Products;
