import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// ✅ NEW: Separate viewport export (Next.js 14+ requirement)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15803d" },
    { media: "(prefers-color-scheme: dark)", color: "#15803d" },
  ],
  colorScheme: "light",
};

export const metadata = {
  title: {
    default:
      "Sajith Rice Mill - Premium Sri Lankan Rice | සුදු කැකුළු & සම්බා කැකුළු | Best Price",
    template: "%s | Sajith Rice Mill",
  },
  description:
    "J.A. Santha Nimal's premium Sri Lankan rice mill offering සුදු කැකුළු (Sudu Kakulu), සම්බා කැකුළු (Samba), රතු කැකුළු (Ratu Kakulu) at best prices. Chemical-free traditional කැකුළු since 2009. Bulk orders across Sri Lanka.",
  keywords: [
    // English keywords
    "Sajith Rice Mill",
    "J.A. Santha Nimal",
    "Santha Nimal Rice Mill",
    "Sri Lankan rice",
    "Sudu Kakulu rice",
    "Samba Kakulu rice",
    "premium rice Sri Lanka",
    "organic rice",
    "traditional rice",
    "bulk rice supplier",
    "chemical-free rice",
    "rice mill Sri Lanka",
    "wholesale rice",
    "best price rice",
    "Nadalagamuwa rice",
    "quality rice supplier",
    "samba rice",
    "white rice Sri Lanka",
    "red rice Sri Lanka",
    "rice mills in sri lanka",

    // Sinhala keywords
    "කැකුළු",
    "සුදු කැකුළු",
    "සම්බා",
    "සම්බා කැකුළු",
    "රතු කැකුළු",
    "සජිත් සහල් මෝල",
    "ප්‍රිමියම් සහල්",
    "ඔර්ගනික් සහල්",
    "රසායනික නොමැති සහල්",

    // Location-based
    "Wadumunnegedara rice",
    "North Western Province rice",
    "Giriulla rice supplier",
    "Negombo rice delivery",
    "Colombo rice supplier",
  ],
  authors: [{ name: "Sajith Rice Mill" }, { name: "J.A. Santha Nimal" }],
  creator: "Sajith Rice Mill",
  publisher: "Sajith Rice Mill",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
  ),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "si-LK": "/", // Sinhala
      "ta-LK": "/", // Tamil
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com",
    title:
      "Sajith Rice Mill - Premium Sri Lankan Rice | සුදු කැකුළු & සම්බා කැකුළු",
    description:
      "J.A. Santha Nimal's premium Sri Lankan rice mill. Best price සුදු කැකුළු, සම්බා කැකුළු, රතු කැකුළු. Chemical-free traditional කැකුළු since 2009.",
    siteName: "Sajith Rice Mill",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sajith Rice Mill - Premium Sri Lankan Rice - සුදු කැකුළු සම්බා කැකුළු",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SajithRiceMill",
    creator: "@SajithRiceMill",
    title: "Sajith Rice Mill - Premium Sri Lankan Rice | Best Price කැකුළු",
    description:
      "J.A. Santha Nimal's premium rice mill. සුදු කැකුළු, සම්බා කැකුළු, රතු කැකුළු at best prices. Chemical-free traditional rice since 2009.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Sajith Rice Mill Premium Rice Products",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
  category: "food",
  classification: "business",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        rel: "android-chrome-icon",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        rel: "android-chrome-icon",
      },
    ],
  },
  // Additional SEO improvements
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sajith Rice Mill",
    "application-name": "Sajith Rice Mill",
    "msapplication-TileColor": "#15803d",
    "msapplication-TileImage": "/android-chrome-192x192.png",
    "theme-color": "#15803d",
  },
};

// Enhanced JSON-LD Structured Data with better organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
  }/#organization`,
  name: "Sajith Rice Mill",
  alternateName: [
    "Santha Nimal Rice Mill",
    "සජිත් සහල් මෝල",
    "J.A. Santha Nimal Rice Mill",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com",
  logo: {
    "@type": "ImageObject",
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
    }/logo-512x512.png`,
    width: 512,
    height: 512,
    caption: "Sajith Rice Mill Logo",
  },
  image: [
    {
      "@type": "ImageObject",
      url: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
      }/og-image.jpg`,
      width: 1200,
      height: 630,
      caption: "Sajith Rice Mill - Premium Sri Lankan Rice Products",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+94-77-925-8293",
      contactType: "customer service",
      areaServed: "LK",
      availableLanguage: ["English", "Sinhala", "Tamil"],
      hoursAvailable: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "16:00",
        },
      ],
    },
    {
      "@type": "ContactPoint",
      email: "sajithricemill@gmail.com",
      contactType: "sales",
      areaServed: "LK",
      availableLanguage: ["English", "Sinhala", "Tamil"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nadalagamuwa, Wadumunnegedara",
    addressLocality: "Wadumunnegedara",
    addressRegion: "North Western Province",
    addressCountry: "LK",
    postalCode: "60170",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.398382,
    longitude: 80.006091,
  },
  foundingDate: "2009-12-01",
  founder: {
    "@type": "Person",
    name: "J.A. Santha Nimal",
    alternateName: "Santha Nimal",
  },
  description:
    "Premium quality Sudu Kakulu (සුදු කැකුළු), Samba Kakulu (සම්බා කැකුළු), and Ratu Kakulu (රතු කැකුළු) rice supplier in Sri Lanka. Chemical-free, traditional organic methods since 2009 with best prices.",
  slogan: "Premium Quality Rice - කැකුළු ප්‍රිමියම් තත්ත්වය",
  industry: "Food Production",
  numberOfEmployees: "10-50",
  email: "sajithricemill@gmail.com",
  priceRange: "$$",
  paymentAccepted: ["Cash", "Bank Transfer", "Mobile Payment"],
  currenciesAccepted: "LKR",
  areaServed: [
    {
      "@type": "Country",
      name: "Sri Lanka",
    },
    {
      "@type": "State",
      name: "North Western Province",
    },
    {
      "@type": "State",
      name: "Western Province",
    },
  ],
  serviceArea: [
    "Giriulla",
    "Negombo",
    "Colombo",
    "Kelaniya",
    "Minuwangoda",
    "Katunayake",
    "Ekala",
    "Kotugoda",
    "Marandagahamula",
  ],
  knowsAbout: [
    "Rice cultivation",
    "Organic farming",
    "Traditional rice varieties",
    "සහල් වගාව",
    "ඔර්ගනික් ගොවිතැන",
    "සම්ප්‍රදායික සහල් වර්ග",
  ],
  sameAs: [
    // Add social media URLs when available
    // "https://www.facebook.com/SajithRiceMill",
    // "https://www.instagram.com/sajithricemill",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
  }/#localbusiness`,
  name: "Sajith Rice Mill",
  alternateName: "සජිත් සහල් මෝල",
  image: [
    `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
    }/logo-512x512.png`,
    `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
    }/og-image.jpg`,
  ],
  telephone: "+94-77-925-8293",
  email: "sajithricemill@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nadalagamuwa, Wadumunnegedara",
    addressLocality: "Wadumunnegedara",
    addressRegion: "North Western Province",
    addressCountry: "LK",
    postalCode: "60170",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.398382,
    longitude: 80.006091,
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  servesCuisine: "Sri Lankan",
  paymentAccepted: ["Cash", "Bank Transfer", "Mobile Payment"],
  currenciesAccepted: "LKR",
  hasMap: `https://maps.google.com/?q=7.398382,80.006091`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
  }/#website`,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com",
  name: "Sajith Rice Mill",
  description:
    "Premium Sri Lankan rice supplier offering chemical-free traditional rice varieties",
  publisher: {
    "@id": `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
    }/#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
        }/#products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: ["en-US", "si-LK", "ta-LK"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item:
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
      }/#products`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
      }/#contact`,
    },
  ],
};

// Product catalog schema
const productCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Premium Rice Products - ප්‍රිමියම් සහල් නිෂ්පාදන",
  description: "Complete range of traditional Sri Lankan rice varieties",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Sudu Kakulu Rice 5kg - සුදු කැකුළු",
      description:
        "Premium white raw rice, chemical-free and organic. 5kg pack at best price.",
      category: "Food & Beverages > Rice",
      brand: {
        "@type": "Brand",
        name: "Sajith Rice Mill",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceRange: "Best Price",
        priceCurrency: "LKR",
        seller: {
          "@id": `${
            process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
          }/#organization`,
        },
      },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Samba Kakulu Rice 5kg - සම්බා කැකුළු",
      description:
        "Premium aromatic rice with firm texture. Traditional samba variety 5kg pack.",
      category: "Food & Beverages > Rice",
      brand: {
        "@type": "Brand",
        name: "Sajith Rice Mill",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceRange: "Best Price",
        priceCurrency: "LKR",
        seller: {
          "@id": `${
            process.env.NEXT_PUBLIC_SITE_URL || "https://www.sajithricemill.com"
          }/#organization`,
        },
      },
    },
    // Add more products as needed
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productCatalogSchema),
          }}
        />

        {/* Enhanced Meta Tags */}
        <meta name="geo.region" content="LK" />
        <meta
          name="geo.placename"
          content="Nadalagamuwa, North Western Province"
        />
        <meta name="geo.position" content="7.398382;80.006091" />
        <meta name="ICBM" content="7.398382, 80.006091" />

        {/* Language and Content */}
        <meta name="language" content="English, Sinhala, Tamil" />
        <meta name="content-language" content="en, si, ta" />

        {/* Business Information */}
        <meta name="business-name" content="Sajith Rice Mill" />
        <meta name="business-type" content="Rice Mill, Food Production" />
        <meta name="established" content="2009" />

        {/* Enhanced DNS Prefetch and Preconnect */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//clarity.ms" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Resource Hints for Performance */}
        <link rel="preload" href="/hero1.webp" as="image" type="image/webp" />
        <link rel="prefetch" href="/hero2.webp" as="image" type="image/webp" />
        <link rel="prefetch" href="/hero3.webp" as="image" type="image/webp" />

        {/* Security Headers */}
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Performance Optimization */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>

      <body
        className={`${inter.className} antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        {/* Enhanced Google Analytics with better error handling */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
              onLoad={() => {
                console.log("Google Analytics loaded successfully");
              }}
              onError={() => {
                console.warn("Failed to load Google Analytics");
              }}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: 'Sajith Rice Mill - Premium Sri Lankan Rice',
                  page_location: window.location.href,
                  custom_map: {
                    'dimension1': 'rice_type',
                    'dimension2': 'package_size',
                    'dimension3': 'location'
                  },
                  // Enhanced ecommerce tracking
                  send_page_view: true,
                  anonymize_ip: true,
                  cookie_expires: 63072000, // 2 years
                });
                
                // Track enhanced ecommerce events
                gtag('event', 'page_view', {
                  page_title: document.title,
                  page_location: window.location.href,
                  content_group1: 'Rice Products',
                  content_group2: 'Sri Lankan Food',
                });
              `}
            </Script>
          </>
        )}

        {/* Enhanced Microsoft Clarity with error handling */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            onLoad={() => {
              console.log("Microsoft Clarity loaded successfully");
            }}
            onError={() => {
              console.warn("Failed to load Microsoft Clarity");
            }}
          >
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <Navbar />

        <main
          id="main-content"
          role="main"
          itemScope
          itemType="https://schema.org/WebPage"
          className="min-h-screen"
        >
          {children}
        </main>

        <Footer />

        {/* Performance monitoring */}
        <SpeedInsights />

        {/* Service Worker Registration for PWA */}
        <Script id="service-worker-registration" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                  console.log('SW registered: ', registration);
                }).catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
