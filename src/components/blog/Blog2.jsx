import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Wheat,
  TrendingUp,
  ChevronRight,
  Share2,
  Settings,
  Zap,
  Shield,
  Leaf,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Award,
  Factory,
  Thermometer,
  Droplets,
  Eye,
} from "lucide-react";

// Complete blog data structure for rice processing content
const blogData = {
  id: "paddy-fields-to-perfect-grains-processing-journey",
  title:
    "From Paddy Fields to Perfect Grains: The Traditional Sri Lankan Rice Processing Journey",
  metaDescription:
    "Discover the fascinating journey of Sri Lankan rice from paddy fields to your table. Learn about traditional and modern processing methods that preserve quality and nutrition.",
  author: "Sajith Rice Mill Processing Team",
  publishDate: "2024-01-20",
  readTime: "18 min read",
  category: "Rice Processing & Technology",
  tags: [
    "rice processing",
    "traditional methods",
    "quality control",
    "sri lankan rice",
    "grain technology",
  ],
  coverImage: "/blog/rice-processing-journey.webp",

  content: {
    introduction: `For over 2,500 years, Sri Lankan farmers and millers have perfected the intricate process of transforming golden paddy into premium rice grains. This time-honored journey from field to table represents not just agricultural processing, but a cultural heritage that combines ancient wisdom with modern precision to deliver some of the world's finest rice varieties.`,

    processingStages: [
      {
        id: "harvesting",
        stage: "Stage 1",
        title: "Harvesting - The Critical First Step",
        icon: Wheat,
        description: "Where quality begins in the paddy fields",
        traditionalMethods: {
          title: "Traditional Harvesting Methods",
          methods: [
            {
              name: "Maturity Assessment",
              description:
                "Farmers examine the paddy for the golden color that indicates 80-85% moisture content - the perfect harvesting window.",
              importance: "Critical for grain quality",
            },
            {
              name: "Hand Harvesting",
              description:
                "Many premium rice varieties are still hand-harvested using traditional sickles, ensuring minimal grain damage.",
              importance: "Preserves grain integrity",
            },
            {
              name: "Bundle Formation",
              description:
                "Harvested paddy is carefully bundled and left to field-dry for 2-3 days, beginning natural moisture reduction.",
              importance: "Natural drying process",
            },
            {
              name: "Timing Precision",
              description:
                "Harvesting occurs during early morning or late afternoon to avoid midday heat that can crack grains.",
              importance: "Prevents quality damage",
            },
          ],
        },
        modernInnovations: [
          "Combine Harvesters: For large-scale operations while maintaining quality standards",
          "Moisture Meters: Electronic testing to determine optimal harvest timing",
          "Weather Monitoring: Satellite data to predict ideal harvesting windows",
          "GPS Mapping: Precision harvesting to optimize field efficiency",
        ],
        qualityFactors: [
          "Moisture content 80-85%",
          "Golden color indication",
          "Minimal grain damage",
          "Optimal timing",
        ],
        keyBenefits: [
          "Premium grain quality",
          "Reduced breakage",
          "Enhanced nutritional value",
        ],
      },
      {
        id: "drying",
        stage: "Stage 2",
        title:
          "Primary Drying - Preserving Quality Through Moisture Management",
        icon: Thermometer,
        description: "Critical moisture reduction for long-term quality",
        traditionalMethods: {
          title: "Sun Drying Tradition",
          methods: [
            {
              name: "Spreading Technique",
              description:
                "Paddy is spread on clean concrete floors, mats, or tarpaulins in thin, even layers.",
              importance: "Uniform drying",
            },
            {
              name: "Regular Turning",
              description:
                "Farmers turn the paddy every 2-3 hours using wooden rakes to ensure uniform drying.",
              importance: "Prevents hot spots",
            },
            {
              name: "Weather Protection",
              description:
                "Quick covering systems protect grain from sudden rain or excessive moisture.",
              importance: "Quality preservation",
            },
            {
              name: "Moisture Target",
              description:
                "Gradual reduction from 20-25% to 14% moisture content over 3-5 days.",
              importance: "Optimal storage moisture",
            },
          ],
        },
        modernInnovations: [
          "Mechanical Dryers: Controlled temperature and airflow systems",
          "Continuous Flow Dryers: Large-scale processing with consistent results",
          "Solar Dryers: Hybrid systems combining traditional and modern approaches",
          "Quality Monitoring: Real-time moisture and temperature tracking",
        ],
        qualityFactors: [
          "Target 14% moisture",
          "Uniform drying",
          "Temperature control",
          "Weather protection",
        ],
        keyBenefits: [
          "Extended shelf life",
          "Preserved nutritional value",
          "Reduced spoilage risk",
        ],
      },
      {
        id: "storage",
        stage: "Stage 3",
        title: "Storage and Conditioning - Maintaining Excellence",
        icon: Factory,
        description: "Preserving quality until processing",
        traditionalMethods: {
          title: "Traditional Storage Wisdom",
          methods: [
            {
              name: "Granary Systems",
              description:
                "Traditional clay or wooden structures that naturally regulate moisture and temperature.",
              importance: "Natural climate control",
            },
            {
              name: "Natural Pest Control",
              description:
                "Use of neem leaves, turmeric, and other natural deterrents to protect stored paddy.",
              importance: "Chemical-free protection",
            },
            {
              name: "Aeration Methods",
              description:
                "Strategic placement and periodic movement to prevent hot spots and maintain grain quality.",
              importance: "Quality maintenance",
            },
            {
              name: "Inventory Rotation",
              description:
                "First-in, first-out systems ensuring freshness and quality consistency.",
              importance: "Consistent quality",
            },
          ],
        },
        modernInnovations: [
          "Climate-Controlled Warehouses: Precise temperature and humidity management",
          "Fumigation Systems: Safe, effective pest control methods",
          "Quality Testing: Regular sampling and analysis throughout storage period",
          "Traceability Systems: Digital tracking from field to final product",
        ],
        qualityFactors: [
          "Controlled environment",
          "Pest management",
          "Regular monitoring",
          "Inventory rotation",
        ],
        keyBenefits: [
          "Maintained quality",
          "Reduced losses",
          "Consistent supply",
        ],
      },
      {
        id: "cleaning",
        stage: "Stage 4",
        title: "Cleaning and Pre-Processing - Removing Impurities",
        icon: Shield,
        description: "Ensuring purity before milling",
        traditionalMethods: {
          title: "Multi-Stage Cleaning Process",
          methods: [
            {
              name: "Pre-Cleaning",
              description:
                "Removal of straw, stones, and foreign materials using screens and air currents.",
              importance: "Initial purification",
            },
            {
              name: "De-Stoning",
              description:
                "Specialized gravity separators remove stones and heavy impurities.",
              importance: "Equipment protection",
            },
            {
              name: "Grain Grading",
              description:
                "Separation by size to ensure uniform processing and final product consistency.",
              importance: "Uniform processing",
            },
            {
              name: "Final Cleaning",
              description:
                "Aspiration systems remove dust, chaff, and lightweight materials.",
              importance: "Final purification",
            },
          ],
        },
        modernInnovations: [
          "Optical Sorters: Advanced systems using cameras and AI for foreign material detection",
          "Magnetic Separators: Removal of metallic contaminants",
          "Vibrating Screens: Multiple-deck systems for efficient separation",
          "Air Classification: Precise separation by weight and density",
        ],
        qualityFactors: [
          "Foreign material removal",
          "Size uniformity",
          "Purity standards",
          "Visual inspection",
        ],
        keyBenefits: [
          "Higher purity",
          "Equipment protection",
          "Consistent quality",
        ],
      },
      {
        id: "hulling",
        stage: "Stage 5",
        title: "Hulling - Revealing the Brown Rice",
        icon: Zap,
        description: "Removing husks while preserving nutrition",
        traditionalMethods: {
          title: "The Hulling Process Explained",
          methods: [
            {
              name: "Rubber Roll Hullers",
              description:
                "Gentle pressure removes husks without damaging grains.",
              importance: "Gentle processing",
            },
            {
              name: "Paddy Separation",
              description:
                "Advanced systems separate hulled rice from remaining paddy for re-processing.",
              importance: "Efficiency optimization",
            },
            {
              name: "Husk Collection",
              description:
                "Valuable rice husks are collected for use as fuel, construction material, or agricultural applications.",
              importance: "Waste utilization",
            },
            {
              name: "Brown Rice Production",
              description:
                "The result is brown rice with intact bran layer, rich in nutrients and fiber.",
              importance: "Nutritional preservation",
            },
          ],
        },
        modernInnovations: [
          "Precision Hulling: Computer-controlled pressure for minimal damage",
          "Automated Separation: AI-powered systems for efficient paddy separation",
          "Quality Monitoring: Real-time assessment of hulling efficiency",
          "Integrated Systems: Seamless flow from hulling to next processing stage",
        ],
        qualityFactors: [
          "Hulling ratio >75%",
          "Minimal breakage",
          "Bran integrity",
          "Uniform processing",
        ],
        keyBenefits: [
          "High yield",
          "Nutritional retention",
          "Quality brown rice",
        ],
      },
      {
        id: "whitening",
        stage: "Stage 6",
        title: "Whitening/Polishing - Creating Premium White Rice",
        icon: Eye,
        description: "Transforming brown rice to premium white rice",
        traditionalMethods: {
          title: "The Whitening Process",
          methods: [
            {
              name: "Abrasive Whitening",
              description:
                "Friction removes bran layers while preserving grain shape.",
              importance: "Shape preservation",
            },
            {
              name: "Multi-Stage Process",
              description:
                "Gradual removal prevents overprocessing and maintains grain integrity.",
              importance: "Quality control",
            },
            {
              name: "Degree Control",
              description:
                "Precise control over whitening levels for different grade requirements.",
              importance: "Grade classification",
            },
            {
              name: "Bran Recovery",
              description:
                "Valuable rice bran is collected for oil production and animal feed.",
              importance: "Value addition",
            },
          ],
        },
        modernInnovations: [
          "Water Polishing: Creates the characteristic shine of premium white rice",
          "Glucose Coating: Optional treatment for enhanced appearance",
          "Quality Grading: Continuous monitoring ensures consistent final product",
          "Broken Grain Separation: Removal of damaged grains for uniform quality",
        ],
        qualityFactors: [
          "Whiteness degree",
          "Grain integrity",
          "Uniformity",
          "Surface finish",
        ],
        keyBenefits: [
          "Premium appearance",
          "Extended shelf life",
          "Market preference",
        ],
      },
      {
        id: "grading",
        stage: "Stage 7",
        title: "Grading and Sorting - Ensuring Consistency",
        icon: BarChart3,
        description: "Final quality classification and sorting",
        traditionalMethods: {
          title: "Advanced Sorting Technologies",
          methods: [
            {
              name: "Size Grading",
              description:
                "Multiple screens separate rice into uniform size categories.",
              importance: "Size consistency",
            },
            {
              name: "Color Sorting",
              description:
                "Optical sorters remove discolored or damaged grains using high-speed cameras.",
              importance: "Visual quality",
            },
            {
              name: "Density Separation",
              description:
                "Removes immature or damaged grains based on weight differences.",
              importance: "Maturity selection",
            },
            {
              name: "Electronic Sorting",
              description:
                "Advanced systems detect and remove foreign materials and defective grains.",
              importance: "Final purification",
            },
          ],
        },
        modernInnovations: [
          "AI-Powered Sorting: Machine learning for defect detection",
          "Hyperspectral Imaging: Advanced color and composition analysis",
          "Multi-Parameter Sorting: Simultaneous sorting by multiple criteria",
          "Real-Time Quality Assessment: Continuous monitoring and adjustment",
        ],
        qualityFactors: [
          "Size uniformity",
          "Color consistency",
          "Broken grain %",
          "Foreign material",
        ],
        keyBenefits: [
          "Premium quality",
          "Market compliance",
          "Customer satisfaction",
        ],
      },
      {
        id: "packaging",
        stage: "Stage 8",
        title: "Final Processing and Packaging",
        icon: Award,
        description: "Ready for global markets",
        traditionalMethods: {
          title: "Value Addition Options",
          methods: [
            {
              name: "Parboiling",
              description:
                "Steam treatment that enhances nutrition and changes cooking characteristics.",
              importance: "Nutritional enhancement",
            },
            {
              name: "Enrichment",
              description:
                "Addition of vitamins and minerals to enhance nutritional value.",
              importance: "Health benefits",
            },
            {
              name: "Aging",
              description:
                "Controlled storage to develop enhanced aroma and cooking qualities.",
              importance: "Flavor development",
            },
            {
              name: "Blending",
              description:
                "Combining different varieties to create specific flavor and texture profiles.",
              importance: "Custom products",
            },
          ],
        },
        modernInnovations: [
          "Moisture-Proof Materials: Multi-layer packaging prevents moisture ingress",
          "Vacuum Sealing: Extended shelf life and freshness preservation",
          "Portion Packaging: Consumer-friendly sizes for international markets",
          "Labeling Compliance: Meeting international food safety and labeling requirements",
        ],
        qualityFactors: [
          "Packaging integrity",
          "Shelf life",
          "Market compliance",
          "Brand presentation",
        ],
        keyBenefits: [
          "Extended freshness",
          "Global market access",
          "Consumer convenience",
        ],
      },
    ],

    qualityAssurance: {
      title: "Quality Assurance Throughout the Process",
      laboratoryTesting: [
        {
          test: "Moisture Content",
          purpose: "Optimal levels for storage and cooking quality",
        },
        {
          test: "Broken Grain Analysis",
          purpose: "Percentage calculations for grade classification",
        },
        {
          test: "Nutritional Testing",
          purpose: "Verification of protein, vitamin, and mineral content",
        },
        {
          test: "Contaminant Screening",
          purpose:
            "Detection of pesticides, heavy metals, and foreign substances",
        },
        {
          test: "Cooking Quality Tests",
          purpose: "Evaluation of texture, aroma, and cooking characteristics",
        },
      ],
      certifications: [
        "ISO 22000: Food Safety Management Systems certification",
        "HACCP: Hazard Analysis Critical Control Points implementation",
        "Organic Certification: For organic rice varieties",
        "Export Quality Standards: Compliance with importing country requirements",
      ],
    },

    traditionalVsModern: {
      title: "Traditional vs. Modern Processing: A Balanced Approach",
      traditional: {
        advantages: [
          "Small-Batch Processing: Careful handling preserves grain integrity",
          "Artisanal Techniques: Hand-sorting and traditional methods for specialty varieties",
          "Cultural Preservation: Maintaining ancestral knowledge and processing wisdom",
          "Quality Over Quantity: Focus on premium quality rather than mass production",
        ],
      },
      modern: {
        advantages: [
          "Automation: Consistent quality and increased efficiency",
          "Quality Control: Scientific testing and monitoring throughout the process",
          "Traceability: Complete tracking from field to consumer",
          "Safety Standards: International food safety compliance",
        ],
      },
    },

    nutritionalImpact: {
      title: "The Impact of Processing on Nutritional Value",
      comparisonTable: [
        {
          processingLevel: "Brown Rice",
          fiberContent: "High",
          bVitamins: "High",
          minerals: "High",
          shelfLife: "6 months",
        },
        {
          processingLevel: "Lightly Polished",
          fiberContent: "Medium",
          bVitamins: "Medium",
          minerals: "Medium",
          shelfLife: "12 months",
        },
        {
          processingLevel: "Fully Polished",
          fiberContent: "Low",
          bVitamins: "Low",
          minerals: "Low",
          shelfLife: "18+ months",
        },
        {
          processingLevel: "Parboiled",
          fiberContent: "Medium",
          bVitamins: "Medium-High",
          minerals: "High",
          shelfLife: "12-18 months",
        },
      ],
      retentionStrategies: [
        "Brown Rice: Retains most nutrients in the bran layer including fiber, vitamins, and minerals",
        "White Rice: More refined but longer shelf life and preferred texture for many dishes",
        "Parboiled Rice: Steam treatment drives nutrients into the grain before hull removal",
        "Minimally Processed: Light polishing preserves more nutrients while improving appearance",
      ],
    },

    sustainability: {
      title: "Environmental Sustainability in Rice Processing",
      wasteUtilization: [
        {
          waste: "Rice Husk",
          applications:
            "Fuel for boilers, construction materials, soil amendments",
        },
        {
          waste: "Rice Bran",
          applications: "Oil extraction, animal feed, nutritional supplements",
        },
        {
          waste: "Broken Rice",
          applications: "Food processing, brewing, starch production",
        },
        {
          waste: "Process Water",
          applications: "Treatment and reuse of processing water",
        },
      ],
      energyEfficiency: [
        "Renewable Energy: Solar and biomass power generation",
        "Heat Recovery: Utilizing waste heat for drying processes",
        "Efficient Machinery: Energy-saving processing equipment",
        "Water Conservation: Minimizing water usage and implementing recycling systems",
      ],
    },

    economicImpact: {
      title: "Economic Impact of Rice Processing",
      valueAddition: [
        "Price Premium: Processed rice commands 3-5 times the price of raw paddy",
        "Export Opportunities: Access to high-value international markets",
        "Employment Generation: Jobs in rural areas supporting local economies",
        "Foreign Exchange: Significant contribution to national export earnings",
      ],
      ruralSupport: [
        "Farmer Income: Stable market for paddy production",
        "Local Employment: Jobs in milling, packaging, and distribution",
        "Skill Development: Training opportunities in modern agricultural techniques",
        "Infrastructure Development: Improved roads, storage, and utilities",
      ],
    },

    futureTrends: {
      title: "Future Trends in Sri Lankan Rice Processing",
      technologies: [
        "Artificial Intelligence: Automated quality assessment and sorting systems",
        "IoT Integration: Real-time monitoring of processing conditions and equipment",
        "Blockchain Technology: Enhanced traceability and supply chain transparency",
        "Precision Agriculture: Data-driven farming and processing optimization",
      ],
      marketEvolution: [
        "Health-Conscious Products: Increased demand for minimally processed and nutritious varieties",
        "Convenience Foods: Ready-to-cook and instant rice products",
        "Organic Options: Growing market for certified organic rice",
        "Specialty Varieties: Premium traditional varieties for gourmet markets",
      ],
    },

    keyInsights: [
      "2,500 years of rice processing heritage in Sri Lanka",
      "8-stage comprehensive processing journey from paddy to perfect grains",
      "Balance of traditional wisdom and modern technology",
      "Quality assurance at every processing stage",
      "Sustainable processing with waste utilization",
      "Nutritional value preservation through careful processing",
      "Economic value addition from paddy to premium rice",
      "Global market compliance and international standards",
    ],

    conclusion: `The journey from Sri Lankan paddy fields to premium rice represents a perfect harmony of ancient wisdom and modern technology. This comprehensive process ensures that every grain of Sri Lankan rice maintains the exceptional quality, distinctive flavor, and nutritional value that has made it increasingly sought after in global markets. Understanding this meticulous process helps consumers appreciate the care, skill, and dedication involved in producing authentic Sri Lankan rice varieties.`,
  },
};

const Blog2 = () => {
  const [activeStage, setActiveStage] = useState("harvesting");
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

  const ProcessingStageCard = ({ stage, isActive, onClick }) => {
    const IconComponent = stage.icon;

    return (
      <div
        className={`cursor-pointer transition-all duration-300 rounded-xl border-2 p-6 ${
          isActive
            ? "border-green-500 bg-green-50 shadow-lg scale-105"
            : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md"
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isActive ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <IconComponent
              className={`w-6 h-6 ${
                isActive ? "text-green-600" : "text-gray-600"
              }`}
            />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">
              {stage.stage}
            </div>
            <h3
              className={`font-bold ${
                isActive ? "text-green-700" : "text-gray-900"
              }`}
            >
              {stage.title.split(" - ")[0]}
            </h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">{stage.description}</p>
        <div className="flex flex-wrap gap-2">
          {stage.keyBenefits.slice(0, 2).map((benefit, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-1 rounded-full ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const StageDetailView = ({ stage }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
          <stage.icon className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <div className="text-sm font-medium text-green-600">
            {stage.stage}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{stage.title}</h2>
          <p className="text-gray-600">{stage.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Traditional Methods */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-amber-600" />
            {stage.traditionalMethods.title}
          </h3>
          <div className="space-y-4">
            {stage.traditionalMethods.methods.map((method, idx) => (
              <div
                key={idx}
                className="bg-amber-50 rounded-lg p-4 border border-amber-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {method.name}
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  {method.description}
                </p>
                <span className="inline-block bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-medium">
                  {method.importance}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Innovations */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" />
            Modern Innovations
          </h3>
          <div className="space-y-3">
            {stage.modernInnovations.map((innovation, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-lg p-4 border border-blue-200"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{innovation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Factors & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="font-semibold text-green-800 mb-3">Quality Factors</h4>
          <div className="space-y-2">
            {stage.qualityFactors.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-3">Key Benefits</h4>
          <div className="space-y-2">
            {stage.keyBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const currentStage = blogData.content.processingStages.find(
    (stage) => stage.id === activeStage
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
      <header className="relative bg-gradient-to-br from-green-600 via-amber-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/patterns/grain-pattern.svg')] opacity-10" />

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Factory className="w-4 h-4" />
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

      {/* Processing Overview Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Processing Stages
              </h3>
              <p className="text-2xl font-bold text-green-600 mb-2">8</p>
              <p className="text-sm text-gray-600">
                From paddy to perfect grains
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Heritage Years
              </h3>
              <p className="text-2xl font-bold text-amber-600 mb-2">2,500+</p>
              <p className="text-sm text-gray-600">
                Years of rice processing wisdom
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quality Tests
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-sm text-gray-600">At every processing stage</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sustainability
              </h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">100%</p>
              <p className="text-sm text-gray-600">
                Waste utilization achieved
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              The Ancient Art of Rice Processing in Sri Lanka
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {blogData.content.introduction}
            </p>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Key Processing Insights
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

        {/* Interactive Processing Stages */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              The 8-Stage Processing Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on each stage to explore the detailed process from
              traditional methods to modern innovations
            </p>
          </div>

          {/* Stage Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {blogData.content.processingStages.map((stage) => (
              <ProcessingStageCard
                key={stage.id}
                stage={stage}
                isActive={activeStage === stage.id}
                onClick={() => setActiveStage(stage.id)}
              />
            ))}
          </div>

          {/* Stage Detail View */}
          {currentStage && <StageDetailView stage={currentStage} />}
        </section>

        {/* Quality Assurance Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.qualityAssurance.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Laboratory Testing */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  Laboratory Testing
                </h3>
                <div className="space-y-4">
                  {blogData.content.qualityAssurance.laboratoryTesting.map(
                    (test, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {test.test}
                        </h4>
                        <p className="text-sm text-gray-700">{test.purpose}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* International Certifications */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  International Certifications
                </h3>
                <div className="space-y-3">
                  {blogData.content.qualityAssurance.certifications.map(
                    (cert, idx) => (
                      <div
                        key={idx}
                        className="bg-green-50 rounded-lg p-4 border border-green-200"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{cert}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional vs Modern Comparison */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.traditionalVsModern.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Traditional Methods */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-amber-600" />
                  Preserving Traditional Methods
                </h3>
                <div className="space-y-4">
                  {blogData.content.traditionalVsModern.traditional.advantages.map(
                    (advantage, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          {advantage}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Modern Innovation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Embracing Modern Innovation
                </h3>
                <div className="space-y-4">
                  {blogData.content.traditionalVsModern.modern.advantages.map(
                    (advantage, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          {advantage}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutritional Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.nutritionalImpact.title}
            </h2>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-green-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Processing Level
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Fiber Content
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      B-Vitamins
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Minerals
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Shelf Life
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogData.content.nutritionalImpact.comparisonTable.map(
                    (row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                          {row.processingLevel}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {row.fiberContent}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {row.bVitamins}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {row.minerals}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          {row.shelfLife}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            {/* Retention Strategies */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Nutrient Retention Strategies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogData.content.nutritionalImpact.retentionStrategies.map(
                  (strategy, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Droplets className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{strategy}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.sustainability.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Waste Utilization */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Waste Utilization
                </h3>
                <div className="space-y-4">
                  {blogData.content.sustainability.wasteUtilization.map(
                    (waste, idx) => (
                      <div
                        key={idx}
                        className="bg-green-50 rounded-lg p-4 border border-green-200"
                      >
                        <h4 className="font-semibold text-green-800 mb-2">
                          {waste.waste}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {waste.applications}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Energy Efficiency */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Energy Efficiency
                </h3>
                <div className="space-y-3">
                  {blogData.content.sustainability.energyEfficiency.map(
                    (efficiency, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {efficiency}
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

        {/* Economic Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              {blogData.content.economicImpact.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Value Addition */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Value Addition Benefits
                </h3>
                <div className="space-y-4">
                  {blogData.content.economicImpact.valueAddition.map(
                    (benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <TrendingUp className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Rural Support */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Supporting Rural Communities
                </h3>
                <div className="space-y-4">
                  {blogData.content.economicImpact.ruralSupport.map(
                    (support, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{support}</span>
                      </div>
                    )
                  )}
                </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Technological Innovations */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Technological Innovations
                </h3>
                <div className="space-y-4">
                  {blogData.content.futureTrends.technologies.map(
                    (tech, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{tech}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Market Evolution */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  Market Evolution
                </h3>
                <div className="space-y-4">
                  {blogData.content.futureTrends.marketEvolution.map(
                    (market, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{market}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Conclusion: Excellence Through Tradition and Innovation
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-200">
              {blogData.content.conclusion}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">For Rice Processors</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Invest in both traditional knowledge preservation and modern
                  technology to create premium rice products that meet global
                  quality standards.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">For Consumers</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Understanding the processing journey helps appreciate the
                  quality, craftsmanship, and heritage behind authentic Sri
                  Lankan rice varieties.
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

        {/* Structured data for processing stages */}
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
              name: "Sri Lankan Rice Processing",
              description:
                "Traditional and modern rice processing methods in Sri Lanka",
            },
          })}
        </script>
      </div>
    </article>
  );
};

export default Blog2;
