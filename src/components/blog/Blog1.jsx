import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Globe,
  TrendingUp,
  MapPin,
  ChevronRight,
  Share2,
  BarChart3,
  Heart,
  Leaf,
  Shield,
} from "lucide-react";

// Complete blog data structure with all your content
const blogData = {
  id: "global-rice-map-50-countries",
  title:
    "The Global Rice Map: 50+ Countries Where Rice is the Primary Staple Food",
  metaDescription:
    "Discover which countries eat rice as their main food staple. Explore rice consumption patterns, cultural significance, and dietary habits across Asia, Africa, and Latin America.",
  author: "Sajith Rice Mill Research Team",
  publishDate: "2024-01-15",
  readTime: "15 min read",
  category: "Global Rice Markets",
  tags: [
    "rice consumption",
    "global markets",
    "food security",
    "rice culture",
    "export opportunities",
  ],
  coverImage: "/blog/global-rice-map.webp",

  content: {
    introduction: `Rice feeds more than half the world's population as a primary staple food, making it one of humanity's most crucial crops. From the bustling streets of Bangkok to the rural villages of Madagascar, rice forms the foundation of daily nutrition for over 3.5 billion people across six continents. Understanding which countries rely on rice as their main dietary staple reveals fascinating insights into global food security, cultural traditions, and agricultural patterns.`,

    sections: [
      {
        id: "east-asia",
        title: "East Asia: The Heart of Rice Civilization",
        description:
          "Where rice cultivation began and quality standards are highest",
        countries: [
          {
            name: "China",
            subtitle: "The World's Largest Rice Consumer",
            consumption: "147 million tons (30% of global consumption)",
            perCapita: "77 kg annually",
            varieties: "Japonica rice, fragrant rice, glutinous rice",
            significance:
              "Rice symbolizes prosperity and fertility in Chinese culture",
            details:
              "Northern China prefers wheat, while southern regions are rice-dominant",
            highlights: [
              "30% of global consumption",
              "Cultural symbol of prosperity",
            ],
          },
          {
            name: "Japan",
            subtitle: "Premium Quality Focus",
            consumption: "8.5 million tons",
            perCapita: "67 kg annually",
            varieties: "Short-grain japonica rice, premium sushi rice",
            significance: "Central to Japanese cuisine and spiritual practices",
            details:
              "Extremely high standards for appearance, texture, and taste",
            highlights: ["Premium quality standards", "Spiritual significance"],
          },
          {
            name: "South Korea",
            subtitle: "Traditional and Modern Fusion",
            consumption: "3.7 million tons",
            perCapita: "72 kg annually",
            varieties: "Short-grain varieties, mixed-grain rice",
            significance:
              "Foundation of Korean meals alongside kimchi and side dishes",
            details: "Increasing interest in brown rice and ancient varieties",
            highlights: ["Modern health trends", "Traditional foundation"],
          },
        ],
      },
      {
        id: "south-asia",
        title: "South Asia: Rice as Life Sustenance",
        description:
          "Where rice provides the highest percentage of daily calories",
        countries: [
          {
            name: "India",
            subtitle: "Diverse Rice Heritage",
            consumption: "103 million tons",
            perCapita: "73 kg annually",
            varieties:
              "Basmati, jasmine rice, parboiled rice, red rice varieties",
            significance:
              "Sacred grain in Hindu traditions, essential in festivals",
            details: "Long-grain in north, medium-grain in east and south",
            highlights: ["Sacred grain status", "Regional variety preferences"],
          },
          {
            name: "Bangladesh",
            subtitle: "Rice-Dependent Nation",
            consumption: "37 million tons",
            perCapita: "221 kg annually (highest in the world)",
            varieties: "Boro rice, Aman rice, local varieties",
            significance: "Provides 76% of daily calories",
            details: "75% of agricultural land dedicated to rice cultivation",
            highlights: [
              "Highest per capita consumption",
              "76% of daily calories",
            ],
          },
          {
            name: "Pakistan",
            subtitle: "Basmati Heritage",
            consumption: "3.8 million tons",
            perCapita: "17 kg annually",
            varieties: "Basmati rice, medium-grain varieties",
            significance:
              "Major basmati rice exporter while consuming domestically",
            details: "Higher consumption in southern regions",
            highlights: [
              "Basmati export leader",
              "Regional consumption patterns",
            ],
          },
          {
            name: "Sri Lanka",
            subtitle: "Island Rice Culture",
            consumption: "2.8 million tons",
            perCapita: "130 kg annually",
            varieties: "Samba, Nadu, traditional red rice varieties",
            significance: "2,500-year rice cultivation tradition",
            details: "Rice and curry is the national dish",
            highlights: ["2,500-year tradition", "National dish foundation"],
          },
        ],
      },
      {
        id: "southeast-asia",
        title: "Southeast Asia: The Rice Bowl of the World",
        description:
          "The most rice-dependent region with multiple crops per year",
        countries: [
          {
            name: "Indonesia",
            subtitle: "Archipelago Rice Nation",
            consumption: "37.4 million tons",
            perCapita: "139 kg annually",
            varieties: "Medium-grain indica rice, aromatic varieties",
            significance: "Rice is considered sacred in Javanese culture",
            details: "Different varieties across 17,000 islands",
            highlights: [
              "17,000 islands diversity",
              "Sacred in Javanese culture",
            ],
          },
          {
            name: "Thailand",
            subtitle: "Premium Rice Producer and Consumer",
            consumption: "9.1 million tons",
            perCapita: "131 kg annually",
            varieties: "Jasmine rice, glutinous rice, parboiled rice",
            significance: "Rice central to Thai cuisine and culture",
            details: "World's second-largest rice exporter",
            highlights: ["Jasmine rice origin", "Major exporter"],
          },
          {
            name: "Vietnam",
            subtitle: "Three-Crop Rice System",
            consumption: "21.6 million tons",
            perCapita: "225 kg annually",
            varieties: "Long-grain indica rice, fragrant varieties",
            significance:
              "Rice provides livelihoods for 70% of rural population",
            details: "Three rice crops per year in Mekong Delta",
            highlights: ["Three crops per year", "70% rural livelihoods"],
          },
          {
            name: "Philippines",
            subtitle: "Tropical Rice Paradise",
            consumption: "14.2 million tons",
            perCapita: "130 kg annually",
            varieties: "Indica rice, glutinous rice for desserts",
            significance: "Government prioritizes rice self-sufficiency",
            details: "Rice deeply embedded in Filipino traditions",
            highlights: ["Self-sufficiency focus", "Deep cultural traditions"],
          },
          {
            name: "Myanmar",
            subtitle: "Golden Rice Fields",
            consumption: "10.8 million tons",
            perCapita: "195 kg annually",
            varieties: "Fragrant rice, medium-grain varieties",
            significance: "Ancient rice cultivation traditions",
            details: "Emerging rice exporter to neighboring countries",
            highlights: ["Ancient traditions", "Emerging exporter"],
          },
          {
            name: "Cambodia",
            subtitle: "Angkor Rice Legacy",
            consumption: "4.2 million tons",
            perCapita: "256 kg annually",
            varieties: "Aromatic rice, traditional varieties",
            significance: "Rice cultivation enabled Angkor civilization",
            details: "85% of population depends on rice farming",
            highlights: [
              "Angkor civilization heritage",
              "85% farming dependency",
            ],
          },
          {
            name: "Laos",
            subtitle: "Sticky Rice Culture",
            consumption: "1.8 million tons",
            perCapita: "242 kg annually",
            varieties: "Glutinous rice (80% of consumption), jasmine rice",
            significance:
              "Only country where sticky rice is the primary staple",
            details: "Hand-eating sticky rice from bamboo baskets",
            highlights: [
              "Unique sticky rice culture",
              "Traditional eating methods",
            ],
          },
        ],
      },
      {
        id: "africa",
        title: "Africa: Emerging Rice Continent",
        description: "Fastest-growing rice consumption driven by urbanization",
        countries: [
          {
            name: "Nigeria",
            subtitle: "Africa's Rice Giant",
            consumption: "6.4 million tons",
            perCapita: "31 kg annually (rapidly increasing)",
            varieties: "Parboiled rice, long-grain varieties",
            significance: "Consumption doubled in past decade",
            details: "Rice increasingly popular in urban areas",
            highlights: ["Consumption doubled", "Urban popularity surge"],
          },
          {
            name: "Madagascar",
            subtitle: "Island Rice Heritage",
            consumption: "3.6 million tons",
            perCapita: "135 kg annually",
            varieties: "Red rice, aromatic varieties",
            significance: "Rice central to Malagasy identity and rituals",
            details: "Terraced rice cultivation in highlands",
            highlights: ["Cultural identity core", "Highland terraces"],
          },
          {
            name: "Egypt",
            subtitle: "Nile Delta Rice",
            consumption: "4.1 million tons",
            perCapita: "41 kg annually",
            varieties: "Short-grain rice, Egyptian varieties",
            significance: "Rice cultivation in desert using Nile water",
            details: "Staple alongside bread in Egyptian diet",
            highlights: ["Desert cultivation", "Nile water irrigation"],
          },
          {
            name: "Ghana",
            subtitle: "West African Rice Hub",
            consumption: "1.2 million tons",
            perCapita: "39 kg annually",
            varieties: "Parboiled rice, local varieties",
            significance: "Rapid increase in rice consumption",
            details: "Government promoting local rice production",
            highlights: ["Rapid consumption growth", "Government promotion"],
          },
          {
            name: "Senegal",
            subtitle: "Sahel Rice Culture",
            consumption: "1.8 million tons",
            perCapita: "108 kg annually",
            varieties: "Broken rice, parboiled rice",
            significance:
              "Rice dishes like thieboudienne are national favorites",
            details: "Major focus on rice self-sufficiency",
            highlights: ["National dish traditions", "Self-sufficiency goals"],
          },
        ],
      },
      {
        id: "latin-america",
        title: "Latin America: New World Rice Adoption",
        description:
          "Rice integrated into traditional cuisines and modern diets",
        countries: [
          {
            name: "Brazil",
            subtitle: "South American Rice Leader",
            consumption: "7.9 million tons",
            perCapita: "38 kg annually",
            varieties: "Long-grain rice, parboiled rice",
            significance: "Rice and beans (arroz com feijão) national dish",
            details: "Higher consumption in northeastern states",
            highlights: ["National dish pairing", "Regional preferences"],
          },
          {
            name: "Peru",
            subtitle: "Andean and Coastal Rice",
            consumption: "1.7 million tons",
            perCapita: "52 kg annually",
            varieties: "Medium-grain rice, specialty varieties",
            significance: "Rice incorporated into traditional Peruvian cuisine",
            details: "Coastal and jungle regions for rice cultivation",
            highlights: ["Cuisine integration", "Geographic diversity"],
          },
          {
            name: "Colombia",
            subtitle: "Coffee and Rice Nation",
            consumption: "2.8 million tons",
            perCapita: "56 kg annually",
            varieties: "Long-grain rice, aromatic varieties",
            significance: "Rice fundamental to Colombian family meals",
            details: "Significant agricultural sector employment",
            highlights: ["Family meal foundation", "Agricultural employment"],
          },
          {
            name: "Ecuador",
            subtitle: "Equatorial Rice Culture",
            consumption: "1.3 million tons",
            perCapita: "74 kg annually",
            varieties: "Long-grain rice, local varieties",
            significance: "Primary rice-growing region along Pacific coast",
            details: "Rice accompanies most Ecuadorian meals",
            highlights: ["Pacific coast production", "Meal accompaniment"],
          },
        ],
      },
    ],

    culturalSignificance: {
      title: "Cultural and Religious Significance",
      categories: [
        {
          name: "Buddhist Countries",
          practices: [
            "Rice offerings in temples and religious ceremonies",
            "Symbolic representation of sustenance and prosperity",
            "Mindful eating practices centered around rice meals",
          ],
        },
        {
          name: "Hindu Traditions",
          practices: [
            "Rice used in religious rituals and festival celebrations",
            "Sacred significance in wedding ceremonies and blessings",
            "Different varieties for different spiritual occasions",
          ],
        },
        {
          name: "Islamic Cultures",
          practices: [
            "Rice dishes for Eid celebrations and religious gatherings",
            "Integration with halal dietary requirements",
            "Traditional preparation methods during Ramadan",
          ],
        },
        {
          name: "African Spiritual Practices",
          practices: [
            "Rice in ancestral worship and community ceremonies",
            "Harvest festivals celebrating rice cultivation",
            "Traditional medicine uses of rice varieties",
          ],
        },
      ],
    },

    economicImpact: {
      title: "Economic Impact of Rice Consumption",
      majorImporters: [
        {
          country: "China",
          volume: "3.2 million tons",
          note: "Despite large domestic production",
        },
        {
          country: "Nigeria",
          volume: "2.1 million tons",
          note: "To meet growing demand",
        },
        {
          country: "Iran",
          volume: "1.8 million tons",
          note: "For domestic consumption",
        },
        {
          country: "Philippines",
          volume: "1.6 million tons",
          note: "For food security",
        },
        {
          country: "Saudi Arabia",
          volume: "1.4 million tons",
          note: "For population needs",
        },
      ],
      pricePatterns: [
        {
          region: "Asian Markets",
          pattern: "Quality-focused, premium varieties command higher prices",
        },
        {
          region: "African Markets",
          pattern: "Price-sensitive, bulk purchasing preferred",
        },
        {
          region: "Latin American Markets",
          pattern: "Balanced focus on price and quality",
        },
        {
          region: "Middle Eastern Markets",
          pattern: "Premium quality for specific culinary needs",
        },
      ],
    },

    healthNutrition: {
      title: "Health and Nutrition Patterns",
      categories: [
        {
          type: "High Rice Dependency",
          consumption: ">200kg per capita annually",
          countries: ["Bangladesh", "Cambodia", "Laos", "Vietnam"],
          characteristics: [
            "60-80% of daily calories from rice",
            "Risk of micronutrient deficiencies",
            "Fortification programs and dietary diversification needed",
          ],
        },
        {
          type: "Moderate Rice Consumption",
          consumption: "100-200kg per capita annually",
          countries: ["Indonesia", "Thailand", "Sri Lanka", "Madagascar"],
          characteristics: [
            "Rice complemented with vegetables, protein, and fruits",
            "Traditional dietary practices ensuring nutritional balance",
            "Urbanization affecting traditional eating patterns",
          ],
        },
        {
          type: "Growing Rice Markets",
          consumption: "<100kg per capita annually",
          countries: ["Nigeria", "Brazil", "Ghana", "Egypt"],
          characteristics: [
            "Shift from traditional staples to rice",
            "Urban populations driving increased consumption",
            "Rising incomes enabling rice purchases",
          ],
        },
      ],
      healthTrends: [
        "Brown Rice: Growing demand in developed Asian countries",
        "Organic Rice: Premium markets in Japan, South Korea, urban China",
        "Ancient Varieties: Traditional red and black rice gaining popularity",
        "Functional Rice: Fortified varieties for addressing malnutrition",
      ],
    },

    futureTrends: {
      title: "Future Trends in Global Rice Consumption",
      demographics: [
        "Africa: Fastest-growing rice consumption due to population increase",
        "Urban Migration: City populations preferring rice over traditional grains",
        "Middle Class Expansion: Higher incomes leading to premium rice demand",
        "Youth Preferences: Younger generations adopting rice-based diets",
      ],
      climateAdaptation: [
        "Drought-Resistant Varieties: Countries adopting climate-resilient rice types",
        "Alternative Growing Methods: Aerobic rice cultivation for water conservation",
        "Regional Shifts: Production moving to new geographic areas",
        "International Cooperation: Technology sharing for climate adaptation",
      ],
      marketEvolution: [
        "Organic Certification: Growing demand in health-conscious markets",
        "Heritage Varieties: Traditional rice types gaining international recognition",
        "Traceability: Consumers wanting to know rice origin and production methods",
        "Sustainable Production: Environmentally conscious purchasing decisions",
      ],
    },

    opportunities: {
      title: "Opportunities for Sri Lankan Rice Exporters",
      targetMarkets: [
        {
          category: "High-Potential Asian Markets",
          markets: [
            {
              country: "Japan",
              opportunity: "Premium market for specialty rice varieties",
            },
            {
              country: "South Korea",
              opportunity: "Growing interest in healthy, ancient grains",
            },
            {
              country: "Singapore",
              opportunity:
                "Multicultural market appreciating diverse rice types",
            },
            {
              country: "Hong Kong",
              opportunity: "Gateway to greater China market",
            },
          ],
        },
        {
          category: "Emerging Western Markets",
          markets: [
            {
              country: "United Kingdom",
              opportunity: "Large South Asian diaspora community",
            },
            {
              country: "United States",
              opportunity:
                "Health-conscious consumers seeking authentic varieties",
            },
            {
              country: "Canada",
              opportunity: "Multicultural population with rice appreciation",
            },
            {
              country: "Australia",
              opportunity: "Growing Asian population and health trends",
            },
          ],
        },
        {
          category: "African Growth Markets",
          markets: [
            {
              country: "Nigeria",
              opportunity: "Rapidly expanding rice consumption",
            },
            {
              country: "Ghana",
              opportunity: "Government promoting rice consumption",
            },
            {
              country: "Kenya",
              opportunity: "Urban markets developing taste for quality rice",
            },
            {
              country: "South Africa",
              opportunity: "Diverse population with varied rice preferences",
            },
          ],
        },
      ],
      positioning: [
        "Traditional Varieties: Highlighting heritage Samba and red rice varieties",
        "Processing Excellence: Emphasizing traditional and modern processing methods",
        "Nutritional Benefits: Marketing health advantages of Sri Lankan varieties",
        "Cultural Authenticity: Connecting with diaspora communities worldwide",
        "Environmental Story: Traditional farming methods and sustainability",
        "Fair Trade: Supporting small farmers and rural communities",
      ],
    },

    keyInsights: [
      "Rice feeds over 3.5 billion people across six continents",
      "Bangladesh has the highest per capita consumption at 221kg annually",
      "Africa shows the fastest-growing rice consumption due to urbanization",
      "Premium and organic rice varieties are gaining popularity globally",
      "Climate change is driving innovation in drought-resistant rice varieties",
      "Laos is unique - only country where sticky rice is the primary staple",
      "China consumes 30% of global rice production",
      "Traditional varieties and heritage rice are gaining international recognition",
    ],

    conclusion: `Rice consumption patterns reveal the interconnected nature of our global food system, where a single grain feeds diverse cultures across six continents. From the rice terraces of Vietnam to the urban markets of Lagos, rice serves as both sustenance and cultural identity for billions of people worldwide. Understanding these consumption patterns provides valuable insights for rice producers, exporters, and food security planners. The growing global demand for rice, particularly in Africa and among urban populations worldwide, presents significant opportunities for quality rice producers like those in Sri Lanka.`,
  },
};

const Blog1 = () => {
  const [activeSection, setActiveSection] = useState("");
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

  const CountryCard = ({ country }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
            {country.name}
          </h4>
          <p className="text-sm text-green-600 font-medium">
            {country.subtitle}
          </p>
        </div>
        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-500">Annual Consumption:</span>
            <p className="font-semibold text-gray-900">{country.consumption}</p>
          </div>
          <div>
            <span className="text-gray-500">Per Capita:</span>
            <p className="font-semibold text-gray-900">{country.perCapita}</p>
          </div>
        </div>

        <div>
          <span className="text-gray-500 text-sm">Preferred Varieties:</span>
          <p className="text-sm text-gray-700 mt-1">{country.varieties}</p>
        </div>

        <div>
          <span className="text-gray-500 text-sm">Cultural Significance:</span>
          <p className="text-sm text-gray-700 mt-1">{country.significance}</p>
        </div>

        {country.highlights && (
          <div className="flex flex-wrap gap-2">
            {country.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        <div className="pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">{country.details}</p>
        </div>
      </div>
    </div>
  );

  const OpportunityCard = ({ category, markets }) => (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 p-6">
      <h4 className="text-lg font-bold text-gray-900 mb-4">{category}</h4>
      <div className="space-y-3">
        {markets.map((market, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <ChevronRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gray-900">
                {market.country}:
              </span>
              <span className="text-gray-700 ml-2">{market.opportunity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StatCard = ({ icon: Icon, title, value, description }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-2xl font-bold text-green-600 mb-2">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}

      <header className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/patterns/rice-pattern.svg')] opacity-10" />

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{blogData.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blogData.title}
            </h1>

            <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {blogData.metaDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-green-200">
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

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
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

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Globe}
              title="Countries Covered"
              value="50+"
              description="Nations where rice is primary staple"
            />
            <StatCard
              icon={Heart}
              title="People Fed"
              value="3.5B+"
              description="Global population dependent on rice"
            />
            <StatCard
              icon={BarChart3}
              title="Highest Consumption"
              value="256kg"
              description="Per capita annually (Cambodia)"
            />
            <StatCard
              icon={TrendingUp}
              title="Fastest Growing"
              value="Africa"
              description="Continent with rapid rice adoption"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Rice: The World's Most Important Staple Food
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {blogData.content.introduction}
            </p>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Key Global Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {blogData.content.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Sections */}
        {blogData.content.sections.map((section, sectionIdx) => (
          <section key={section.id} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                {section.description}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {section.countries.map((country, idx) => (
                <CountryCard key={idx} country={country} />
              ))}
            </div>
          </section>
        ))}

        {/* Cultural Significance */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.culturalSignificance.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogData.content.culturalSignificance.categories.map(
                (category, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-amber-600" />
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.practices.map((practice, practiceIdx) => (
                        <li
                          key={practiceIdx}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Economic Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.economicImpact.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Major Importers */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Major Rice Importers
                </h3>
                <div className="space-y-4">
                  {blogData.content.economicImpact.majorImporters.map(
                    (importer, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {importer.country}
                          </h4>
                          <span className="text-blue-600 font-bold text-sm">
                            {importer.volume}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{importer.note}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Price Patterns */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Regional Price Patterns
                </h3>
                <div className="space-y-4">
                  {blogData.content.economicImpact.pricePatterns.map(
                    (pattern, idx) => (
                      <div
                        key={idx}
                        className="bg-green-50 rounded-lg p-4 border border-green-200"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {pattern.region}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {pattern.pattern}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health and Nutrition */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.healthNutrition.title}
            </h2>

            {/* Consumption Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {blogData.content.healthNutrition.categories.map(
                (category, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {category.type}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-3">
                      {category.consumption}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Countries:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.countries.map((country, countryIdx) => (
                          <span
                            key={countryIdx}
                            className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Characteristics:
                      </h4>
                      <ul className="space-y-1">
                        {category.characteristics.map((char, charIdx) => (
                          <li
                            key={charIdx}
                            className="text-xs text-gray-600 flex items-start gap-2"
                          >
                            <ChevronRight className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Health Trends */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Emerging Health Trends
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogData.content.healthNutrition.healthTrends.map(
                  (trend, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{trend}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.futureTrends.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Demographics */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Demographic Drivers
                </h3>
                <ul className="space-y-3">
                  {blogData.content.futureTrends.demographics.map(
                    (demo, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-3"
                      >
                        <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{demo}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Climate Adaptation */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Climate Adaptation
                </h3>
                <ul className="space-y-3">
                  {blogData.content.futureTrends.climateAdaptation.map(
                    (climate, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-3"
                      >
                        <Leaf className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{climate}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Market Evolution */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Market Evolution
                </h3>
                <ul className="space-y-3">
                  {blogData.content.futureTrends.marketEvolution.map(
                    (market, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-3"
                      >
                        <BarChart3 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{market}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {blogData.content.opportunities.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic market insights for expanding into global rice markets
            </p>
          </div>

          {/* Target Markets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {blogData.content.opportunities.targetMarkets.map(
              (opportunity, idx) => (
                <OpportunityCard
                  key={idx}
                  category={opportunity.category}
                  markets={opportunity.markets}
                />
              )
            )}
          </div>

          {/* Positioning Strategies */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-xl lg:text-2xl font-bold mb-6 text-center">
              Strategic Positioning for Sri Lankan Rice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.content.opportunities.positioning.map(
                (strategy, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{strategy}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Conclusion: Rice as Global Unifier
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-200">
              {blogData.content.conclusion}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">
                Key Takeaways for the Industry
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">For Exporters:</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Focus on quality differentiation, cultural authenticity, and
                    sustainable practices to capture premium market segments
                    globally.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">For Producers:</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Invest in heritage varieties, organic certification, and
                    direct-to-consumer channels to maximize value in growing
                    markets.
                  </p>
                </div>
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
        {/* Additional structured data for rich snippets */}
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
              "@id": window.location.href,
            },
            publisher: {
              "@type": "Organization",
              name: "Sajith Rice Mill",
              logo: {
                "@type": "ImageObject",
                url: "/sajith-logo.png",
              },
            },
          })}
        </script>
      </div>
    </article>
  );
};

export default Blog1;
