import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Heart,
  TrendingUp,
  ChevronRight,
  Share2,
  Leaf,
  Shield,
  Star,
  Award,
  BookOpen,
  ChefHat,
  Droplets,
  Zap,
  Eye,
  Globe,
  CheckCircle,
} from "lucide-react";

// Complete blog data structure for Samba Kakulu rice content
const blogData = {
  id: "samba-kakulu-rice-ancient-grain-superfood",
  title:
    "Samba Kakulu Rice: Sri Lanka's Ancient Grain Superfood Taking the World by Storm",
  metaDescription:
    "Discover Samba Kakulu rice - Sri Lanka's traditional red rice variety packed with nutrients, fiber, and authentic flavor. Perfect for healthy eating and gourmet cooking.",
  author: "Sajith Rice Mill Nutrition Team",
  publishDate: "2024-01-25",
  readTime: "12 min read",
  category: "Healthy Living & Nutrition",
  tags: [
    "samba kakulu",
    "red rice",
    "ancient grains",
    "healthy eating",
    "sri lankan rice",
    "superfood",
  ],
  coverImage: "/blog/samba-kakulu-superfood.webp",

  content: {
    introduction: `Samba Kakulu rice represents one of Sri Lanka's most treasured traditional rice varieties, distinguished by its distinctive reddish-brown color, robust nutty flavor, and exceptional nutritional profile. This ancient grain variety has sustained Sri Lankan communities for over 2,000 years and is now gaining recognition among health-conscious consumers and gourmet chefs worldwide.`,

    nutritionalBenefits: {
      title: "Outstanding Nutritional Benefits: Nature's Complete Grain",
      profile: [
        {
          nutrient: "High Fiber Content",
          benefit:
            "Contains 3-4 times more fiber than white rice, promoting digestive health and sustained satiety",
          icon: Leaf,
          color: "green",
        },
        {
          nutrient: "Rich in Antioxidants",
          benefit:
            "The red bran layer provides powerful anthocyanins and phenolic compounds that combat oxidative stress",
          icon: Shield,
          color: "purple",
        },
        {
          nutrient: "Complete Mineral Package",
          benefit:
            "Exceptional source of iron, zinc, magnesium, manganese, and phosphorus",
          icon: Star,
          color: "amber",
        },
        {
          nutrient: "B-Vitamin Complex",
          benefit:
            "Higher concentrations of thiamine, riboflavin, and niacin compared to refined rice varieties",
          icon: Zap,
          color: "blue",
        },
        {
          nutrient: "Plant-Based Protein",
          benefit:
            "Contains all essential amino acids, making it valuable for vegetarian and vegan diets",
          icon: Heart,
          color: "red",
        },
        {
          nutrient: "Low Glycemic Index",
          benefit:
            "Helps maintain stable blood sugar levels, ideal for diabetes management",
          icon: TrendingUp,
          color: "indigo",
        },
      ],
    },

    healthRecommendations: {
      title: "Why Nutritionists Recommend Samba Kakulu Rice",
      benefits: [
        {
          category: "Heart Health Champion",
          description:
            "The combination of fiber, antioxidants, and natural compounds in Samba Kakulu rice supports cardiovascular health by helping to lower cholesterol levels and reduce inflammation markers.",
          icon: Heart,
          keyPoints: [
            "Lowers cholesterol",
            "Reduces inflammation",
            "Supports heart function",
          ],
        },
        {
          category: "Weight Management Support",
          description:
            "The high fiber content and complex carbohydrates provide sustained energy release, reducing hunger pangs and supporting healthy weight management goals.",
          icon: TrendingUp,
          keyPoints: [
            "Sustained energy",
            "Appetite control",
            "Metabolism support",
          ],
        },
        {
          category: "Digestive Wellness",
          description:
            "The natural fiber promotes beneficial gut bacteria growth while supporting regular digestion and intestinal health.",
          icon: Leaf,
          keyPoints: ["Gut health", "Regular digestion", "Microbiome support"],
        },
        {
          category: "Anti-Inflammatory Properties",
          description:
            "The antioxidants in the red bran layer help reduce chronic inflammation, supporting overall wellness and disease prevention.",
          icon: Shield,
          keyPoints: [
            "Reduces inflammation",
            "Disease prevention",
            "Overall wellness",
          ],
        },
      ],
    },

    culinaryExcellence: {
      title: "Culinary Excellence: Flavor Profile and Cooking Characteristics",
      tasteProfile: {
        flavor: "Rich, nutty flavor with earthy undertones",
        texture: "Slightly chewy yet tender",
        appearance: "Distinctive reddish-brown color",
        aroma: "Natural, pleasant grain aroma",
      },
      applications: [
        {
          category: "Traditional Sri Lankan Dishes",
          dishes: [
            "Kiribath (milk rice)",
            "Rice and curry meals",
            "Festive preparations",
          ],
          icon: BookOpen,
        },
        {
          category: "International Cuisine",
          dishes: [
            "Grain bowls",
            "Pilafs",
            "Stuffed vegetables",
            "Fusion dishes",
          ],
          icon: Globe,
        },
        {
          category: "Breakfast Applications",
          dishes: [
            "Rice porridge",
            "Breakfast bowls with fruits",
            "Morning grain salads",
          ],
          icon: Star,
        },
        {
          category: "Professional Chef Applications",
          dishes: [
            "Gourmet presentations",
            "Restaurant plating",
            "Fusion cuisine",
          ],
          icon: ChefHat,
        },
      ],
    },

    cookingGuide: {
      title: "Complete Cooking Guide: Mastering Samba Kakulu Rice",
      basicMethod: {
        title: "Basic Preparation Method",
        steps: [
          "Rinse 1 cup rice in cold water until water runs clear",
          "Soak for 30 minutes for optimal texture (optional)",
          "Add 2-2.5 cups water and 1 teaspoon salt",
          "Bring to boil, then reduce to lowest heat",
          "Cover and simmer 25-30 minutes",
          "Let stand 10 minutes before fluffing",
        ],
      },
      advancedTechniques: [
        {
          method: "Toasted Method",
          description:
            "Dry roast rice for 2-3 minutes before adding water for enhanced nutty flavor",
        },
        {
          method: "Coconut Milk Preparation",
          description:
            "Replace half the water with coconut milk for rich, creamy texture",
        },
        {
          method: "Broth Cooking",
          description:
            "Use vegetable or chicken broth instead of water for added depth",
        },
      ],
      internationalStyles: [
        {
          style: "Mediterranean",
          preparation: "Cook with olive oil, herbs, and sun-dried tomatoes",
        },
        {
          style: "Asian Fusion",
          preparation: "Prepare with ginger, garlic, and soy sauce",
        },
        {
          style: "Middle Eastern",
          preparation: "Season with cardamom, cinnamon, and almonds",
        },
        {
          style: "African Inspired",
          preparation: "Cook with berbere spice blend and vegetables",
        },
      ],
    },

    healthBenefits: {
      title: "Health Benefits for Modern Lifestyles",
      categories: [
        {
          benefit: "Blood Sugar Management",
          description:
            "The low glycemic index (GI 50-55) makes Samba Kakulu rice excellent for:",
          applications: [
            "Diabetes management and blood sugar control",
            "Sustained energy for athletes",
            "Appetite regulation and portion control",
          ],
          icon: TrendingUp,
        },
        {
          benefit: "Digestive System Support",
          description: "Multiple digestive health benefits:",
          applications: [
            "Prebiotic effects feeding beneficial gut bacteria",
            "Regular elimination and healthy bowel movements",
            "Reduced bloating and easier digestion",
          ],
          icon: Leaf,
        },
        {
          benefit: "Anti-Aging Properties",
          description: "Powerful anti-aging compounds provide:",
          applications: [
            "Antioxidant protection fighting free radical damage",
            "Skin health supporting collagen production",
            "Cognitive function maintenance with age",
          ],
          icon: Shield,
        },
      ],
    },

    comparison: {
      title: "Samba Kakulu vs. Other Healthy Rice Varieties",
      varieties: [
        {
          name: "Samba Kakulu",
          fiber: "Very High",
          antioxidants: "Excellent",
          cookingTime: "25-30 min",
          flavor: "Nutty, earthy",
          texture: "Chewy, tender",
          price: "Premium",
        },
        {
          name: "Brown Rice",
          fiber: "High",
          antioxidants: "Good",
          cookingTime: "45-50 min",
          flavor: "Mild, nutty",
          texture: "Chewy",
          price: "Moderate",
        },
        {
          name: "Black Rice",
          fiber: "High",
          antioxidants: "Excellent",
          cookingTime: "30-35 min",
          flavor: "Sweet, nutty",
          texture: "Slightly sticky",
          price: "Premium",
        },
        {
          name: "Wild Rice",
          fiber: "Very High",
          antioxidants: "Good",
          cookingTime: "45-60 min",
          flavor: "Grassy, wild",
          texture: "Very chewy",
          price: "Expensive",
        },
      ],
    },

    culturalHeritage: {
      title: "Cultural Heritage and Traditional Significance",
      historical: [
        {
          aspect: "Royal Heritage",
          description: "Historically served in ancient royal courts",
        },
        {
          aspect: "Religious Ceremonies",
          description: "Used in temple offerings and Buddhist rituals",
        },
        {
          aspect: "Ayurvedic Medicine",
          description:
            "Traditional healing systems recognize its therapeutic properties",
        },
        {
          aspect: "Community Traditions",
          description:
            "Central to harvest festivals and community celebrations",
        },
      ],
      modernRevival: [
        "Heritage food movements promoting traditional varieties",
        "Health consciousness trends favoring ancient grains",
        "Sustainable agriculture initiatives supporting local farmers",
        "Cultural identity preservation efforts",
      ],
    },

    sustainability: {
      title: "Environmental Impact and Sustainability",
      ecological: [
        {
          benefit: "Biodiversity Conservation",
          description: "Maintains genetic diversity in rice cultivation",
        },
        {
          benefit: "Water Efficiency",
          description: "Adapted to low-water conditions",
        },
        {
          benefit: "Soil Health",
          description: "Improves soil organic matter content",
        },
        {
          benefit: "Carbon Sequestration",
          description: "Supports climate change mitigation efforts",
        },
      ],
      social: [
        "Farmer Livelihoods: Provides premium prices for traditional varieties",
        "Rural Development: Supports sustainable rural economies",
        "Knowledge Preservation: Maintains traditional agricultural wisdom",
        "Food Security: Diversifies crop varieties for resilience",
      ],
    },

    buyingGuide: {
      title: "Buying Guide: Sourcing Authentic Samba Kakulu Rice",
      lookFor: [
        "Certified Origin: Verify Sri Lankan agricultural certification",
        "Organic Options: Choose certified organic when available",
        "Packaging Date: Select recently packaged products",
        "Supplier Reputation: Purchase from established rice specialists",
      ],
      whereToFind: [
        {
          location: "Asian Grocery Stores",
          description: "Specialty Sri Lankan and South Asian markets",
        },
        {
          location: "Health Food Stores",
          description: "Natural and organic food retailers",
        },
        {
          location: "Online Suppliers",
          description: "Direct from Sri Lankan exporters",
        },
        {
          location: "Gourmet Markets",
          description: "High-end grocery stores with international sections",
        },
      ],
    },

    recipeIdeas: {
      title: "Recipe Ideas and Meal Planning",
      categories: [
        {
          mealType: "Breakfast Options",
          recipes: [
            "Coconut Rice Porridge: Creamy morning comfort food",
            "Fruit and Nut Bowl: Topped with fresh fruits and seeds",
            "Savory Breakfast Rice: With vegetables and eggs",
          ],
        },
        {
          mealType: "Lunch and Dinner",
          recipes: [
            "Buddha Bowls: With roasted vegetables and protein",
            "Stuffed Bell Peppers: Filled with seasoned Samba Kakulu rice",
            "Curry Accompaniment: Perfect base for Sri Lankan curries",
            "Mediterranean Pilaf: With herbs, nuts, and dried fruits",
          ],
        },
        {
          mealType: "Special Occasion Dishes",
          recipes: [
            "Wedding Rice: Traditional celebration preparation",
            "Festival Meals: Holiday and ceremonial dishes",
            "Gourmet Presentations: Restaurant-quality plating",
          ],
        },
      ],
    },

    faq: [
      {
        question: "How does Samba Kakulu rice compare nutritionally to quinoa?",
        answer:
          "While quinoa is higher in protein, Samba Kakulu provides more fiber and antioxidants, plus it's more affordable and versatile for everyday cooking.",
      },
      {
        question: "Can children eat Samba Kakulu rice?",
        answer:
          "Absolutely! The natural nutrients support growing children's development. Start with smaller portions as the fiber content is higher than white rice.",
      },
      {
        question: "Is Samba Kakulu rice suitable for gluten-free diets?",
        answer:
          "Yes, like all rice varieties, Samba Kakulu is naturally gluten-free and safe for celiac disease sufferers.",
      },
      {
        question: "How long does cooked Samba Kakulu rice keep?",
        answer:
          "Refrigerate for up to 5 days or freeze for up to 3 months. The texture remains excellent after proper storage.",
      },
    ],

    storageQuality: {
      title: "Storage and Quality Guidelines",
      storage: [
        "Store in airtight containers in cool, dry locations",
        "Protect from direct sunlight and moisture",
        "Use within 18-24 months for optimal nutritional value",
        "Consider refrigeration in humid climates",
      ],
      qualityIndicators: [
        {
          indicator: "Color",
          description: "Rich, uniform reddish-brown appearance",
        },
        {
          indicator: "Aroma",
          description: "Fresh, nutty fragrance without musty odors",
        },
        {
          indicator: "Grain Integrity",
          description: "Minimal broken pieces and foreign matter",
        },
        {
          indicator: "Origin Certification",
          description: "Authentic Sri Lankan sourcing verification",
        },
      ],
    },

    keyInsights: [
      "Over 2,000 years of Sri Lankan heritage in every grain",
      "Contains 3-4 times more fiber than white rice",
      "Rich in antioxidants and anti-inflammatory compounds",
      "Low glycemic index ideal for diabetes management",
      "Naturally gluten-free ancient grain superfood",
      "Sustainable cultivation supporting biodiversity",
      "Distinctive nutty flavor perfect for gourmet cooking",
      "Complete nutritional profile with all essential amino acids",
    ],

    conclusion: `Samba Kakulu rice represents more than just a grain choice – it's a connection to Sri Lanka's agricultural heritage and a pathway to enhanced nutrition and wellness. This remarkable red rice variety offers contemporary families the perfect combination of traditional wisdom and modern health benefits. By choosing Samba Kakulu rice, you're making a conscious decision to support sustainable agriculture, preserve cultural heritage, and nourish your family with one of nature's most complete grains.`,
  },
};

const Blog3 = () => {
  const [activeSection, setActiveSection] = useState("nutrition");
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
      green: "from-green-50 to-emerald-50 border-green-200 text-green-600",
      purple: "from-purple-50 to-violet-50 border-purple-200 text-purple-600",
      amber: "from-amber-50 to-orange-50 border-amber-200 text-amber-600",
      blue: "from-blue-50 to-cyan-50 border-blue-200 text-blue-600",
      red: "from-red-50 to-pink-50 border-red-200 text-red-600",
      indigo: "from-indigo-50 to-purple-50 border-indigo-200 text-indigo-600",
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

  const HealthBenefitCard = ({
    category,
    description,
    keyPoints,
    icon: Icon,
  }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">{category}</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        {keyPoints.map((point, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-600">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ComparisonTable = ({ varieties }) => (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-red-50 to-orange-50">
          <tr>
            <th className="text-left p-4 font-bold text-gray-900">Variety</th>
            <th className="text-left p-4 font-bold text-gray-900">Fiber</th>
            <th className="text-left p-4 font-bold text-gray-900">
              Antioxidants
            </th>
            <th className="text-left p-4 font-bold text-gray-900">
              Cooking Time
            </th>
            <th className="text-left p-4 font-bold text-gray-900">Flavor</th>
            <th className="text-left p-4 font-bold text-gray-900">Texture</th>
            <th className="text-left p-4 font-bold text-gray-900">Price</th>
          </tr>
        </thead>
        <tbody>
          {varieties.map((variety, idx) => (
            <tr
              key={idx}
              className={`hover:bg-gray-50 ${idx === 0 ? "bg-red-25" : ""}`}
            >
              <td className="p-4 font-semibold text-gray-900">
                {variety.name}
              </td>
              <td className="p-4 text-gray-700">{variety.fiber}</td>
              <td className="p-4 text-gray-700">{variety.antioxidants}</td>
              <td className="p-4 text-gray-700">{variety.cookingTime}</td>
              <td className="p-4 text-gray-700">{variety.flavor}</td>
              <td className="p-4 text-gray-700">{variety.texture}</td>
              <td className="p-4 text-gray-700">{variety.price}</td>
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
          className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-red-600 via-orange-600 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/patterns/grain-pattern.svg')] opacity-10" />

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">{blogData.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blogData.title}
            </h1>

            <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {blogData.metaDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-red-200">
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

      {/* Superfood Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-200 p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Heritage Years
              </h3>
              <p className="text-2xl font-bold text-red-600 mb-2">2,000+</p>
              <p className="text-sm text-gray-600">
                Years of Sri Lankan tradition
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Fiber Content
              </h3>
              <p className="text-2xl font-bold text-green-600 mb-2">3-4x</p>
              <p className="text-sm text-gray-600">
                More fiber than white rice
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Antioxidants
              </h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">High</p>
              <p className="text-sm text-gray-600">Anthocyanins & phenolics</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Glycemic Index
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">50-55</p>
              <p className="text-sm text-gray-600">
                Low GI for stable blood sugar
              </p>
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
              What is Samba Kakulu Rice? Sri Lanka's Nutritional Powerhouse
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {blogData.content.introduction}
            </p>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Key Superfood Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {blogData.content.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nutritional Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {blogData.content.nutritionalBenefits.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the exceptional nutritional profile that makes Samba
              Kakulu rice a true superfood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.content.nutritionalBenefits.profile.map((item, idx) => (
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

        {/* Health Recommendations */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {blogData.content.healthRecommendations.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scientific reasons why health professionals recommend this ancient
              grain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogData.content.healthRecommendations.benefits.map(
              (benefit, idx) => (
                <HealthBenefitCard
                  key={idx}
                  category={benefit.category}
                  description={benefit.description}
                  keyPoints={benefit.keyPoints}
                  icon={benefit.icon}
                />
              )
            )}
          </div>
        </section>

        {/* Culinary Excellence */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.culinaryExcellence.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Taste Profile */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-600" />
                  Distinctive Taste Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      Flavor:
                    </span>
                    <p className="text-gray-600">
                      {blogData.content.culinaryExcellence.tasteProfile.flavor}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      Texture:
                    </span>
                    <p className="text-gray-600">
                      {blogData.content.culinaryExcellence.tasteProfile.texture}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      Appearance:
                    </span>
                    <p className="text-gray-600">
                      {
                        blogData.content.culinaryExcellence.tasteProfile
                          .appearance
                      }
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      Aroma:
                    </span>
                    <p className="text-gray-600">
                      {blogData.content.culinaryExcellence.tasteProfile.aroma}
                    </p>
                  </div>
                </div>
              </div>

              {/* Chef Applications */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-red-600" />
                  Cooking Versatility
                </h3>
                {blogData.content.culinaryExcellence.applications.map(
                  (app, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-4 border border-gray-200"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <app.icon className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-gray-900">
                          {app.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {app.dishes.map((dish, dishIdx) => (
                          <span
                            key={dishIdx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {dish}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Complete Cooking Guide */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.cookingGuide.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Basic Method */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {blogData.content.cookingGuide.basicMethod.title}
                </h3>
                <ol className="space-y-3">
                  {blogData.content.cookingGuide.basicMethod.steps.map(
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
              </div>

              {/* Advanced Techniques */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Advanced Techniques
                </h3>
                <div className="space-y-4">
                  {blogData.content.cookingGuide.advancedTechniques.map(
                    (technique, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-blue-800 mb-2">
                          {technique.method}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {technique.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* International Styles */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  International Styles
                </h3>
                <div className="space-y-4">
                  {blogData.content.cookingGuide.internationalStyles.map(
                    (style, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-purple-800 mb-2">
                          {style.style}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {style.preparation}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Benefits for Modern Life */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.healthBenefits.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogData.content.healthBenefits.categories.map(
                (category, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {category.benefit}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.applications.map((app, appIdx) => (
                        <li key={appIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
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
              See how Samba Kakulu rice compares to other healthy grain options
            </p>
          </div>

          <ComparisonTable varieties={blogData.content.comparison.varieties} />
        </section>

        {/* Cultural Heritage */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.culturalHeritage.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Historical Importance */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  Historical Importance
                </h3>
                <div className="space-y-4">
                  {blogData.content.culturalHeritage.historical.map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="bg-amber-50 rounded-lg p-4 border border-amber-200"
                      >
                        <h4 className="font-semibold text-amber-800 mb-2">
                          {item.aspect}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Modern Revival */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Modern Cultural Revival
                </h3>
                <div className="space-y-3">
                  {blogData.content.culturalHeritage.modernRevival.map(
                    (revival, idx) => (
                      <div
                        key={idx}
                        className="bg-green-50 rounded-lg p-4 border border-green-200"
                      >
                        <div className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {revival}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.sustainability.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Ecological Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Ecological Benefits
                </h3>
                <div className="space-y-4">
                  {blogData.content.sustainability.ecological.map(
                    (benefit, idx) => (
                      <div
                        key={idx}
                        className="bg-green-50 rounded-lg p-4 border border-green-200"
                      >
                        <h4 className="font-semibold text-green-800 mb-2">
                          {benefit.benefit}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {benefit.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Social Impact */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-blue-600" />
                  Social Impact
                </h3>
                <div className="space-y-3">
                  {blogData.content.sustainability.social.map((impact, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              {/* Storage Methods */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Proper Storage Methods
                </h3>
                <div className="space-y-3">
                  {blogData.content.storageQuality.storage.map(
                    (method, idx) => (
                      <div
                        key={idx}
                        className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
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
                  <Eye className="w-5 h-5 text-amber-600" />
                  Quality Indicators
                </h3>
                <div className="space-y-4">
                  {blogData.content.storageQuality.qualityIndicators.map(
                    (indicator, idx) => (
                      <div
                        key={idx}
                        className="bg-amber-50 rounded-lg p-4 border border-amber-200"
                      >
                        <h4 className="font-semibold text-amber-800 mb-2">
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
                  What to Look For
                </h3>
                <div className="space-y-3">
                  {blogData.content.buyingGuide.lookFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-green-50 rounded-lg p-4 border border-green-200"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Where to Find */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Where to Find
                </h3>
                <div className="space-y-4">
                  {blogData.content.buyingGuide.whereToFind.map(
                    (location, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                      >
                        <h4 className="font-semibold text-blue-800 mb-2">
                          {location.location}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {location.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Ideas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.recipeIdeas.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogData.content.recipeIdeas.categories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {category.mealType}
                  </h3>
                  <div className="space-y-3">
                    {category.recipes.map((recipe, recipeIdx) => (
                      <div
                        key={recipeIdx}
                        className="bg-white rounded-lg p-3 border border-orange-100"
                      >
                        <span className="text-sm text-gray-700">{recipe}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
          <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Conclusion: Embrace Ancient Wisdom for Modern Health
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-red-100">
              {blogData.content.conclusion}
            </p>
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

        {/* Structured data for superfood */}
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
              name: "Samba Kakulu Rice",
              description:
                "Traditional Sri Lankan red rice variety with exceptional nutritional benefits",
            },
          })}
        </script>
      </div>
    </article>
  );
};

export default Blog3;
