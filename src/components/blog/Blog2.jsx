import React, { useState, useEffect } from "react";
import Head from "next/head";
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

// Enhanced blog data structure with comprehensive SEO data
const blogData = {
  id: "paddy-fields-to-perfect-grains-processing-journey",
  title:
    "From Paddy Fields to Perfect Grains: The Traditional Sri Lankan Rice Processing Journey",
  metaTitle:
    "Sri Lankan Rice Processing: Complete Guide From Paddy to Premium Grains 2024",
  metaDescription:
    "Discover the fascinating 8-stage journey of Sri Lankan rice processing from paddy fields to premium grains. Learn traditional methods, modern innovations, and quality control secrets.",
  author: "Sajith Rice Mill Processing Team",
  slug: "sri-lankan-rice-processing-journey-paddy-to-grains",
  canonicalUrl: "/blog/sri-lankan-rice-processing-journey-paddy-to-grains",
  lastModified: "2024-01-25T10:00:00+05:30",
  publishDate: "2024-01-20T08:00:00+05:30",
  readTime: "18 min read",
  category: "Rice Processing & Technology",
  primaryKeyword: "sri lankan rice processing",
  secondaryKeywords: [
    "traditional rice processing",
    "paddy to rice conversion",
    "rice milling sri lanka",
    "rice quality control",
    "organic rice processing",
    "rice processing stages",
    "rice production methods",
    "sri lankan agriculture",
  ],
  tags: [
    "rice processing",
    "traditional methods",
    "quality control",
    "sri lankan rice",
    "grain technology",
    "agricultural processing",
    "food production",
    "heritage farming",
  ],
  coverImage: {
    url: "/blog/rice-processing-journey.webp",
    alt: "Traditional Sri Lankan rice processing from paddy fields to perfect grains",
    width: 1200,
    height: 630,
  },

  // Enhanced SEO metadata
  seo: {
    focusKeyword: "sri lankan rice processing",
    keywordDensity: "1.5%",
    readabilityScore: "Good",
    contentLength: "4500+",
    headingStructure: "H1 > H2 > H3",
    imageOptimization: "WebP format with alt text",
    internalLinks: 8,
    externalLinks: 3,
    socialMediaTags: {
      ogTitle:
        "From Paddy Fields to Perfect Grains: Sri Lankan Rice Processing Journey",
      ogDescription:
        "Explore the 2,500-year heritage of Sri Lankan rice processing. Discover 8 comprehensive stages from traditional harvesting to modern milling techniques.",
      ogImage: "/blog/rice-processing-journey-og.webp",
      ogType: "article",
      twitterCard: "summary_large_image",
      twitterTitle:
        "Sri Lankan Rice Processing: Complete 8-Stage Journey Guide",
      twitterDescription:
        "Discover traditional & modern rice processing methods in Sri Lanka. From paddy fields to premium grains - comprehensive guide with quality insights.",
    },
  },

  content: {
    introduction: `For over 2,500 years, Sri Lankan farmers and millers have perfected the intricate process of transforming golden paddy into premium rice grains. This time-honored journey from field to table represents not just agricultural processing, but a cultural heritage that combines ancient wisdom with modern precision to deliver some of the world's finest rice varieties.`,

    // Enhanced FAQ for SEO
    faq: [
      {
        question: "What are the main stages of Sri Lankan rice processing?",
        answer:
          "Sri Lankan rice processing involves 8 comprehensive stages: harvesting, primary drying, storage and conditioning, cleaning and pre-processing, hulling, whitening/polishing, grading and sorting, and final processing and packaging. Each stage maintains the quality and heritage of traditional Sri Lankan rice varieties.",
      },
      {
        question:
          "How does traditional rice processing differ from modern methods in Sri Lanka?",
        answer:
          "Traditional Sri Lankan rice processing emphasizes small-batch handling, sun-drying techniques, and artisanal quality control, while modern methods incorporate automated systems, controlled environments, and scientific testing. The best mills combine both approaches for optimal quality.",
      },
      {
        question:
          "What quality factors are considered during rice processing in Sri Lanka?",
        answer:
          "Key quality factors include moisture content (target 14%), grain integrity, uniformity, color consistency, broken grain percentage, foreign material removal, and nutritional preservation. Each processing stage has specific quality checkpoints.",
      },
      {
        question:
          "Why is Sri Lankan rice processing considered superior globally?",
        answer:
          "Sri Lankan rice processing combines 2,500 years of traditional knowledge with modern technology, focusing on preserving grain integrity, maintaining nutritional value, and ensuring consistent quality. The heritage varieties and meticulous processing create premium rice products.",
      },
    ],

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

    // Enhanced sections for SEO
    qualityAssurance: {
      title: "Quality Assurance Throughout the Rice Processing Journey",
      laboratoryTesting: [
        {
          test: "Moisture Content Analysis",
          purpose:
            "Optimal levels for storage and cooking quality - maintaining 14% moisture for premium grades",
        },
        {
          test: "Broken Grain Analysis",
          purpose:
            "Percentage calculations for grade classification - less than 5% for premium quality",
        },
        {
          test: "Nutritional Content Testing",
          purpose:
            "Verification of protein, vitamin, and mineral content retention during processing",
        },
        {
          test: "Contaminant Screening",
          purpose:
            "Detection of pesticides, heavy metals, and foreign substances for food safety",
        },
        {
          test: "Cooking Quality Assessment",
          purpose:
            "Evaluation of texture, aroma, elongation ratio, and cooking characteristics",
        },
      ],
      certifications: [
        "ISO 22000: Food Safety Management Systems certification ensuring international standards",
        "HACCP: Hazard Analysis Critical Control Points implementation for food safety",
        "Organic Certification: For organically grown and processed rice varieties",
        "Export Quality Standards: Compliance with importing country requirements and regulations",
      ],
    },

    keyInsights: [
      "2,500+ years of rice processing heritage in Sri Lanka",
      "8-stage comprehensive processing journey from paddy to perfect grains",
      "Perfect balance of traditional wisdom and modern technology",
      "Quality assurance protocols at every processing stage",
      "100% waste utilization through sustainable processing methods",
      "Nutritional value preservation through careful processing techniques",
      "3-5x economic value addition from paddy to premium rice",
      "International quality compliance and food safety standards",
      "Traditional varieties preservation alongside modern efficiency",
      "Export-ready processing meeting global market requirements",
    ],

    conclusion: `The journey from Sri Lankan paddy fields to premium rice represents a perfect harmony of ancient wisdom and modern technology. This comprehensive 8-stage process ensures that every grain of Sri Lankan rice maintains the exceptional quality, distinctive flavor, and nutritional value that has made it increasingly sought after in global markets. Understanding this meticulous process helps consumers appreciate the care, skill, and dedication involved in producing authentic Sri Lankan rice varieties that carry forward a 2,500-year heritage of agricultural excellence.`,
  },
};

const Blog2 = () => {
  const [activeStage, setActiveStage] = useState("harvesting");
  const [readingProgress, setReadingProgress] = useState(0);

  // Enhanced reading progress tracking
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

  // Format date for SEO
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Enhanced share functionality
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: blogData.seo.socialMediaTags.ogTitle,
        text: blogData.seo.socialMediaTags.ogDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Optional: Show toast notification
    }
  };

  // SEO-optimized structured data
  const getStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${typeof window !== "undefined" ? window.location.origin : ""}${
        blogData.canonicalUrl
      }`,
      headline: blogData.title,
      alternativeHeadline: blogData.metaTitle,
      description: blogData.metaDescription,
      image: {
        "@type": "ImageObject",
        url: `${typeof window !== "undefined" ? window.location.origin : ""}${
          blogData.coverImage.url
        }`,
        width: blogData.coverImage.width,
        height: blogData.coverImage.height,
        alt: blogData.coverImage.alt,
      },
      author: {
        "@type": "Organization",
        name: blogData.author,
        url: typeof window !== "undefined" ? window.location.origin : "",
        logo: {
          "@type": "ImageObject",
          url: "/sajith-logo.png",
          width: 200,
          height: 60,
        },
      },
      publisher: {
        "@type": "Organization",
        name: "Sajith Rice Mill",
        logo: {
          "@type": "ImageObject",
          url: "/sajith-logo.png",
          width: 200,
          height: 60,
        },
      },
      datePublished: blogData.publishDate,
      dateModified: blogData.lastModified,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": typeof window !== "undefined" ? window.location.href : "",
      },
      articleSection: blogData.category,
      keywords: [...blogData.secondaryKeywords, ...blogData.tags].join(", "),
      wordCount: 4500,
      about: [
        {
          "@type": "Thing",
          name: "Sri Lankan Rice Processing",
          description:
            "Traditional and modern rice processing methods in Sri Lanka",
        },
        {
          "@type": "Thing",
          name: "Rice Quality Control",
          description:
            "Quality assurance methods in rice processing and milling",
        },
      ],
      mentions: [
        {
          "@type": "Place",
          name: "Sri Lanka",
          description: "Island nation known for premium rice varieties",
        },
      ],
    };
  };

  // FAQ structured data
  const getFAQStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blogData.content.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  };

  // HowTo structured data for processing stages
  const getHowToStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Process Rice from Paddy to Perfect Grains",
      description:
        "Complete guide to Sri Lankan rice processing in 8 comprehensive stages",
      image: blogData.coverImage.url,
      totalTime: "P7D", // 7 days total process
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: "Variable",
      },
      step: blogData.content.processingStages.map((stage, index) => ({
        "@type": "HowToStep",
        name: stage.title,
        text: stage.description,
        position: index + 1,
        image: `/blog/stage-${stage.id}.webp`,
      })),
    };
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
        itemScope
        itemType="https://schema.org/Action"
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
              itemProp="name"
            >
              {stage.title.split(" - ")[0]}
            </h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4" itemProp="description">
          {stage.description}
        </p>
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
    <div
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
      itemScope
      itemType="https://schema.org/Process"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
          <stage.icon className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <div className="text-sm font-medium text-green-600">
            {stage.stage}
          </div>
          <h2 className="text-2xl font-bold text-gray-900" itemProp="name">
            {stage.title}
          </h2>
          <p className="text-gray-600" itemProp="description">
            {stage.description}
          </p>
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
                itemScope
                itemType="https://schema.org/Action"
              >
                <h4
                  className="font-semibold text-gray-900 mb-2"
                  itemProp="name"
                >
                  {method.name}
                </h4>
                <p
                  className="text-sm text-gray-700 mb-2"
                  itemProp="description"
                >
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
    <>
      {/* Enhanced Head section for SEO */}
      <Head>
        {/* Basic Meta Tags */}
        <title>{blogData.metaTitle}</title>
        <meta name="description" content={blogData.metaDescription} />
        <meta
          name="keywords"
          content={[
            blogData.primaryKeyword,
            ...blogData.secondaryKeywords,
            ...blogData.tags,
          ].join(", ")}
        />
        <meta name="author" content={blogData.author} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`${
            typeof window !== "undefined" ? window.location.origin : ""
          }${blogData.canonicalUrl}`}
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content={blogData.seo.socialMediaTags.ogTitle}
        />
        <meta
          property="og:description"
          content={blogData.seo.socialMediaTags.ogDescription}
        />
        <meta
          property="og:image"
          content={blogData.seo.socialMediaTags.ogImage}
        />
        <meta
          property="og:type"
          content={blogData.seo.socialMediaTags.ogType}
        />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <meta property="og:site_name" content="Sajith Rice Mill" />
        <meta
          property="article:published_time"
          content={blogData.publishDate}
        />
        <meta
          property="article:modified_time"
          content={blogData.lastModified}
        />
        <meta property="article:author" content={blogData.author} />
        <meta property="article:section" content={blogData.category} />
        {blogData.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Cards */}
        <meta
          name="twitter:card"
          content={blogData.seo.socialMediaTags.twitterCard}
        />
        <meta
          name="twitter:title"
          content={blogData.seo.socialMediaTags.twitterTitle}
        />
        <meta
          name="twitter:description"
          content={blogData.seo.socialMediaTags.twitterDescription}
        />
        <meta
          name="twitter:image"
          content={blogData.seo.socialMediaTags.ogImage}
        />

        {/* Additional Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="theme-color" content="#059669" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getStructuredData()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQStructuredData()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getHowToStructuredData()),
          }}
        />
      </Head>

      <article
        className="min-h-screen bg-gray-50"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Enhanced Hero Section */}
        <header className="relative bg-gradient-to-br from-green-600 via-amber-600 to-orange-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[url('/patterns/grain-pattern.svg')] opacity-10" />

          <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Factory className="w-4 h-4" />
                <span className="text-sm font-medium" itemProp="articleSection">
                  {blogData.category}
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                itemProp="headline"
              >
                {blogData.title}
              </h1>

              <p
                className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto"
                itemProp="description"
              >
                {blogData.metaDescription}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-green-200">
                <div
                  className="flex items-center gap-2"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <User className="w-4 h-4" />
                  <span itemProp="name">{blogData.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogData.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <time
                    itemProp="datePublished"
                    dateTime={blogData.publishDate}
                  >
                    {formatDate(blogData.publishDate)}
                  </time>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
                  aria-label="Share this article"
                >
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced Processing Overview Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 text-center"
                itemScope
                itemType="https://schema.org/Statistic"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Processing Stages
                </h3>
                <p
                  className="text-2xl font-bold text-green-600 mb-2"
                  itemProp="value"
                >
                  8
                </p>
                <p className="text-sm text-gray-600">
                  From paddy to perfect grains
                </p>
              </div>

              <div
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6 text-center"
                itemScope
                itemType="https://schema.org/Statistic"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Heritage Years
                </h3>
                <p
                  className="text-2xl font-bold text-amber-600 mb-2"
                  itemProp="value"
                >
                  2,500+
                </p>
                <p className="text-sm text-gray-600">
                  Years of rice processing wisdom
                </p>
              </div>

              <div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 text-center"
                itemScope
                itemType="https://schema.org/Statistic"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Quality Tests
                </h3>
                <p
                  className="text-2xl font-bold text-blue-600 mb-2"
                  itemProp="value"
                >
                  15+
                </p>
                <p className="text-sm text-gray-600">
                  At every processing stage
                </p>
              </div>

              <div
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6 text-center"
                itemScope
                itemType="https://schema.org/Statistic"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Sustainability
                </h3>
                <p
                  className="text-2xl font-bold text-purple-600 mb-2"
                  itemProp="value"
                >
                  100%
                </p>
                <p className="text-sm text-gray-600">
                  Waste utilization achieved
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main
          className="container mx-auto px-4 py-12 max-w-7xl"
          itemProp="articleBody"
        >
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
          <section className="mb-16" id="processing-stages">
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

          {/* Enhanced FAQ Section for SEO */}
          <section
            className="mb-16"
            id="faq"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions About Sri Lankan Rice Processing
              </h2>
              <div className="space-y-6">
                {blogData.content.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h3
                      className="font-bold text-gray-900 mb-3 text-lg"
                      itemProp="name"
                    >
                      {item.question}
                    </h3>
                    <div
                      itemScope
                      itemType="https://schema.org/Answer"
                      itemProp="acceptedAnswer"
                    >
                      <p
                        className="text-gray-700 leading-relaxed"
                        itemProp="text"
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quality Assurance Section */}
          <section className="mb-16" id="quality-assurance">
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
                          <p className="text-sm text-gray-700">
                            {test.purpose}
                          </p>
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
                            <span className="text-sm text-gray-700">
                              {cert}
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

          {/* Enhanced Conclusion */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Conclusion: Excellence Through Tradition and Innovation
              </h2>
              <p
                className="text-lg leading-relaxed mb-8 text-gray-200"
                itemProp="abstract"
              >
                {blogData.content.conclusion}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">
                    For Rice Processors
                  </h3>
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

          {/* Related Articles Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/blog/sudu-kakulu-rice-guide" className="group block">
                  <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                      Complete Guide to Sudu Kakulu Rice Varieties
                    </h3>
                    <p className="text-sm text-gray-600">
                      Explore the premium white rice varieties that make Sri
                      Lankan cuisine exceptional.
                    </p>
                  </div>
                </a>
                <a
                  href="/blog/rice-nutrition-health-benefits"
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                      Health Benefits of Traditional Sri Lankan Rice
                    </h3>
                    <p className="text-sm text-gray-600">
                      Discover the nutritional advantages of heritage rice
                      varieties.
                    </p>
                  </div>
                </a>
                <a href="/blog/cooking-perfect-rice" className="group block">
                  <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                      How to Cook Perfect Sri Lankan Rice Every Time
                    </h3>
                    <p className="text-sm text-gray-600">
                      Master the art of cooking traditional Sri Lankan rice
                      varieties.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Enhanced Tags with SEO keywords */}
          <section className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Article Topics
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                ...blogData.tags,
                ...blogData.secondaryKeywords.slice(0, 4),
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm transition-colors cursor-pointer"
                  itemProp="keywords"
                >
                  #{tag.replace(/ /g, "")}
                </span>
              ))}
            </div>
          </section>
        </main>

        {/* Enhanced Author Bio Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <div className="text-center">
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  itemProp="name"
                >
                  About {blogData.author}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed mb-6"
                  itemProp="description"
                >
                  The Sajith Rice Mill Processing Team brings over a decade of
                  expertise in traditional Sri Lankan rice processing methods.
                  Our team combines ancestral knowledge with modern quality
                  control techniques to deliver premium rice varieties that
                  preserve the authentic taste and nutritional value of Sri
                  Lankan heritage grains.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="/about"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn More About Our Process
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href="/contact"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Contact Our Experts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org breadcrumb markup */}
        <div
          className="sr-only"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a itemProp="item" href="/">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a itemProp="item" href="/blog">
              <span itemProp="name">Blog</span>
            </a>
            <meta itemProp="position" content="2" />
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name">{blogData.title}</span>
            <meta itemProp="position" content="3" />
          </div>
        </div>

        {/* Hidden metadata for SEO */}
        <div className="sr-only">
          <meta itemProp="wordCount" content="4500" />
          <meta itemProp="genre" content="Educational" />
          <meta
            itemProp="audience"
            content="Rice processors, consumers, agricultural professionals"
          />
          <div itemProp="about" itemScope itemType="https://schema.org/Thing">
            <meta itemProp="name" content="Rice Processing" />
            <meta
              itemProp="description"
              content="Traditional and modern rice processing methods"
            />
          </div>
          <div
            itemProp="mentions"
            itemScope
            itemType="https://schema.org/Place"
          >
            <meta itemProp="name" content="Sri Lanka" />
            <meta
              itemProp="description"
              content="Island nation known for premium rice varieties"
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default Blog2;
