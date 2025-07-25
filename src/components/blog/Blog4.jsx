import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Star,
  TrendingUp,
  ChevronRight,
  Share2,
  Award,
  ChefHat,
  Droplets,
  Zap,
  Eye,
  Globe,
  CheckCircle,
  Heart,
  Leaf,
  Shield,
  Utensils,
  Package,
} from "lucide-react";

// Complete blog data structure for Sudu Kakulu rice content
const blogData = {
  id: "sudu-kakulu-rice-premium-white-rice-global-kitchens",
  title:
    "Sudu Kakulu Rice: Sri Lanka's Premium White Rice That's Revolutionizing Global Kitchens",
  metaDescription:
    "Discover Sudu Kakulu rice from Sri Lanka - premium white rice with exceptional taste, nutritional benefits, and perfect texture for Asian cuisine. Order authentic Sri Lankan rice online.",
  author: "Sajith Rice Mill Culinary Team",
  publishDate: "2024-01-30",
  readTime: "10 min read",
  category: "Premium Rice & Cooking",
  tags: [
    "sudu kakulu",
    "premium white rice",
    "sri lankan rice",
    "asian cuisine",
    "cooking rice",
    "healthy grains",
  ],
  coverImage: "/blog/sudu-kakulu-premium-rice.webp",

  content: {
    introduction: `Sudu Kakulu rice stands as one of Sri Lanka's most celebrated white rice varieties, renowned for its exceptional quality, distinctive aroma, and superior cooking characteristics. Grown in the fertile paddy fields of Sri Lanka's Central and North Central provinces, this premium rice variety has been nourishing families for generations and is now capturing the attention of international food enthusiasts.`,

    whatIsSuduKakulu: {
      title: "What is Sudu Kakulu Rice? The Pride of Sri Lankan Agriculture",
      description: `The name "Sudu Kakulu" translates to "white grain" in Sinhala, perfectly describing this rice's pristine appearance and refined texture. Unlike ordinary white rice, Sudu Kakulu maintains its individual grain structure when cooked, making it ideal for a wide range of culinary applications from traditional Sri Lankan dishes to international cuisine.`,
      keyCharacteristics: [
        {
          feature: "Pristine Appearance",
          description: "Clean, uniform white grains with minimal broken pieces",
        },
        {
          feature: "Superior Texture",
          description: "Maintains individual grain structure when cooked",
        },
        {
          feature: "Distinctive Aroma",
          description: "Subtle, clean fragrance that enhances dishes",
        },
        {
          feature: "Regional Heritage",
          description: "Grown in Central and North Central provinces",
        },
      ],
    },

    nutritionalProfile: {
      title: "Exceptional Nutritional Profile: More Than Just Carbohydrates",
      benefits: [
        {
          nutrient: "High-Quality Carbohydrates",
          benefit:
            "Provides sustained energy release, perfect for active lifestyles and growing families",
          icon: Zap,
          color: "blue",
        },
        {
          nutrient: "Essential Minerals",
          benefit:
            "Rich in manganese, magnesium, and phosphorus, supporting bone health and metabolic functions",
          icon: Shield,
          color: "green",
        },
        {
          nutrient: "B-Vitamin Complex",
          benefit:
            "Contains thiamine, niacin, and riboflavin essential for nervous system health and energy metabolism",
          icon: Heart,
          color: "purple",
        },
        {
          nutrient: "Low Glycemic Properties",
          benefit:
            "Moderate glycemic impact compared to many white rice varieties, suitable for balanced diets",
          icon: TrendingUp,
          color: "amber",
        },
        {
          nutrient: "Gluten-Free",
          benefit:
            "Naturally gluten-free, perfect for those with celiac disease or gluten sensitivity",
          icon: Leaf,
          color: "emerald",
        },
      ],
    },

    chefChoice: {
      title: "Why International Chefs Choose Sudu Kakulu Rice",
      reasons: [
        {
          category: "Perfect Texture and Consistency",
          description:
            "Professional chefs worldwide are discovering what Sri Lankan families have known for centuries - Sudu Kakulu rice delivers exceptional results every time. The grains remain separate and fluffy when cooked properly, never becoming sticky or mushy.",
          benefits: [
            "Separate, fluffy grains",
            "Never sticky or mushy",
            "Consistent results",
            "Professional quality",
          ],
          icon: Award,
        },
        {
          category: "Versatile Culinary Applications",
          description:
            "From traditional Asian dishes to international cuisine, Sudu Kakulu adapts beautifully to any cooking style.",
          benefits: [
            "Asian cuisine perfection",
            "International adaptability",
            "Traditional preparation",
            "Modern fusion",
          ],
          icon: ChefHat,
        },
        {
          category: "Superior Absorption Properties",
          description:
            "Sudu Kakulu rice absorbs flavors beautifully while maintaining its structural integrity, making it the preferred choice for complex dishes requiring spice and sauce absorption.",
          benefits: [
            "Excellent flavor absorption",
            "Maintains structure",
            "Perfect for spiced dishes",
            "Sauce compatibility",
          ],
          icon: Droplets,
        },
      ],
    },

    culinaryApplications: {
      title: "Culinary Applications and Cooking Styles",
      categories: [
        {
          cuisine: "Asian Cuisine",
          dishes: [
            "Fried rice with perfect texture",
            "Aromatic biryanis",
            "Curry accompaniments",
            "Steamed rice perfection",
          ],
          icon: Globe,
          color: "from-red-50 to-orange-50 border-red-200",
        },
        {
          cuisine: "International Dishes",
          dishes: [
            "Creamy risottos",
            "Fresh rice salads",
            "Nutritious grain bowls",
            "Stuffed vegetables",
          ],
          icon: Utensils,
          color: "from-blue-50 to-cyan-50 border-blue-200",
        },
        {
          cuisine: "Traditional Sri Lankan",
          dishes: [
            "Kiribath (milk rice)",
            "Coconut rice variations",
            "Festival preparations",
            "Daily rice and curry",
          ],
          icon: Star,
          color: "from-green-50 to-emerald-50 border-green-200",
        },
      ],
    },

    cookingGuide: {
      title: "Complete Cooking Guide: Master Perfect Sudu Kakulu Rice",
      traditionalMethod: {
        title: "Traditional Sri Lankan Method",
        steps: [
          "Rinse 1 cup rice until water runs clear",
          "Add 1.5 cups water and 1/2 teaspoon salt",
          "Bring to boil, then reduce to low heat",
          "Cover and simmer for 12-15 minutes",
          "Let stand 5 minutes before fluffing with fork",
        ],
        tips: [
          "Use 1:1.5 rice to water ratio",
          "Don't lift lid during cooking",
          "Let steam finish the process",
        ],
      },
      internationalMethods: [
        {
          dish: "Fried Rice",
          method:
            "Use day-old cooked rice for best texture and grain separation",
        },
        {
          dish: "Biryani",
          method: "Parboil rice 70% before layering with spices and meat",
        },
        {
          dish: "Rice Salads",
          method:
            "Cook until just tender, then cool completely for firm texture",
        },
        {
          dish: "Risotto Style",
          method: "Toast rice first, add warm broth gradually while stirring",
        },
      ],
    },

    healthBenefits: {
      title: "Health Benefits for Modern Lifestyles",
      benefits: [
        {
          category: "Digestive Health",
          description:
            "Sudu Kakulu rice is easily digestible, making it suitable for all age groups from infants to elderly family members.",
          advantages: [
            "Easy digestion",
            "Suitable for all ages",
            "Gentle on stomach",
            "Promotes gut health",
          ],
          icon: Heart,
        },
        {
          category: "Weight Management",
          description:
            "The moderate glycemic index and satisfying texture help maintain stable blood sugar levels and promote satiety.",
          advantages: [
            "Stable blood sugar",
            "Promotes satiety",
            "Balanced energy",
            "Weight control support",
          ],
          icon: TrendingUp,
        },
        {
          category: "Heart Health",
          description:
            "Low in sodium and saturated fat, supporting cardiovascular wellness when part of a balanced diet.",
          advantages: [
            "Low sodium",
            "Heart-friendly",
            "Cholesterol support",
            "Cardiovascular wellness",
          ],
          icon: Shield,
        },
      ],
    },

    comparison: {
      title: "Comparing Sudu Kakulu to Other Rice Varieties",
      varieties: [
        {
          variety: "Sudu Kakulu",
          grainLength: "Medium",
          aroma: "Subtle, clean",
          texture: "Separate, fluffy",
          bestUses: "All-purpose",
          rating: 5,
        },
        {
          variety: "Basmati",
          grainLength: "Long",
          aroma: "Fragrant",
          texture: "Light, fluffy",
          bestUses: "Indian dishes",
          rating: 4,
        },
        {
          variety: "Jasmine",
          grainLength: "Long",
          aroma: "Floral",
          texture: "Slightly sticky",
          bestUses: "Thai cuisine",
          rating: 4,
        },
        {
          variety: "Regular White",
          grainLength: "Medium",
          aroma: "Neutral",
          texture: "Variable",
          bestUses: "Basic cooking",
          rating: 3,
        },
      ],
    },

    sustainability: {
      title: "Sustainable Farming Practices: From Paddy to Plate",
      practices: [
        {
          method: "Traditional Flood Irrigation",
          description:
            "Water-conserving systems that have sustained rice cultivation for centuries",
          impact: "Water conservation",
        },
        {
          method: "Organic Farming Methods",
          description:
            "Many regions employ chemical-free cultivation practices",
          impact: "Environmental protection",
        },
        {
          method: "Crop Rotation Practices",
          description:
            "Maintain soil health and prevent pest buildup naturally",
          impact: "Soil preservation",
        },
        {
          method: "Minimal Processing",
          description: "Preserve nutritional value through careful milling",
          impact: "Nutrition retention",
        },
      ],
    },

    culturalSignificance: {
      title: "Cultural Significance and Traditional Uses",
      significance: [
        {
          aspect: "Religious Ceremonies",
          description: "Central role in temple offerings and Buddhist rituals",
        },
        {
          aspect: "Wedding Celebrations",
          description:
            "Essential for auspicious occasions and traditional ceremonies",
        },
        {
          aspect: "Traditional Medicine",
          description: "Used in Ayurvedic preparations and healing practices",
        },
        {
          aspect: "Hospitality Customs",
          description:
            "Foundation of Sri Lankan hospitality for welcoming guests",
        },
      ],
    },

    storageQuality: {
      title: "Storage and Quality Guidelines",
      storage: [
        "Keep in airtight containers in cool, dry places",
        "Maintains quality for 12-18 months when stored properly",
        "Protect from moisture, heat, and direct sunlight",
        "Use first-in, first-out rotation for freshness",
      ],
      qualityIndicators: [
        {
          indicator: "Uniform Grain Size",
          description: "Consistent, medium-length grains",
        },
        {
          indicator: "Minimal Broken Pieces",
          description: "Less than 5% broken grains for premium quality",
        },
        {
          indicator: "Clean Appearance",
          description: "Free from foreign matter and discoloration",
        },
        {
          indicator: "Fresh Aroma",
          description: "Pleasant, clean rice fragrance",
        },
      ],
    },

    buyingGuide: {
      title: "Where to Buy Authentic Sudu Kakulu Rice",
      criteria: [
        "Certified Sri Lankan origin with proper documentation",
        "Proper packaging with harvest date information",
        "Reputable suppliers with direct farming connections",
        "Quality guarantees and return policies",
      ],
      sources: [
        {
          source: "Asian Specialty Stores",
          description: "Sri Lankan and South Asian grocery stores",
        },
        {
          source: "Online Rice Suppliers",
          description: "Direct from Sri Lankan exporters and distributors",
        },
        {
          source: "Premium Grocery Stores",
          description: "International sections of high-end supermarkets",
        },
        {
          source: "Restaurant Supply Stores",
          description: "Professional kitchen and chef suppliers",
        },
      ],
    },

    environmentalImpact: {
      title: "Environmental Impact and Sustainability Benefits",
      benefits: [
        "Small-scale farmers: Supporting rural Sri Lankan communities",
        "Biodiversity preservation: Maintaining traditional rice varieties",
        "Sustainable agriculture: Promoting eco-friendly farming practices",
        "Reduced carbon footprint: Efficient farming and processing methods",
      ],
    },

    faq: [
      {
        question: "How does Sudu Kakulu rice differ from regular white rice?",
        answer:
          "Sudu Kakulu offers superior texture, subtle aroma, and better nutritional retention due to minimal processing and careful cultivation methods. The grains remain separate when cooked and have a distinctive clean flavor.",
      },
      {
        question: "Is Sudu Kakulu rice suitable for diabetics?",
        answer:
          "While still a carbohydrate source, Sudu Kakulu has moderate glycemic impact compared to many white rice varieties. However, diabetics should consult healthcare providers for personalized dietary advice.",
      },
      {
        question: "Can I substitute Sudu Kakulu in international recipes?",
        answer:
          "Yes, it works excellently in most rice-based dishes, often providing better texture and flavor than standard white rice varieties. It's particularly good for dishes requiring separate, fluffy grains.",
      },
      {
        question: "How should I store Sudu Kakulu rice for maximum freshness?",
        answer:
          "Store in airtight containers in cool, dry places away from direct sunlight. Properly stored, it maintains quality for 12-18 months.",
      },
    ],

    keyInsights: [
      "Premium white rice variety from Sri Lanka's finest regions",
      "Maintains individual grain structure when cooked perfectly",
      "Subtle, clean aroma that enhances rather than overwhelms dishes",
      "Moderate glycemic index for balanced nutrition",
      "Naturally gluten-free for dietary flexibility",
      "Superior flavor absorption while maintaining texture",
      "Sustainable farming practices supporting rural communities",
      "Versatile for both traditional and international cuisine",
    ],

    conclusion: `Sudu Kakulu rice represents the perfect marriage of tradition and quality, offering modern families access to Sri Lanka's agricultural heritage. Whether you're preparing authentic Asian cuisine, experimenting with international flavors, or simply seeking superior daily nutrition, Sudu Kakulu rice delivers exceptional results. By choosing authentic Sudu Kakulu rice, you're not just selecting a premium ingredient - you're supporting sustainable farming practices, connecting with rich cultural traditions, and bringing the finest of Sri Lankan agriculture to your family table.`,
  },
};

const Blog4 = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Share functionality
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: blogData.title,
        text: blogData.metaDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const NutrientCard = ({ nutrient, benefit, icon: Icon, color }) => {
    const colorClasses = {
      blue: "from-blue-50 to-cyan-50 border-blue-200 text-blue-600",
      green: "from-green-50 to-emerald-50 border-green-200 text-green-600",
      purple: "from-purple-50 to-violet-50 border-purple-200 text-purple-600",
      amber: "from-amber-50 to-orange-50 border-amber-200 text-amber-600",
      emerald: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-600",
    };

    return (
      <div
        className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl border p-6 hover:shadow-md transition-all duration-300`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white/70`}
          >
            <Icon className={`w-6 h-6 ${colorClasses[color].split(" ")[2]}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2">{nutrient}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{benefit}</p>
          </div>
        </div>
      </div>
    );
  };

  const ChefReasonCard = ({ category, description, benefits, icon: Icon }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">{category}</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {benefits.map((benefit, idx) => (
          <span
            key={idx}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {benefit}
          </span>
        ))}
      </div>
    </div>
  );

  const ComparisonTable = ({ varieties }) => (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <tr>
            <th className="text-left p-4 font-bold text-gray-900">Variety</th>
            <th className="text-left p-4 font-bold text-gray-900">
              Grain Length
            </th>
            <th className="text-left p-4 font-bold text-gray-900">Aroma</th>
            <th className="text-left p-4 font-bold text-gray-900">Texture</th>
            <th className="text-left p-4 font-bold text-gray-900">Best Uses</th>
            <th className="text-left p-4 font-bold text-gray-900">Rating</th>
          </tr>
        </thead>
        <tbody>
          {varieties.map((variety, idx) => (
            <tr
              key={idx}
              className={`hover:bg-gray-50 ${idx === 0 ? "bg-blue-25" : ""}`}
            >
              <td className="p-4 font-semibold text-gray-900">
                {variety.variety}
              </td>
              <td className="p-4 text-gray-700">{variety.grainLength}</td>
              <td className="p-4 text-gray-700">{variety.aroma}</td>
              <td className="p-4 text-gray-700">{variety.texture}</td>
              <td className="p-4 text-gray-700">{variety.bestUses}</td>
              <td className="p-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 ${
                        starIdx < variety.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/patterns/rice-pattern.svg')] opacity-10" />

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">{blogData.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blogData.title}
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {blogData.metaDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blogData.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blogData.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>{formatDate(blogData.publishDate)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Rice Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-sm text-gray-600">Sri Lankan heritage rice</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Gluten-Free
              </h3>
              <p className="text-2xl font-bold text-green-600 mb-2">Natural</p>
              <p className="text-sm text-gray-600">Perfect for all diets</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Chef's Choice
              </h3>
              <p className="text-2xl font-bold text-amber-600 mb-2">Global</p>
              <p className="text-sm text-gray-600">International recognition</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Shelf Life
              </h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">18mo</p>
              <p className="text-sm text-gray-600">Premium preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              {blogData.content.whatIsSuduKakulu.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {blogData.content.introduction}
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              {blogData.content.whatIsSuduKakulu.description}
            </p>

            {/* Key Characteristics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {blogData.content.whatIsSuduKakulu.keyCharacteristics.map(
                (char, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                  >
                    <h4 className="font-semibold text-blue-800 mb-2">
                      {char.feature}
                    </h4>
                    <p className="text-sm text-gray-700">{char.description}</p>
                  </div>
                )
              )}
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Premium Rice Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {blogData.content.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nutritional Profile */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {blogData.content.nutritionalProfile.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the complete nutritional benefits that make Sudu Kakulu
              rice a premium choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.content.nutritionalProfile.benefits.map((item, idx) => (
              <NutrientCard
                key={idx}
                nutrient={item.nutrient}
                benefit={item.benefit}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>
        </section>

        {/* Why Chefs Choose Sudu Kakulu */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {blogData.content.chefChoice.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why professional chefs worldwide are choosing Sudu Kakulu
              rice for their kitchens
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogData.content.chefChoice.reasons.map((reason, idx) => (
              <ChefReasonCard
                key={idx}
                category={reason.category}
                description={reason.description}
                benefits={reason.benefits}
                icon={reason.icon}
              />
            ))}
          </div>
        </section>

        {/* Culinary Applications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.culinaryApplications.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogData.content.culinaryApplications.categories.map(
                (category, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${category.color} rounded-xl p-6 border`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {category.cuisine}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {category.dishes.map((dish, dishIdx) => (
                        <li key={dishIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Complete Cooking Guide */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.cookingGuide.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Traditional Method */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {blogData.content.cookingGuide.traditionalMethod.title}
                </h3>
                <ol className="space-y-3 mb-6">
                  {blogData.content.cookingGuide.traditionalMethod.steps.map(
                    (step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-gray-700">{step}</span>
                      </li>
                    )
                  )}
                </ol>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Pro Tips:
                  </h4>
                  <ul className="space-y-1">
                    {blogData.content.cookingGuide.traditionalMethod.tips.map(
                      (tip, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <Star className="w-3 h-3 text-green-600 flex-shrink-0 mt-1" />
                          <span>{tip}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* International Methods */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  International Cooking Methods
                </h3>
                <div className="space-y-4">
                  {blogData.content.cookingGuide.internationalMethods.map(
                    (method, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-4 border border-blue-100"
                      >
                        <h4 className="font-semibold text-blue-800 mb-2">
                          {method.dish}
                        </h4>
                        <p className="text-sm text-gray-700">{method.method}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.healthBenefits.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogData.content.healthBenefits.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {benefit.category}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    {benefit.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {benefit.advantages.map((advantage, advIdx) => (
                      <span
                        key={advIdx}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {advantage}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {blogData.content.comparison.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how Sudu Kakulu rice compares to other popular rice varieties
            </p>
          </div>

          <ComparisonTable varieties={blogData.content.comparison.varieties} />
        </section>

        {/* Sustainable Farming */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.sustainability.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogData.content.sustainability.practices.map(
                (practice, idx) => (
                  <div
                    key={idx}
                    className="bg-green-50 rounded-lg p-6 border border-green-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-green-800 mb-2">
                          {practice.method}
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">
                          {practice.description}
                        </p>
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          Impact: {practice.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.culturalSignificance.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogData.content.culturalSignificance.significance.map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="bg-amber-50 rounded-lg p-6 border border-amber-200"
                  >
                    <h3 className="font-bold text-amber-800 mb-3">
                      {item.aspect}
                    </h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Storage & Quality */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.storageQuality.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Storage Guidelines */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  Proper Storage Methods
                </h3>
                <div className="space-y-3">
                  {blogData.content.storageQuality.storage.map(
                    (method, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {method}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Quality Indicators */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-600" />
                  Quality Indicators
                </h3>
                <div className="space-y-4">
                  {blogData.content.storageQuality.qualityIndicators.map(
                    (indicator, idx) => (
                      <div
                        key={idx}
                        className="bg-green-50 rounded-lg p-4 border border-green-200"
                      >
                        <h4 className="font-semibold text-green-800 mb-2">
                          {indicator.indicator}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {indicator.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.buyingGuide.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What to Look For */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Selection Criteria
                </h3>
                <div className="space-y-3">
                  {blogData.content.buyingGuide.criteria.map(
                    (criterion, idx) => (
                      <div
                        key={idx}
                        className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                      >
                        <div className="flex items-start gap-3">
                          <Award className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {criterion}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Where to Find */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Where to Purchase
                </h3>
                <div className="space-y-4">
                  {blogData.content.buyingGuide.sources.map((source, idx) => (
                    <div
                      key={idx}
                      className="bg-amber-50 rounded-lg p-4 border border-amber-200"
                    >
                      <h4 className="font-semibold text-amber-800 mb-2">
                        {source.source}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {source.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.environmentalImpact.title}
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogData.content.environmentalImpact.benefits.map(
                  (benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Leaf className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {blogData.content.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Conclusion: Elevate Your Culinary Experience
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-blue-100">
              {blogData.content.conclusion}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">For Home Cooks</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Transform your everyday meals with premium quality rice that
                  delivers restaurant-level results in your home kitchen.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">
                  For Professional Chefs
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Elevate your menu with authentic Sri Lankan rice that offers
                  consistency, quality, and the cultural story your customers
                  will appreciate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {blogData.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* SEO Meta Tags */}
      <div className="sr-only">
        <h1>{blogData.title}</h1>
        <meta name="description" content={blogData.metaDescription} />
        <meta name="keywords" content={blogData.tags.join(", ")} />
        <meta name="author" content={blogData.author} />
        <meta name="article:published_time" content={blogData.publishDate} />
        <meta name="article:section" content={blogData.category} />

        {/* Structured data for premium rice */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blogData.title,
            description: blogData.metaDescription,
            author: {
              "@type": "Organization",
              name: blogData.author,
            },
            datePublished: blogData.publishDate,
            dateModified: blogData.publishDate,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": typeof window !== "undefined" ? window.location.href : "",
            },
            publisher: {
              "@type": "Organization",
              name: "Sajith Rice Mill",
              logo: {
                "@type": "ImageObject",
                url: "/sajith-logo.png",
              },
            },
            about: {
              "@type": "Thing",
              name: "Sudu Kakulu Rice",
              description:
                "Premium Sri Lankan white rice variety with exceptional cooking characteristics",
            },
          })}
        </script>
      </div>
    </article>
  );
};

export default Blog4;
